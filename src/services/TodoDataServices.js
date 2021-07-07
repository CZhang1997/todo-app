import axios from "axios";

export const URL = "http://localhost:8080";

class TodoDataService {
  getTodoList(username) {
    return axios.get(`${URL}/user/${username}/todos`);
  }
  //   /user/{username}/todos/{id}

  deleteItem(username, id) {
    return axios.delete(`${URL}/user/${username}/todos/${id}`);
  }
}

export default new TodoDataService();
