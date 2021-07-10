import { Box, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    width: 350,
    height: 50,
    backgroundColor: theme.palette.background.default,
    margin: "0 auto",
    marginTop: 425,
    "& .MuiInputBase-input": {
      width: 350,
      height: 35,
      paddingLeft: 3,
    },
  },
}));

const AddressForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.formWrapper}>
      <TextField placeholder={"メールアドレス"} />
    </Box>
  );
};

export default AddressForm;
