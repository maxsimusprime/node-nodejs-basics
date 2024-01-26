import { access, cp } from "node:fs/promises";

const src = "./src/fs/files";
const dest = "./src/fs/files_copy";

const copy = async () => {
  await access(src).catch(() => {
    throw new Error("FS operation failed");
  });

  await access(dest).then(
    () => {
      throw new Error("FS operation failed");
    },
    async () => {
      await cp(src, dest, { recursive: true });
    }
  );
};

await copy();
