import { readdir } from "node:fs/promises";

const src = "./src/fs/files";

const list = async () => {
  const fileList = await readdir(src).catch(() => {
    throw new Error("FS operation failed");
  });

  console.log(fileList);
};

await list();
