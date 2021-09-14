import React, {useState} from "react";
import AddressModal from "./AddressModal";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Input from "@material-ui/core/Input";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import clsx from "clsx";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import HomeIcon from '@material-ui/icons/Home';
import makeStyles from "@material-ui/core/styles/makeStyles";

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
    addressInput:{
        width: "300px",
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
    addressBtn: {
        marginBottom:"12px"
    }
}));



const Join = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [IsModalOpen, setModalOpen] = useState(false);
    const [address, setAddress] = useState('주소');

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
        setTimeout(() => {
            setOpen(false);
        }, 500);
    };

    const modalOpenHandler = () => {
        setModalOpen(true);
    };

    const modalCloseHandler = () => {
        setModalOpen(false);
    };

    const addressHandler = props =>{
        setAddress(props);
    };



    const fetchJoinInfo = (event) =>{
        event.preventDefault();
        console.log("email: "+ event.target.userEmail.value);
        console.log("pass: " + event.target.userPass.value);
        console.log("name: " + event.target.userName.value);
        console.log("phone: " + event.target.userPhone.value);
        console.log("address: " + address);
        axios.post("/member/register", {
            email : event.target.userEmail.value,
            pass: event.target.userPass.value,
            name: event.target.userName.value,
            phone: event.target.userPhone.value,
            address: event.target.userAddr.value,
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
                <form onSubmit={fetchJoinInfo}>
                    <Grid item xs={12} >
                        <Input type="text" name="userEmail" placeholder="이메일"
                               startAdornment={( <InputAdornment position="start">
                                   <EmailIcon />
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPass" placeholder="비밀번호"
                               startAdornment={( <InputAdornment position="start">
                                   <LockIcon />
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPassCheck" placeholder="비밀번호 확인"
                               startAdornment={( <InputAdornment position="start">
                                   <LockIcon />
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="text" name="userName" placeholder="이름"
                               startAdornment={( <InputAdornment position="start">
                                   <AssignmentIndIcon />
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="tel" name="userPhone" placeholder="휴대폰번호"
                               startAdornment={( <InputAdornment position="start">
                                   <PhoneIphoneIcon />
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="text" name="userAddr" placeholder={address}
                               startAdornment={( <InputAdornment position="start">
                                   <HomeIcon />
                               </InputAdornment>)}
                               disabled="true"
                               className={classes.addressInput}/>
                        <Button color="secondary" variant="outlined" className={classes.addressBtn} onClick={modalOpenHandler}>주소찾기</Button>
                        {IsModalOpen && <AddressModal modalOpen={IsModalOpen} closeModal={modalCloseHandler} getAddress={addressHandler}/>}
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
