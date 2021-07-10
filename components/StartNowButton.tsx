import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  buttonContent: {
    background: theme.palette.error.main,
    height: 40,
    width: 150,
    color: theme.typography.h4.color,
    margin: "0 auto",
  },
}));

const StartNowButton = () => {
  const classes = useStyles();
  return <Button className={classes.buttonContent}>今すぐ始める ＞</Button>;
};

export default StartNowButton;
