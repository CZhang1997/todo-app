import React, { Component } from "react";
import LoginForm from "../authentication/login-form";
import ListTodos from "./list-todos";
import ErrorPage from "./error-page";
import Header from "./header";
import Logout from "../authentication/logout";
// import AuthenticationService from "../authentication/AuthenticationService";
import Footer from "./footer";
import AuthenticatedRoute from "../authentication/AuthenticatedRoute";
import TodoItem from "./todo-item";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <IntlProvider locale="en">
          <Router>
            <>
              <Header />
              <Switch>
                <Route path="/" exact component={LoginForm} />
                <Route path="/login" component={LoginForm} />
                <AuthenticatedRoute path="/home" component={ListTodos} />
                <AuthenticatedRoute path="/todos/:id" component={TodoItem} />
                <AuthenticatedRoute path="/logout" component={Logout} />
                <Route component={ErrorPage} />
              </Switch>
              <Footer />
            </>
          </Router>
        </IntlProvider>
      </div>
    );
  }
}

export default TodoApp;
