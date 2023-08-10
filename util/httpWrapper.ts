export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete,
};

function get({ url, token }: { url: string; token: string }) {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post({ url, body, token }: { url: string; token: string; body: any }) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put({ url, body, token }: { url: string; token: string; body: any }) {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function _delete({ url, token }: { url: string; token: string }) {
    const requestOptions = {
        method: "DELETE",
        Authorization: `Bearer ${token}`,
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response: Response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
