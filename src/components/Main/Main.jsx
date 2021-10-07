import React from "react";
import LoginNavBtn from "../Login/LoginNavBtn";
import Navbar from "../Navbar/Navbar";
import MainTop from "./MainTop";
import MainBody from "./MainBody";
import Partners from "./Partners";
import Footer from "./Footer";
import LoggedInNavBtn from "../Login/LoggedInNavBtn";

const Main = props => {
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