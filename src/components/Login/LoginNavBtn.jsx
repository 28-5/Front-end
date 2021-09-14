import {Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({

    loginBtn:{
        display:"block",
        float: "right",
        paddingRight:"100px"
    },
    icon:{
        fontSize: "40px",
        color:"#6c844c",
    }

}));

const LoginNavBtn = () => {
   const classes = useStyles();
    return (
        <div  className={classes.loginBtn}>
           <Link to={"/member/login"} >
               <PersonIcon className={classes.icon}/>
           </Link>
        </div>

    );
}

export default LoginNavBtn;