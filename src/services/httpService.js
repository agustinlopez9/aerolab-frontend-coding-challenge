import axios from "axios";

const api = axios.create({
    baseURL: "https://coding-challenge-api.aerolab.co/",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM3YTM0MDA2MTJjZDAwMjE3YjhiZjEiLCJpYXQiOjE2NDc4MTM0NDB9.8yHcZSap-gc8x_Ucj5lbm5FHgYdUKATDqLQTWn1f0Zk",
    },
});

const http = {
    get: api.get,
    post: api.post,
    put: api.put,
    delete: api.delete,
};

export default http;
