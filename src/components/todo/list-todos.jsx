import React, { Component } from "react";

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Learn Java",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }
  render() {
    // const { name = "" } = this.props.match.params;
    const { todo } = this.state;
    return (
      <div className="welcome">
        <h1>Welcome to My Todo App</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>description</th>
                <th>is Completed</th>
                <th>Target Date</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((i) => {
                const { id, description, done, targetDate } = i;
                return (
                  <tr key={id}>
                    <th>{description}</th>
                    <th>{done ? "yes" : "no"}</th>
                    <th>{targetDate.toLocaleDateString()}</th>
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
