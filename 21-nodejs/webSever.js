const {write} = require('./services');
const http = require('http');

function readAndWrite(to) {
  const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', async () => {
        try {
          await write(to, body);
          res.end('done');
        } catch (e) {
          res.end(e.toString);
        }
      });
    }
  });

  server.listen(3000, () => {
    console.log('Cервер запущен http://localhost:3000');
  });
}

exports.readAndWrite = readAndWrite;
