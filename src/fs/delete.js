import { access, rm } from "node:fs/promises";

const fileToRemove = "./src/fs/files/fileToRemove.txt";

const remove = async () => {
  await access(fileToRemove).then(
    async () => {
      await rm(fileToRemove);
    },
    () => {
      throw new Error("FS operation failed");
    }
  );
};

await remove();
