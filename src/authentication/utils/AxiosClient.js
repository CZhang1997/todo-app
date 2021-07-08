import axios from "axios";
import Cookies from "universal-cookie";

export const URL = "http://localhost:8080";

class AxiosClient {
  get(url, headers, body) {
    const cookies = new Cookies();
    const basicAuthHeader = cookies.get("basicAuthToken");
    return axios.get(url, {
      headers: {
        authorization: basicAuthHeader,
        ...headers,
      },
    });
  }

  post(url, headers, body) {
    const cookies = new Cookies();
    const basicAuthHeader = cookies.get("basicAuthToken");
    return axios.post(
      url,
      { ...body },
      {
        headers: {
          authorization: basicAuthHeader,
          ...headers,
        },
      }
    );
  }

  put(url, headers, data) {
    const cookies = new Cookies();
    const basicAuthHeader = cookies.get("basicAuthToken");
    return axios.put(
      url,
      { ...data },
      {
        headers: {
          authorization: basicAuthHeader,
          ...headers,
        },
      }
    );
  }

  delete(url, headers = {}, body = {}) {
    const cookies = new Cookies();
    const basicAuthHeader = cookies.get("basicAuthToken");
    return axios.delete(url, {
      headers: {
        authorization: basicAuthHeader,
        ...headers,
      },
    });
  }
}

export default new AxiosClient();
