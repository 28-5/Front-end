import {Link, useLocation} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import LoginNavBtn from "../Login/LoginNavBtn";
import Button from "@material-ui/core/Button";
import axios from "axios";
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    mainContainer:{
        paddingLeft:"260px",
        paddingTop: "0px",
        height:"100vh",
    },
});



const Article = props => {
    const classes = useStyles();
    const location = useLocation();
    const { data } = location.state;
    const path     = props.match.url.slice(0,4) + props.match.url.slice(12);
    const deleteHandler = () => {
        axios.delete(path,{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
                console.log("글 삭제 성공");
                props.history.push(props.match.url.slice(0,4));
            }).catch(err => {
            console.log(err.request);
            console.log(err.response);
            console.log(err.response.message);
        });
    };
    return(
        <>
        <Navbar />
        <LoginNavBtn/>
            <Container maxWidth="xl" className={classes.mainContainer}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell align="center">제목</TableCell>
                            <TableCell align="center">작성자</TableCell>
                            <TableCell align="center">날짜</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                {data.postNum}
                            </TableCell>
                                <TableCell align="center">{data.postTitle}</TableCell>
                                <TableCell align="center">{data.userId}</TableCell>
                                <TableCell align="center">{data.postDate.toString().slice(0,10)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>내용</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <div className={"blog-card"}>
                <p className={"tagline text-center"}>{data.postContent}</p>
            </div>
                <Button variant="outlined" color="primary" component={Link} to={{
                    pathname: props.match.url.slice(0, 4) + "/modify",
                    state: {
                        data: data
                    }}}
                    className={classes.formBtn} >
                    수정
                </Button>
                <Button variant="outlined" color="primary" onClick={deleteHandler} className={classes.formBtn} >
                    삭제
                </Button>
        </Container>
        </>

    );
}

export default Article;