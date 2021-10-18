import React, {useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import LoginNavBtn from "../Layout/LoginNavBtn";
import Button from '@material-ui/core/Button';
import axios from "axios";
const useStyles = makeStyles((theme) => ({
    mainContainer:{
        paddingLeft:"120px",
        paddingTop: "50px",
        paddingBottom: 100,
        fontFamily: "twayair",
        [theme.breakpoints.down('md')]: {
            paddingLeft:"260px",
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft:"16px",
        },
    },
    root: {
        flexWrap: 'wrap',
        width:"99%"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    formBtnDiv:{
      paddingRight:0
    },
    formBtn:{
      float:"right",
    },
    input:{
        display: 'none',
    }
}));

const WrtForm = props => {
    const classes               =   useStyles();
    const path                  =   props.path;
    const [title, setTitle]     =   useState(null);
    const [content, setContent] =   useState(null);
    const titleChangeHandler    =   event =>{
        setTitle(event.target.value);
    };
    const contentChangeHandler  =   event =>{
        setContent(event.target.value);
    };
    const formFetchHandler      =   event =>{
        event.preventDefault();
        let json={title:title, content:content};
        // axios.post(path, json, {headers:{ Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'}})
        axios.post(path, json, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
            // axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
            props.history.push(path);
        }).catch(err => {
            console.log(err.request);
            console.log(err.response);
            console.log(err.response.message);
        });

        // axios.post(path, {
        //
        //     headers: { Authorization: `${localStorage.getItem("jwt")}`, 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        //     data: {
        //         title: title,
        //         content: content,
        //     }
        // }).then(res => {
        //     // axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
        //     props.history.push(path);
        // }).catch(err => {
        //     console.log(err.request);
        //     console.log(err.response);
        //     console.log(err.response.message);
        // });
    };
    return (
            <Container maxWidth="lg" className={classes.mainContainer}>
                <LoginNavBtn paddingNum={0}/>
                    <form>
                    <div className={classes.root}>
                        <div>
                            <TextField id="standard-full-width"  style={{ margin: 8 }} placeholder="제목" onChange={titleChangeHandler}
                                       inputProps={{style: {paddingLeft: 14}}}
                                       fullWidth margin="normal" InputLabelProps={{shrink: true, }}/>
                        </div>
                        <div>
                            <TextField id="outlined-full-width"  style={{ margin: 8 }} placeholder="내용" onChange={contentChangeHandler}
                                fullWidth margin="normal" InputLabelProps={{shrink: true,}} variant="outlined" multiline rows={20} />
                        </div>
                    </div>
                    <div className={classes.formBtnDiv}>
                        <Button variant="outlined" color="primary" className={classes.formBtn} onClick={formFetchHandler}>
                                올리기
                        </Button>
                    </div>
                    </form>
            </Container>
    );
}

export default WrtForm;