import React, {useEffect, useState} from "react";
import AccountDetail from "./AccountDetail";
import axios from "axios";
import "./MyPageMain.css";
import LoaddingSpinner from "../UI/LoaddingSpinner";
const MyPageMain = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        axios.get(`/member`,{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
                setUserInfo(res.data);
            }).catch(err => console.log(err));
    }, [])
    return(
        <>
            {userInfo === null? <LoaddingSpinner/> : <AccountDetail userInfo={userInfo}/>}
        </>
    );
};

export default MyPageMain;