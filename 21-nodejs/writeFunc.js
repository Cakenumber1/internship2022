const fs = require('fs');
const {write} = require('./services');
const http = require('http');

function readAndWriteLocal(from, to) {
  fs.readFile(from, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    write(to, data).then().catch();
  });
}

function readAndWriteWeb(from, to) {
  const server = http.createServer((req, res) => {
    let body = '';
    if (req.method === 'POST') {
      req.on('data', () => {
        body+= fs.readFileSync(from, 'utf-8');
      });
      req.on('end', async () => {
        await write(to, body);
        res.end('done');
      });
    } else {
      res.end('wrong method');
    }
  });

  server.listen(3000, () =>{
    console.log('Cервер запущен http://localhost:3000');
  });
}

exports.readAndWriteLocal = readAndWriteLocal;
exports.readAndWriteWeb = readAndWriteWeb;
