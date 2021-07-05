import react, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginClick = (e) => {
    console.log("click");
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
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
        <button onClick={this.handleLoginClick}>Loigin</button>
      </div>
    );
  }
}

export default LoginForm;
