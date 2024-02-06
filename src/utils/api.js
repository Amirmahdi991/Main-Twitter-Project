import authToken from "./storage";

const BASE_URL = "https://hey.mahdisharifi.dev/api";

const API = {
    auth: {
        register: `${BASE_URL}/auth/register`,
        login: `${BASE_URL}/auth/login`,
        me: `${BASE_URL}/auth/me`,
    },
    tweet: {
        list: `${BASE_URL}/tweets`,
    },
};

function responseValidator(status) {
    return status >= 200 && status <= 299;
}

function get(url, callback) {
    let status;
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${authToken.get()}`,
        },
    })
        .then((response) => {
            status = response.status;
            return response.json();
        })
        .then((data) => {
            callback(data, status);
        });
}

function post(url, body, callback) {
    let status;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((response) => {
            status = response.status;
            return response.json();
        })
        .then((data) => {
            callback(data, status);
        })
        .catch((errors) => {
            callback(errors, status);
        });
}

export { get, post, responseValidator };
export default API;
