import ShoppingNavbar from "./ShoppingNavbar";
import Footer from "./Footer";
import {useSelector} from "react-redux";
import React from "react";
import { useLocation } from 'react-router-dom';
import Notification from "../UI/Notification";
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
            <ShoppingNavbar/>
            {isNotificationVisible &&
            <Notification status={notification.status} title={notification.title} message={notification.message}/>}
            {/*<Container maxWidth="lg">*/}
            {/*    <ShoppingTopNav/>*/}
            {/*    {differentNavPath.indexOf(pathname) === -1 ? <ShoppingNavbar/> : <Navbar/>}*/}
            {/*    {(pathname !== "/admin" && !isAuth) && <LoginNavBtn/>}*/}
            {/*</Container>*/}
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;