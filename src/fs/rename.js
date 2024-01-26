import { access, rename as rn } from "node:fs/promises";

const wrongFilename = "./src/fs/files/wrongFilename.txt";
const properFilename = "./src/fs/files/properFilename.md";

const rename = async () => {
  await access(wrongFilename).catch(() => {
    throw new Error("FS operation failed");
  });
  await access(properFilename).then(() => {
    throw new Error("FS operation failed");
  },
  async () => {
    await rn(wrongFilename, properFilename)
  });
};

await rename();
