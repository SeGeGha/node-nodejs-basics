const parseEnv = () => {
    const rssArgs = Object.entries(process.env).reduce((acc, [key, value]) => {
        if (key.startsWith('RSS_')) {
            acc.push(`${key}=${value}`);
        }

        return acc;
    }, []);

    return console.log(rssArgs.length ? rssArgs.join('; ') : 'No RSS_ variables');
};

parseEnv();