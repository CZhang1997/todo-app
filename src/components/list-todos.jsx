import React, { Component } from "react";
import HelloWorldServices from "../services/HelloWorldServices";
import TodoDataServices from "../services/TodoDataServices";
import AuthenticationService from "../authentication/AuthenticationService";
import moment from "moment";

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      message: "",
    };
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
    this.updateTodoHandler = this.updateTodoHandler.bind(this);
  }

  componentDidMount() {
    const username = AuthenticationService.getUsername();
    TodoDataServices.getTodoList(username)
      .then((res) => {
        const { data } = res;
        this.setState({ todo: data });
      })
      .catch((e) => console.log(e));
  }

  deleteTodoHandler = (id) => {
    TodoDataServices.deleteItem(id).then((res) => {
      const { todo } = this.state;
      console.log(res);
      this.setState({
        message: `Delete of todo id${id} successful!`,
        todo: todo.filter((t) => t.id !== id),
      });
    });
  };

  updateTodoHandler = (id) => {
    console.log("update");
    this.props.history.push(`/todos/${id}`);
    // TodoDataServices.deleteItem(id).then((res) => {
    //   const { todo } = this.state;
    //   console.log(res);
    //   this.setState({
    //     message: `Delete of todo id${id} successful!`,
    //     todo: todo.filter((t) => t.id !== id),
    //   });
    // });
  };

  retrieveWelcomeMessage() {
    // HelloWorldServices.executeHelloWorldService()
    // HelloWorldServices.getHelloWorldBean()
    //   .then((res) => {
    //     const {
    //       data: { message: data },
    //     } = res;
    //     console.log(data);
    //     this.setState({
    //       message: data,
    //     });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    const username = AuthenticationService.getUsername();
    HelloWorldServices.getHelloWorldPath(username)
      .then((res) => {
        const {
          data: { message: data },
        } = res;
        console.log(data);
        this.setState({
          message: data,
        });
      })
      .catch((e) => {
        console.log(e.response);
        // const {
        //   data: { message: data },
        // } = e.response;
        this.setState({
          message: "fetch fail",
        });
      });
  }
  render() {
    // const { name = "" } = this.props.match.params;
    const { todo, message } = this.state;
    return (
      <div className="welcome">
        {message ? (
          <h1>{message}</h1>
        ) : (
          <button onClick={this.retrieveWelcomeMessage}>
            Click to get welcome message
          </button>
        )}

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>description</th>
                <th>is Completed</th>
                <th>Target Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((i) => {
                const { id, description, done, targetDate } = i;
                return (
                  <tr key={id}>
                    <th>{description}</th>
                    <th>{done ? "yes" : "no"}</th>
                    <th>{moment(targetDate).format("YYYY-MM-DD")}</th>
                    <th>
                      {
                        <button
                          className="btn btn-success"
                          onClick={() => this.updateTodoHandler(id)}
                        >
                          Update
                        </button>
                      }
                    </th>
                    <th>
                      {
                        <button
                          className="btn btn-warning"
                          onClick={() => this.deleteTodoHandler(id)}
                        >
                          Delete
                        </button>
                      }
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="row">
            <button
              className="btn btn-success"
              onClick={() => this.props.history.push("/todos/0")}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodos;
