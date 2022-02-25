const util = require('util');
const fs = require('fs');
const fsWriteFile = util.promisify(fs.writeFile);
const fsReadFile = util.promisify(fs.readFile);

async function write(to, data) {
  await fsWriteFile(to, data);
}
async function read(from) {
  return await fsReadFile(from, 'utf-8');
}
async function copy(from, to) {
  try {
    const data = await read(from);
    await write(to, data);
  } catch (e) {
    console.error(e);
  }
}

exports.write = write;
exports.copy = copy;
