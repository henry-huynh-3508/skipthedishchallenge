import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { isValidPassword, isValidUsername } from "./validationHelper";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function LoginForm() {
  //Styling
  const classes = useStyles();

  //Internal variables
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("info");
  const [alertMessage, setAlertMessage] = useState(
    "Please enter user name and password!"
  );
  //Handle submission
  const onSubmit = () => {
    console.log(username, password);
    if (!isValidUsername(username) && !isValidPassword(password)) {
      setAlert("error");
      setAlertMessage(
        "User name or Password is invalid!" +
          " Password must be greater than 8 characters " +
          "with at least 1 number, 1 lowercase, 1 upper case letter!"
      );
    } else {
      setAlert("success");
      setAlertMessage("Successful!");
    }
    console.log(alert);
  };

  //Handle username change
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  //Handle password change
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Container maxWidth="xs">
      <form className={classes.root} autoComplete="off">
        <TextField
          id="username"
          label="User name"
          onChange={onUserNameChange}
        />
      </form>
      <form className={classes.root} autoComplete="off">
        <TextField
          id="password"
          lavel="Password"
          type="password"
          onChange={onPasswordChange}
        ></TextField>
      </form>
      <Alert severity={alert}>{alertMessage}</Alert>
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
    </Container>
  );
}
export default LoginForm;
