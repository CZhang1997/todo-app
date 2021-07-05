import React, { Component } from "react";
import LoginForm from "./login-form";
import ListTodos from "./list-todos";
import ErrorPage from "./error-page";
import Header from "./header";
import Logout from "./logout";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Header />
            <Switch>
              <Route path="/" exact component={LoginForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/home" component={ListTodos} />
              <Route path="/logout" component={Logout} />
              <Route component={ErrorPage} />
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

export default TodoApp;
