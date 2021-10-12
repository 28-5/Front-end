import React from "react";
import LoginNavBtn from "../Login/LoginNavBtn";
import Navbar from "../Navbar/Navbar";
import MainTop from "./MainTop";
import MainBody from "./MainBody";
import Partners from "./Partners";

const Main = props => {
    return(
        <>
          <Navbar />
          <LoginNavBtn history={props.history}/>
          <MainTop />
          <MainBody/>
          <Partners/>
        </>
    );
};

export default Main;