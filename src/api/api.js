import axios from "axios";

const api = axios.create({
    // baseURL: "https://62ea151d3a5f1572e873a7e1.mockapi.io",
    baseURL: "http://localhost:8080",
});

export default api