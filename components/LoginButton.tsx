import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonContent: {
    background: theme.palette.error.main,
    height: 30,
    width: 73,
    marginTop: 20,
    margin: "20px 15px 0 auto",
    color: theme.typography.h4.color,
  },
}));

const LoginButton = () => {
  const classes = useStyles();
  return <Button className={classes.buttonContent}>ログイン</Button>;
};

export default LoginButton;
