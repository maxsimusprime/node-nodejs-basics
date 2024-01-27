const parseArgs = () => {

  const { argv } = process;

  const res = argv
    .slice(2)
    .reduce((acc, el, id, arr) => {
        if (el.startsWith('--') && !arr[el+1]?.startsWith('--')) {
            return [...acc, `${el.slice(2)} is ${arr[id+1]}`];
        }
        return acc;
    }, [])
    .join(', ');

  console.log(res);
};

parseArgs();
