import {Link, Redirect } from "react-router-dom";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    loginJoinDiv:{
      // paddingTop: 10,
        [theme.breakpoints.down('sm')]: {
            display:"inline-block",
            paddingBottom: 0,
            float: "right",
        },
    },
    loginBtn:{
        display:"block",
        float: "right",
        height:"100%"
    },
    joinBtn:{
        display:"block",
        float: "right",
        paddingRight:"20px",
        [theme.breakpoints.down('sm')]: {
            paddingRight: 10
        },
    },
    icon:{
        fontSize: "50px",
        color:"#6c844c",
        paddingBottom:0,
        // marginBottom: 10,
    },
    iconBtn:{
        padding:0,
        margin:0
    },
    emailText:{
        verticalAlign:"middle",
    },
    emailTextDiv:{
      // display:"inline-block"
    },

}));

const LoggedInNavBtn = props => {
   const classes          = useStyles();
   const customPaddingNum = props.paddingNum;
   const logoutHandler    = () =>{
        props.removeCookie("user");
        props.cookieHandler(false);
        props.history.push("/main");
   };
   return (
        <div className={classes.loginJoinDiv}>
            <div className={classes.joinBtn} style={{paddingRight: customPaddingNum}}>
                <div className={classes.emailTextDiv}>
                    <Typography variant={"subtitle1"} display={"inline"} className={classes.emailText}>{props.userEmail}</Typography>
                </div>
               <Button type="button" color="primary" variant="contained" className={classes.loginBtn} onClick={logoutHandler}>로그아웃</Button>
                <IconButton color="primary" component={Link} to="/mypage" className={classes.iconBtn}>
                   <PersonIcon className={classes.icon}/>
                </IconButton>
            </div>
            <div className={classes.loginBtn}>

            </div>
        </div>
    );
}

export default LoggedInNavBtn;