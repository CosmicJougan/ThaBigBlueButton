import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextBox from "../../core/textField";
import { fetchWrapper } from "../../utils/fetchWrapper";

function Registration() {
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

  const onChangeConfirmPassword = (e) => {
    setState({
      ...state,
      confirmedPassword: e.target.value,
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

  const clearState = () => {
    setState({
      username: "",
      password: "",
      confirmedPassword: "",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (state.password === state.confirmedPassword) {
      var temp = await sha256func(state.password);
      const body = {
        name: state.username,
        password: temp,
      };

      let userExists = false;
      await fetchWrapper
        .get(`http://localhost:3000/users/${state.username}`)
        .then((data) => {
          if (data !== null) {
            alert("This user already exists, please pick another!");
            clearState();
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

      clearState();
    } else {
      alert("Password mismatch");
    }
  };

  return (
    <div className="card">
      <Card className="cardStyle">
        <CardContent>
          <div className="signupText">SIGNUP</div>
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
          <TextBox
            label="Confirm Password"
            type="password"
            value={state.confirmedPassword}
            onChange={onChangeConfirmPassword}
          />
        </CardContent>
        <CardActions className="cardActions">
          <Button
            style={{ background: "black", color: "white" }}
            onClick={onSubmit}
          >
            REGISTER
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Registration;
