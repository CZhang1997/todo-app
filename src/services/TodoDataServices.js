import AuthenticationService from "../authentication/AuthenticationService";
import AxiosClient from "../authentication/utils/AxiosClient";
export const URL = "http://localhost:8080";

class TodoDataService {
  getTodoList(username) {
    // const cookies = new Cookies();
    // const basicAuthHeader = cookies.get("basicAuthToken");
    // return axios.get(`${URL}/user/${username}/todos`, {
    //   headers: {
    //     authorization: basicAuthHeader + "1as",
    //   },
    // });
    return AxiosClient.get(`${URL}/user/${username}/todos`);
  }
  //   /user/{username}/todos/{id}

  deleteItem(id) {
    const username = AuthenticationService.getUsername();
    return AxiosClient.delete(`${URL}/user/${username}/todos/${id}`);
  }

  getItemById(id) {
    const username = AuthenticationService.getUsername();
    return AxiosClient.get(`${URL}/user/${username}/todos/${id}`);
  }

  updateItemById(id = 0, todo) {
    const username = AuthenticationService.getUsername();
    return AxiosClient.put(
      `${URL}/user/${username}/todos/${id}`,
      {},
      {
        ...todo,
        username,
      }
    );
  }
}

export default new TodoDataService();
