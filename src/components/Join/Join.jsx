import makeStyles from "@material-ui/core/styles/makeStyles";
import {useState} from "react";
import axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import clsx from "clsx";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    section:{
        fontFamily: "twayair",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    joinBox:{
        paddingTop: "10%",
        textAlign:"right",
    },
    joinBtn:{
        fontFamily: "twayair",
        fontSize: "30px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor:"#5c842c",
    },
    joinInput:{
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



const Join = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
        setTimeout(() => {
            setOpen(false);
            console.log("hi");
        }, 500);
    };

    const fetchLoginInfo = (event) =>{
        event.preventDefault();
        axios.post("/login", {
            email : event.target.userEmail.value,
            pass: event.target.userPass.value,
        }).then(res => {
            console.log("Post success! + res.data: " + res.data);
        }).catch(err => {
            console.log("Login Failed");
            handleToggle();
        });
    }

    return (
        <section className={classes.section}>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="primary" />
            </Backdrop>
            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.joinBox}>
                <form onSubmit={fetchLoginInfo}>
                    <Grid item xs={12} >
                        <Input type="text" name="userEmail" placeholder="이메일"
                               startAdornment={( <InputAdornment position="start">
                                   <EmailIcon className={classes.icon}/>
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPass" placeholder="비밀번호"
                               startAdornment={( <InputAdornment position="start">
                                   <LockIcon className={classes.icon}/>
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPass" placeholder="비밀번호 확인"
                               startAdornment={( <InputAdornment position="start">
                                   <LockIcon className={classes.icon}/>
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="text" name="userPass" placeholder="이름"
                               startAdornment={( <InputAdornment position="start">
                                   <AssignmentIndIcon className={classes.icon}/>
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="number" name="userPass" placeholder="휴대폰번호"
                               startAdornment={( <InputAdornment position="start">
                                   <PhoneIphoneIcon className={classes.icon}/>
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="text" name="userPass" placeholder="주소"
                               startAdornment={( <InputAdornment position="start">
                                   <HomeIcon className={classes.icon}/>
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" className={classes.joinBtn} >회원가입</Button>
                    </Grid>
                </form>
            </Grid>
        </section>
    );
};

export default Join;
