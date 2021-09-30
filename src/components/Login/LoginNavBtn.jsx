import {Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({

    loginBtn:{
        display:"block",
        float: "right",
        paddingRight:"20px",
    },
    joinBtn:{
        display:"block",
        float: "right",
        paddingRight:"50px",
    },
    icon:{
        fontSize: "40px",
        color:"#6c844c",
    }

}));

const LoginNavBtn = () => {
   const classes = useStyles();
    return (
        <>
            <div className={classes.joinBtn}>
               <Link to={"/member/login"} >
                   <Typography variant={"subtitle1"} display={"inline"}>회원가입</Typography>
               </Link>
            </div>
            <div className={classes.loginBtn}>
               <Link to={"/member/login"} >
                   <Typography variant={"subtitle1"} display={"inline"}>로그인</Typography>
               </Link>
            </div>
               {/*<PersonIcon className={classes.icon}/>*/}
        </>
    );
}

export default LoginNavBtn;