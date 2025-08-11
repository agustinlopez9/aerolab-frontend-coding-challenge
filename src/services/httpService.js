import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_AEROLAB_API_URL ||
    "https://coding-challenge-api.aerolab.co/",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AEROLAB_API_KEY}`,
  },
});

const http = {
  get: api.get,
  post: api.post,
  put: api.put,
  delete: api.delete,
};

export default http;
