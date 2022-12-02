const parseArgs = () => {
    const args = [];

    for (let i = 0; i < process.argv.length; i++) {
        const arg = process.argv[i];

        if (arg.startsWith('--')) {
            args.push(`${arg} is ${process.argv[++i]}`);
        }
    }

    console.log(args.length ? args.join('; ') : 'No arguments')
};

parseArgs();