import React, { useState, Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { isValidPassword, isValidUsername } from "./validationHelper";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function LoginForm() {
  // Declare a new state variable, which we'll call "count"
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const classes = useStyles();
  useEffect(() => {});
  const onSubmit = () => {
    console.log(username, password);
    if (!isValidUsername(username) && !isValidPassword(password)) {
      setAlert(true);
    } else {
      setAlert(false);
    }
    console.log(alert);
  };
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Fragment>
      <form className={classes.root} noisValid autoComplete="off">
        <TextField
          id="username"
          label="User name"
          onChange={onUserNameChange}
        />
      </form>
      <form className={classes.root} noisValid autoComplete="off">
        <TextField
          id="password"
          lavel="Password"
          type="password"
          onChange={onPasswordChange}
        ></TextField>
      </form>
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </label>
    </Fragment>
  );
}
export default LoginForm;
