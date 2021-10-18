import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import clsx from "clsx";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useState} from "react";
import {Link} from "react-router-dom";
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
        paddingTop: "16%",
        textAlign:"right",
    },
    loginBtn:{
        fontFamily: "twayair",
        fontSize: "30px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor:"#5c842c",
    },
    joinBtn:{
        fontFamily: "twayair",
        fontSize: "30px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor: "#b4bbd0"
    },
    loginInput:{
        width: "400px",
        height: "50px",
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
                const jwtToken    =   res.data;
                dispatch(authActions.login({
                    token: jwtToken,
                    email: loginData.email,
                }));
                props.history.push("/shop");
            }).catch(err => {
                console.log("Login Failed");
        });
    }

    return (
        <section className={classes.section}>
            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.loginBox}>
                <form>
                <Grid item xs={12} >
                    <Input type="email" name="userEmail" placeholder="이메일" onChange={loginEmailHandler}
                           startAdornment={( <InputAdornment position="start">
                                                <EmailIcon className={classes.icon}/>
                                            </InputAdornment>)}
                           className={classes.loginInput}/>
                </Grid>
                <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                    <Input type="password" name="userPass" placeholder="비밀번호" onChange={loginPassHandler}
                           startAdornment={( <InputAdornment position="start">
                               <LockIcon className={classes.icon}/>
                           </InputAdornment>)}
                           className={classes.loginInput}/>
                </Grid>
                <Grid item xs={12} className={classes.inputGrid}>
                    <Typography  display="inline" align="left" className={clsx(classes.findTxt, classes.findTxtId)} component={Link} to="/">아이디 찾기</Typography>
                    <Typography  display="inline" align="left" className={classes.findTxt} component={Link} to="/">비밀번호 찾기</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" className={classes.loginBtn} onClick={loginHandler}>로그인</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" href="/member/register" className={clsx(classes.joinBtn)}>회원가입</Button>
                </Grid>
                </form>
            </Grid>
        </section>
    );
}

export default Login;