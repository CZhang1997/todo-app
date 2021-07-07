import axios from "axios";
import AuthenticationService from "../authentication/AuthenticationService";

export const URL = "http://localhost:8080";

class TodoDataService {
  getTodoList(username) {
    return axios.get(`${URL}/user/${username}/todos`);
  }
  //   /user/{username}/todos/{id}

  deleteItem(id) {
    const username = AuthenticationService.getUsername();
    return axios.delete(`${URL}/user/${username}/todos/${id}`);
  }

  getItemById(id) {
    const username = AuthenticationService.getUsername();
    return axios.get(`${URL}/user/${username}/todos/${id}`);
  }

  updateItemById(id, todo) {
    const username = AuthenticationService.getUsername();
    return axios.put(`${URL}/user/${username}/todos/${id}`, {
      ...todo,
      username,
    });
  }
}

export default new TodoDataService();
