import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Header from "../components/header";

const useStyles = makeStyles(() => ({
  mainContent: {
    backgroundImage: "url('/BTS.jpg')",
    height: 900,
    backgroundSize: "contain",
  },
  shadowContent: {
    background: "linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,1))",
    height: 300,
  },
  mainTextArea: {
    width: "75%",
    margin: "15px auto",
  },
  subTextArea: {
    marginTop: 5,
  },
}));

const index = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContent}>
      <Box className={classes.shadowContent}>
        <Header />
        <Box className={classes.mainTextArea}>
          <Typography variant="h4">BTSの動画や画像が</Typography>
          <Typography variant="h4">いつでも見放題</Typography>
          <Box className={classes.subTextArea}>
            <Typography variant="body1">BTSをもっと自由に。</Typography>
            <Typography variant="body1">いつでもキャンセルOK。</Typography>
            <Typography variant="body1">
              アドレスを入力して、メンバーシップを開始してください。
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default index;
