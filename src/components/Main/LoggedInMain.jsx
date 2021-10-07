import React from "react";
import LoginNavBtn from "../Login/LoginNavBtn";
import Navbar from "../Navbar/Navbar";
import MainTop from "./MainTop";
import MainBody from "./MainBody";
import Partners from "./Partners";
import Footer from "./Footer";
import LoggedInNavBtn from "../Login/LoggedInNavBtn";

const LoggedInMain = props => {
    return(
        <>
          <Navbar />
          <LoggedInNavBtn tokenHandler={props.tokenHandler} history={props.history} userEmail={props.userEmail}/>
          <MainTop />
          <MainBody/>
          <Partners/>
        </>
    );
};

export default LoggedInMain;