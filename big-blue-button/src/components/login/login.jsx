import "./login.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextBox from "../../core/textField";
import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.sha256func = this.sha256func.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="card">
        <Card className="cardStyle">
          <CardContent>
            <div className="signupText">SIGNIN</div>
            <TextBox
              label="Username"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <TextBox
              label="Password"
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </CardContent>
          <CardActions className="CardActions">
            <Button
              style={{ background: "black", color: "white" }}
              onClick={async () => {
                await this.onSubmit;
              }}
            >
              LOGIN
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmedPassword: e.target.value,
    });
  }

  async sha256func(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  }

  async onSubmit(e) {
    e.preventDefault();
    var Loggedin = true
    // TODO login logic

  }
}

export default Login;
