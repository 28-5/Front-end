import ShoppingTopNav from "../Shopping/ShoppingTopNav";
import ShoppingNavbar from "./ShoppingNavbar";
import Footer from "./Footer";
import {useSelector} from "react-redux";
import Notification from "../UI/Notification";
import Container from "@material-ui/core/Container";
import React from "react";
import LoginNavBtn from "./LoginNavBtn";
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
const Layout = props =>{
    const notification          = useSelector(state => state.ui.notification);
    const isNotificationVisible = useSelector(state => state.ui.notificationVisible);
    const isAuth                = useSelector(state => state.auth.isAuthenticated);
    const { pathname }          = useLocation();
    const differentNavPath      = ["/company", "/introduction", "/qnas", "/qnas/write", "/qnas/modify", "/qnas/article/:postNum",
                                    "/notices", "/notices/write", "/notices/modify", "/notices/article/:postNum", "/faq",
                                    "/service/request", "/service/seller/request", "/introduction/team", "/introduction/business",
                                    "/introduction/manual", "/admin"];
    return (
        <>
            <Container maxWidth="lg">
                <ShoppingTopNav/>
                {isNotificationVisible &&
                <Notification status={notification.status} title={notification.title} message={notification.message}/>}
                {differentNavPath.indexOf(pathname) === -1 ? <ShoppingNavbar/> : <Navbar/>}
                {(pathname !== "/admin" && !isAuth) && <LoginNavBtn/>}
            </Container>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;