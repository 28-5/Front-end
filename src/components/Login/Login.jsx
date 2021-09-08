import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import {useState} from "react";

const useStyles = makeStyles(({
    section:{
        // paddingLeft: "100px"
    },
    loginBox:{
        paddingTop: "20%",
        textAlign:"center",
    },
    gridItemId:{
        paddingLeft:"85px",
    }
}));

const Login = () => {
    const classes = useStyles();
    const [loginId, setLoginId] = useState();

    // const idChangeHandler =

    const fetchLoginInfo = (event) =>{
        event.preventDefault();

        axios.post("/login", {
            loginID : event.target.userId.value,
            loginPass: event.target.userPass.value
        }).then(res => {
            console.log("Post success!");
        }).catch(err => {
            console.log("Login Failed");
        });
    }

    return (
        <section className={classes.section}>
            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.loginBox}>
                <form onSubmit={fetchLoginInfo}>
                <Grid item xs={12} className={classes.gridItemId}>
                    <label>ID </label>
                    <input type="text" name="userId"/>
                </Grid>
                <Grid item xs={12}>
                    <label>PASSWORD </label>
                    <input type="password" name="userPass"/>
                </Grid>
                    <Button color="primary" type="submit">Login</Button>
                </form>
            </Grid>
        </section>
    );
}

export default Login;