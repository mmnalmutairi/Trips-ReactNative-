import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.43.49:9000",
});

export default instance;
