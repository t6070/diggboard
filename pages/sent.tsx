import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../src/utils/Firebase";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Header from "../components/header";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    background: theme.palette.primary.main,
  },
  messageContent: {
    width: "90%",
    marginTop: 40,
  },
  loginTitle: {
    margin: "10px 0px 0px 20px",
    textAlign: "center",
  },
  googleLoginButton: {
    width: 150,
    background: theme.palette.error.main,
    marginTop: 15,
    margin: "0 auto",
  },
  googleLoginButtonLabel: {
    fontSize: 16,
    textAlign: "left",
  },
  mailMessageArea: {
    marginTop: 20,
  },
  mailSettingMessage: {
    color: theme.palette.background.default,
    textAlign: "center",
  },
  mailErrorMessage: {
    color: theme.palette.background.default,
    fontSize: 15,
  },
}));

const SignUp: FC = () => {
  const router = useRouter();
  const classes = useStyles();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user.emailVerified && router.push("/");
    });
  }, []);

  const sendEmailVerification = async () => {
    try {
      await auth.currentUser.sendEmailVerification();
      alert("認証メールを再送しました");
      router.push("/sent");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Box className={classes.mainContent}>
      <Header />
      <Box className={classes.messageContent}>
        <Typography variant="h2" className={classes.loginTitle}>
          Welcome to NetFlix！
        </Typography>
        <Box className={classes.mailMessageArea}>
          <Typography variant="h4" className={classes.mailSettingMessage}>
            メール内のリンクをクリックして
          </Typography>
          <Typography variant="h4" className={classes.mailSettingMessage}>
            登録を完了させましょう！
          </Typography>
        </Box>
      </Box>
      <Typography variant="h6" className={classes.mailErrorMessage}>
        メールが届きませんでしたか？
      </Typography>
      <Button
        onClick={sendEmailVerification}
        className={classes.googleLoginButton}
      >
        <Typography variant="h4" className={classes.googleLoginButtonLabel}>
          再送する
        </Typography>
      </Button>
    </Box>
  );
};

export default SignUp;
