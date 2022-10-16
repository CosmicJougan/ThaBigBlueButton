import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextBox from "../../core/textField";
import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
    confirmedPassword: "",
  });

  const onChangeUsername = (e) => {
    setState({
      ...state,
      username: e.target.value,
    });
  };

  const onChangePassword = (e) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };

  //Thanks stackoverflow!
  const sha256func = async (message) => {
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
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //var Loggedin = true;
    // TODO login logic
  };

  return (
    <div className="card">
      <Card className="cardStyle">
        <CardContent>
          <div className="signupText">SIGNIN</div>
          <TextBox
            label="Username"
            value={state.username}
            onChange={onChangeUsername}
          />
          <TextBox
            label="Password"
            type="password"
            autoComplete="current-password"
            value={state.password}
            onChange={onChangePassword}
          />
        </CardContent>
        <CardActions className="cardActions">
          <Button
            style={{ background: "black", color: "white" }}
            onClick={async () => {
              await onSubmit;
            }}
          >
            LOGIN
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
