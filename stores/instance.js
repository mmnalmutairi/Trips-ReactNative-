import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.8.119:9000",
});

export default instance;
