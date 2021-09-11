import React from "react";
import LoginNavBtn from "../Login/LoginNavBtn";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Navbar from "../Navbar/Navbar";
import MainTop from "./MainTop";
import MainBody from "./MainBody";
import Partners from "./Partners";
const useStyles = makeStyles(() => ({

}));

const Main = () => {
    const classes = useStyles();
    return(
        <>
          <Navbar />
          <LoginNavBtn />
          <MainTop />
          <MainBody/>
          <Partners/>


    </>
    );
};

export default Main;