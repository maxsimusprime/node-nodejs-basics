import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from 'zlib';

const compress = async () => {
  const fileToCompress = "./src/zip/files/fileToCompress.txt";
  const archive = "./src/zip/files/archive.gz";

  const readStream = createReadStream(fileToCompress);
  const writeStream = createWriteStream(archive);

  readStream
    .pipe(createGzip())
    .pipe(writeStream);
};

await compress();
