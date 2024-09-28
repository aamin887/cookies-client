import axios from "axios";

// const url = "https://cookies-uj9t.onrender.com/auth/login";

const url = "http://localhost:3000/auth/login";

const instance = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default instance;
