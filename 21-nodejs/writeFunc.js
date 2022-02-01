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
  const server = http.createServer(async (req, res) => {
    if (req.method === 'POST') {
      await fs.readFile(from, 'utf-8', async (err, data) => {
        if (err) {
          res.end(err.toString());
        } else {
          await write(to, data);
          res.end('done');
        }
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
