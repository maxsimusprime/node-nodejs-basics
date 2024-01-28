import { createReadStream } from "node:fs";

const read = async () => {
  const file = "./src/streams/files/fileToRead.txt";

  const stream = createReadStream(file, "utf-8");

  let data = "";

  stream.on("data", (chunk) => (data += chunk));
  stream.on("end", () => process.stdout.write(data));

  // or just - stream.pipe(process.stdout)
};

await read();
