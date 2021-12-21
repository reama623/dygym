import axios from "axios";
import { config } from "./config";

const baseURL = `http://${config.api.url}:${config.api.port}/api`;
export const apiAxios = (option) =>
  axios.create({
    baseURL,
    ...option,
  });
