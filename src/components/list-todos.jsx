import React, { Component } from "react";
import HelloWorldServices from "../services/HelloWorldServices";
import TodoDataServices from "../services/TodoDataServices";
import AuthenticationService from "../authentication/AuthenticationService";

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      message: "",
      username: "",
    };
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
  }

  componentDidMount() {
    const username = AuthenticationService.getUsername();
    TodoDataServices.getTodoList(username)
      .then((res) => {
        const { data } = res;
        this.setState({ todo: data, username });
      })
      .catch((e) => console.log(e));
  }

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
        const {
          data: { message: data },
        } = e.response;
        this.setState({
          message: data,
        });
      });
  }
  render() {
    // const { name = "" } = this.props.match.params;
    const { todo, message, username } = this.state;
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
                    <th>{targetDate}</th>
                    <th>
                      {
                        <button
                          onClick={() =>
                            TodoDataServices.deleteItem(username, id)
                          }
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
        </div>
      </div>
    );
  }
}

export default ListTodos;
