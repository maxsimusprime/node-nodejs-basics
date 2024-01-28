import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  const { stdout } = process;

  const file = "./src/hash/files/fileToCalculateHashFor.txt";

  const stream = createReadStream(file, "utf-8");

  stream
    .pipe(createHash("sha256").setEncoding("hex"))
    .pipe(stdout);
};

await calculateHash();
