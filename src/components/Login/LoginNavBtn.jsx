import {Link } from "react-router-dom";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    loginJoinDiv:{
      paddingTop: 20,
      paddingBottom: 57,
        [theme.breakpoints.down('sm')]: {
            display:"inline-block",
            paddingBottom: 0,
            float: "right",
        },
    },
    loginBtn:{
        display:"block",
        float: "right",
        paddingRight:"20px",
    },
    joinBtn:{
        display:"block",
        float: "right",
        paddingRight:"50px",
        [theme.breakpoints.down('sm')]: {
            paddingRight: 10
        },
    },
    icon:{
        fontSize: "40px",
        color:"#6c844c",
    }

}));

const LoginNavBtn = props => {
   const classes = useStyles();
   const customPaddingNum = props.paddingNum;

   return (
        <div className={classes.loginJoinDiv}>
            <div className={classes.joinBtn} style={{paddingRight: customPaddingNum}}>
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
        </div>
    );
}

export default LoginNavBtn;