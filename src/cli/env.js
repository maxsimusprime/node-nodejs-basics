const parseEnv = () => {
  const { env } = process;

  const res = Object.keys(env)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => `${key}=${env[key]}`)
    .join('; ');

  console.log(res);
};

parseEnv();
