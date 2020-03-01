

export const getRepos = (user) => {
    return fetch(`https://api.github.com/users/${user}/repos`).then(r => r.json())
};

