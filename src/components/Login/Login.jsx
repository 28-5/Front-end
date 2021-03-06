import React from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import clsx from "clsx";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {authActions} from "../../store/auth-slice";

const useStyles = makeStyles((theme) => ({
    section:{
        fontFamily: "twayair",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    loginBox:{
        paddingTop: "6%",
        paddingBottom: "6%",
        textAlign:"right",
    },
    loginBtn:{
        fontFamily: "twayair",
        fontSize: "25px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor:"#5c842c",
    },
    joinBtn:{
        fontFamily: "twayair",
        fontSize: "25px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor: "#b4bbd0"
    },
    loginInput:{
        width: "400px",
        height: "50px",
        fontFamily: "twayair",
        fontSize: "15px",
    },
    passInput:{
        width: "400px",
        height: "50px",
        fontSize: "15px",
    },
    inputGrid:{
        textAlign:"center",
        margin: "20px 0px",
    },

    inputGridPadding:{
        paddingTop:"15px",
    },

    findTxt:{
        fontFamily: "twayair",
        color: "#b4bbd0",
        padding: "0 40px",
    },
    findTxtId:{
        borderRight: "solid"

    },
}));

const Login = props => {
    const classes               = useStyles();
    const dispatch              = useDispatch();
    const [userEmail, setUserEmail]   = useState(null);
    const [userPass, setUserPass]   = useState(null);
    const loginEmailHandler = event =>{
        setUserEmail(event.target.value);
    };
    const loginPassHandler = event =>{
        setUserPass(event.target.value);
    };

    const loginHandler = (event) =>{
        event.preventDefault();
        const loginData = {
            email : userEmail,
            password: userPass,
        };
        axios.post("/member/login", loginData)
            .then(res => {
                localStorage.setItem("jwt", res.data);
                const jwtToken    =   res.data;
                let jwt = require("jsonwebtoken");
                let decode = jwt.decode(jwtToken);
                let roles = decode.role.split(",");
                let isManager = false;
                for(let i=0; i< roles.length; i++) {
                    if(roles[i] === "ROLE_MANAGER"){
                        console.log(roles[i]);
                        isManager = true;
                    }
                }
                dispatch(authActions.login({
                    token: jwtToken,
                    admin: isManager,
                }));
                window.location.replace("/shop");
            }).catch(err => {
                console.log("Login Failed");
        });
    }

    return (
        <section className={classes.section}>
            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.loginBox}>
                <form>
                <Grid item xs={12} >
                    <Input type="email" name="userEmail" placeholder="?????????" onChange={loginEmailHandler}
                           startAdornment={( <InputAdornment position="start">
                                                <EmailIcon className={classes.icon}/>
                                            </InputAdornment>)}
                           className={classes.loginInput}/>
                </Grid>
                <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                    <Input type="password" name="userPass" placeholder="????????????" onChange={loginPassHandler}
                           startAdornment={( <InputAdornment position="start">
                               <LockIcon className={classes.icon}/>
                           </InputAdornment>)}
                           className={classes.passInput}/>
                </Grid>
                <Grid item xs={12} className={classes.inputGrid}>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" className={classes.loginBtn} onClick={loginHandler}>?????????</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" href="/member/register" className={clsx(classes.joinBtn)}>????????????</Button>
                </Grid>
                </form>
            </Grid>
        </section>
    );
}

export default Login;