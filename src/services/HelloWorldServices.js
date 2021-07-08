import AxiosClient from "../authentication/utils/AxiosClient";

export const URL = "http://localhost:8080";

class HelloWorldService {
  executeHelloWorldService() {
    return AxiosClient.get(URL + "/hello-world");
  }

  getHelloWorldBean() {
    return AxiosClient.get(URL + "/hello-world-bean");
  }

  getHelloWorldPath(name) {
    // let username = "czhang1997";
    // let pw = "password";
    // let basicAuthHeader = "Basic " + window.btoa(username + ":" + pw);
    return AxiosClient.get(URL + "/hello-world/" + name, {
      // headers: {
      //   authorization: basicAuthHeader,
      //   "Access-Control-Allow-Origin": true,
      // },
    });
  }
}

export default new HelloWorldService();
