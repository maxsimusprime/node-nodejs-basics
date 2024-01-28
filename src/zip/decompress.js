import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";

const decompress = async () => {
  const archive = "./src/zip/files/archive.gz";
  const fileToCompress = "./src/zip/files/fileToCompress.txt";

  const readStream = createReadStream(archive);
  const writeStream = createWriteStream(fileToCompress);

  readStream
    .pipe(createGunzip())
    .pipe(writeStream);
};

await decompress();
