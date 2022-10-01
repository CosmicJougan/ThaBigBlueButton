import "./registration.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextBox from "../../core/textField";
import { Component } from "react";
import { fetchWrapper } from "../../utils/fetchWrapper";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.sha256func = this.sha256func.bind(this);
    this.clearState = this.clearState.bind(this);

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
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <TextBox
              label="Confirm Password"
              type="password"
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

  //Thanks stackoverflow!
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

    if (this.state.password === this.state.confirmedPassword) {
      var temp = await this.sha256func(this.state.password);
      const body = {
        name: this.state.username,
        password: temp,
      };

      let userExists = false;
      await fetchWrapper
        .get(`http://localhost:3000/users/${this.state.username}`)
        .then((data) => {
          if (data !== null) {
            alert("This user already exists, please pick another!");
            this.clearState();
            userExists = true;
          }
        })
        .catch((error) =>
          console.error("There was an error retrieving the user!", error)
        );

      if (!userExists) {
        await fetchWrapper
          .post("http://localhost:3000/users/", body)
          .then(() => console.log("Success adding new users!"))
          .catch((error) =>
            console.error("There was an error adding a new user!", error)
          );
      }

      this.clearState();
    } else {
      alert("Password mismatch");
    }
  }

  clearState() {
    this.setState({
      username: "",
      password: "",
      confirmedPassword: "",
    });
  }
}

export default Registration;
