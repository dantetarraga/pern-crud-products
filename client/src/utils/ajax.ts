import axios from "axios";
import { AjaxConfig } from "../types/ajaxConfig";

export const ajax = async (config: AjaxConfig) =>
  await axios
    .request(config)
    .then((res) => res.data)
    .catch((err) => err.response.data);
