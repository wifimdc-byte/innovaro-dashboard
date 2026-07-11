import axios from "axios";

const api = axios.create({
    baseURL: "https://innovaro-dashboard.onrender.com"
});

export default api;
