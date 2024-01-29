import { Transform } from "node:stream";

const transform = async () => {
  const { stdin, stdout } = process;

  const transform = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.reverse().toString() + "\n");
    },
  });

  stdin
    .pipe(transform)
    .pipe(stdout);
};

await transform();
