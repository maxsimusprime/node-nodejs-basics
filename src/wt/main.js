import { cpus } from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  const numberOfCpuCore = cpus().length; 
  // or os.availableParallelism()

  const poolOfWorkers = [...new Array(numberOfCpuCore)]
    .map((_, index) => index + 10)
    .map(
      (workerData) =>
        new Promise((resolve) => {
          const worker = new Worker("./src/wt/worker.js", { workerData });
          worker.on("message", (data) => resolve({ status: "resolved", data }));
          worker.on("error", () => resolve({ status: "error", data: null }));
        })
    );

  Promise.all(poolOfWorkers).then((result) => console.log(result));
};

await performCalculations();
