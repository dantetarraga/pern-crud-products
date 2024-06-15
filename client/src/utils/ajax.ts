import axios from "axios";
import { AjaxConfig } from "../types/ajaxConfig";

export const ajax = async (config: AjaxConfig) => {
  return await axios
    .request(config)
    .then((res) => res.data)
    .catch((err) => console.error(err.response));
};
