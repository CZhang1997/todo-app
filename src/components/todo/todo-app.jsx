import React, { Component } from "react";
import LoginForm from "./login-form";

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        Welcome to My Todo App
        <LoginForm />
      </div>
    );
  }
}

export default TodoApp;
