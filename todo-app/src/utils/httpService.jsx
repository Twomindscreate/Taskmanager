import axios from "axios";
import BASE_URL from "./urls";

const HttpService = (urlParam, type, payload) => {
  const url = BASE_URL + urlParam;
  switch (type) {
    case "get": {
      return axios.get(url);
    }
    case "post": {
      return axios.post(url, payload);
    }
    case "put": {
      return axios.put(url, payload);
    }
    case "patch": {
      return axios.patch(url, payload);
    }
    case "delete": {
      return axios.delete(url);
    }

    default: {
      break;
    }
  }
  return null;
};

export default HttpService;
