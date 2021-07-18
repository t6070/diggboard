import { Box, makeStyles, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/header";
import LoginForm from "../../components/LoginForm";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    background: theme.palette.primary.main,
  },
  formContent: {
    width: "90%",
  },
  loginTitle: {
    margin: "10px 0px 0px 20px",
  },
}));

const Signup = () => {
  const router = useRouter();
  const email = router.query.email;
  const classes = useStyles();
  return (
    <Box className={classes.mainContent}>
      <Header />
      <Box className={classes.formContent}>
        <Typography variant="h2" className={classes.loginTitle}>
          {email ? "サインアップ" : "ログイン"}
        </Typography>
        <LoginForm email={email} />
      </Box>
    </Box>
  );
};

export default Signup;
