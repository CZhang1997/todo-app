import axios from "axios";
import { URL } from "../services/TodoDataServices";
import Cookies from "universal-cookie";

export const AUTHENTICATED_USER = "AUTHENTICATED_USER";

class AuthenticationService {
  executeLoginCheck(username, password) {
    return axios.get(URL + "/basicAuth", {
      headers: {
        authorization: this.createBasicAuthToken(username, password),
        // "Access-Control-Allow-Origin": true,
      },
    });
  }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(AUTHENTICATED_USER, username);
    const cookies = new Cookies();
    cookies.set(
      "basicAuthToken",
      this.createBasicAuthToken(username, password)
    );
    console.log(cookies.get("basicAuthToken"));
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  logout() {
    const cookies = new Cookies();
    cookies.remove("basicAuthToken");
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    if (user === null) return false;
    return true;
  }

  getUsername() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers = {
          ...config.headers,
          authorization: basicAuthHeader,
          //   "Access-Control-Allow-Origin": true,
        };
      }
      return config;
    });
  }
}

export default new AuthenticationService();
