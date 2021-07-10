import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import LoginButton from "./LoginButton";

const useStyles = makeStyles(() => ({
  headerWrapper: {
    height: 65,
    display: "flex",
  },
  logoImgWrapper: {
    paddingTop: 7,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.headerWrapper}>
      <Box className={classes.logoImgWrapper}>
        <Image src={"/NETFLIX_logo.png"} width={120} height={55} />
      </Box>
      <LoginButton />
    </Box>
  );
};

export default Header;
