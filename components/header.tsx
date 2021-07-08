import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Image from "next/image";

const useStyles = makeStyles(() => ({
  headerWrapper: {
    height: 65,
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.6825105042016807) 8%, rgba(0,0,0,1) 49%)",
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
    </Box>
  );
};

export default Header;
