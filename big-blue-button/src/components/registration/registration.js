import "./registration.css";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextBox from "../../core/textField";
import { Component } from "react";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      confirmedPassword: "",
    };
  }

  render() {
    return (
      <div className="card">
        <Card className="cardStyle">
          <CardContent>
            <div className="signupText">SIGNUP</div>
            <TextBox
              label="Username"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <TextBox
              label="Password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <TextBox
              label="Confirm Password"
              value={this.state.confirmedPassword}
              onChange={this.onChangeConfirmPassword}
            />
          </CardContent>
          <CardActions className="CardActions">
            <Button
              style={{ background: "black", color: "white" }}
              onClick={this.onSubmit}
            >
              REGISTER
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

  onSubmit(e) {
    e.preventDefault();

    if (this.state.password === this.state.confirmedPassword) {
      const obj = {
        username: this.state.username,
        password: this.state.password,
        confirmedPassword: this.state.confirmedPassword,
      };

      const url = "http://localhost/react/insert.php";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(obj),
      };

      fetch(url, options).then((response) => {
        console.log(response.status);
      });

      this.setState({
        username: "",
        password: "",
        passwordConform: "",
      });
    } else {
      alert("Password mismatch");
    }
  }
}

export default Registration;
