const util = require('util');
const fs = require('fs');
const fsWriteFile = util.promisify(fs.writeFile);

async function write(to, data) {
  await fsWriteFile(to, data);
}

exports.write = write;
