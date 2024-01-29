import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  const command = "node";
  const pathArg = "./src/cp/files/script.js";

  spawn(command, [pathArg, ...args], {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });
};

spawnChildProcess(["1", "2", "3"]);
