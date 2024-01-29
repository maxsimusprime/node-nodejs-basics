import { readFile } from "node:fs/promises";

const fileToRead = "./src/fs/files/fileToRead.txt";

const read = async () => {
  const content = await readFile(fileToRead, { encoding: "utf8" }).catch(() => {
    throw new Error("FS operation failed");
  });

  console.log(content);
};

await read();
