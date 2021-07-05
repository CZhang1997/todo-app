import {
  //  react,
  Component,
} from "react";
import AuthenticationService from "./AuthenticationService";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginClick = (e) => {
    console.log(this.state);
    const { username, password } = this.state;
    AuthenticationService.registerSuccessfulLogin(username, password);
    this.props.history.push(`/home`);
  };

  render() {
    const { username, password, hasLoginFailed } = this.state;
    return (
      <div className="container">
        {hasLoginFailed && (
          <div className="alert alert-warning">
            Sorry, wrong username or password
          </div>
        )}
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleFormChange}
        />
        Password :{" "}
        <input
          type="password"
          name="password"
          onChange={this.handleFormChange}
          value={password}
        />
        <button className="btn btn-success" onClick={this.handleLoginClick}>
          Loigin
        </button>
      </div>
    );
  }
}

export default LoginForm;
