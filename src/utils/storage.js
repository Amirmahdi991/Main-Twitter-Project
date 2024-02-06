const authToken = {
    key: "AUTH_TOKEN",
    get: () => {
        if (localStorage.getItem(authToken.key)) {
            return localStorage.getItem(authToken.key);
        } else {
            return null;
        }
    },
    set: (token) => {
        localStorage.setItem(authToken.key, token);
    },
    remove: () => {
        localStorage.removeItem(authToken.key);
    },
};

export default authToken;
