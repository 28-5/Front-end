import {Link } from "react-router-dom";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import {authActions} from "../../store/auth-slice";

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
   const classes          = useStyles();
   const isAuth           = useSelector(state => state.auth.isAuthenticated);
   const userEmail        = useSelector(state => state.auth.userEmail);
   const dispatch         = useDispatch();
   const customPaddingNum = props.paddingNum;
   const logoutHandler    = () =>{
        dispatch(authActions.logout());
        props.history.push("/main");
    };
   return (
       <>
       {isAuth === true?
       <div className={classes.loginJoinDiv}>
           <div className={classes.joinBtn} style={{paddingRight: customPaddingNum}}>
               <div className={classes.emailTextDiv}>
                   <Typography variant={"subtitle1"} display={"inline"} className={classes.emailText}>{userEmail}</Typography>
               </div>
               <Button type="button" color="primary" variant="contained" className={classes.loginBtn} onClick={logoutHandler}>로그아웃</Button>
               <IconButton color="primary" component={Link} to="/mypage" className={classes.iconBtn}>
                   <PersonIcon className={classes.icon}/>
               </IconButton>
           </div>
           <div className={classes.loginBtn}>
           </div>
       </div>:
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
       }
           </>
    );
}

export default LoginNavBtn;