import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import Router from "next/router";
import firebase from "firebase";
import { AuthContext } from "../src/context/Auth";

const useStyles = makeStyles((theme) => ({
  textFormId: {
    background: theme.palette.background.default,
    width: 340,
    height: 50,
    borderRadius: 5,
  },
  textFormPassword: {
    background: theme.palette.background.default,
    width: 340,
    height: 50,
    borderRadius: 5,
    marginTop: 15,
  },
  formAreaWrapper: {
    width: "90%",
    margin: "30px auto 0px auto",
  },
  loginButton: {
    width: 340,
    height: 50,
    background: theme.palette.error.main,
    marginTop: 35,
  },
  googleLoginButton: {
    width: 150,
    background: theme.palette.primary.main,
    marginTop: 15,
    margin: "0 auto",
  },
  loginButtonLabel: {
    fontSize: 16,
  },
  googleLoginButtonLabel: {
    fontSize: 16,
    textAlign: "left",
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // currentUser && Router.push("/");
  }, [currentUser]);

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  return (
    <Box>
      <Box className={classes.formAreaWrapper}>
        <TextField
          type="text"
          className={classes.textFormId}
          label="電話番号またはメールアドレス"
        />
        <TextField
          type="password"
          className={classes.textFormPassword}
          label="パスワード"
        />
        <Button onClick={login} className={classes.loginButton}>
          <Typography variant="h4" className={classes.loginButtonLabel}>
            ログイン
          </Typography>
        </Button>
        <Button onClick={login} className={classes.googleLoginButton}>
          <Typography variant="h4" className={classes.googleLoginButtonLabel}>
            Googleでログイン
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
