import { createWriteStream } from "node:fs";

const write = async () => {
  const file = "./src/streams/files/fileToWrite.txt";

  const { stdin } = process;

  const stream = createWriteStream(file, "utf-8");

  stdin.on("data", (chunk) => stream.write(chunk));

  // or just - stdin.pipe(stream)
};

await write();
