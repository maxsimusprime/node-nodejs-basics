import { access, appendFile } from "node:fs/promises";

const filePath = "./src/fs/files/fresh.txt";

const create = async () => {
  await access(filePath).then(
    () => {
      throw new Error("FS operation failed");
    },
    async () => await appendFile(filePath, "I am fresh and young")
  );
};

await create();
