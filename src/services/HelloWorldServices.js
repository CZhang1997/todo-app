import axios from "axios";

export const URL = "http://localhost:8080";

class HelloWorldService {
  executeHelloWorldService() {
    return axios.get(URL + "/hello-world");
  }

  getHelloWorldBean() {
    return axios.get(URL + "/hello-world-bean");
  }

  getHelloWorldPath(name) {
    return axios.get(URL + "/hello-world/" + name);
  }
}

export default new HelloWorldService();
