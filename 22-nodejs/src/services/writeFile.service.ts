import { promisify } from "util";
import { writeFile }  from "fs";

const fsWriteFile = promisify(writeFile);

async function write(to, data) {
  await fsWriteFile(to, data);
}

export default write
