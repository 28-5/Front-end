import ShoppingNavbar from "./ShoppingNavbar";
import Footer from "./Footer";
import {useSelector} from "react-redux";
import React from "react";
import Notification from "../UI/Notification";
const Layout = props =>{
    const notification          = useSelector(state => state.ui.notification);
    const isNotificationVisible = useSelector(state => state.ui.notificationVisible);
    return (
        <>
            <ShoppingNavbar/>
            {isNotificationVisible &&
            <Notification status={notification.status} title={notification.title} message={notification.message}/>}
                {props.children}
            <Footer/>
        </>
    );
};

export default Layout;