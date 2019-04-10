import axios from "axios";

const agent = axios.create({
  baseURL: 'http://localhost:1338'
});

export default agent;