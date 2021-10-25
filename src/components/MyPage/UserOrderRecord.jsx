import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
import LoaddingSpinner from "../UI/LoaddingSpinner";


function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    orderListDiv:{
        paddingTop: "50px",
        paddingBottom: "50px",
    },
    title:{
        fontSize: "30px",
        fontFamily: "twayair",
    },
    tableCell:{
        fontFamily: "twayair",
    },
    btn:{
        paddingTop: "10px",
        float:"right"
    }
}));

export default function UserOrderRecord(props) {
    const classes = useStyles();
    const history = useHistory();
    const [orderData, setOrderData] = useState(null);
    const backwardBtnHandler = () => {
        history.goBack(-1);
    };

    useEffect(() => {
        window.scrollTo(0,100);
        axios.get("/orders/user")
            .then(res => {
                setOrderData(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <React.Fragment >
            <Container className={classes.orderListDiv}>
                <h1 className={classes.title}>구매내역</h1>
            <Table size="small">
                <TableHead className={classes.orderListDiv}>
                    <TableRow >
                        <TableCell className={classes.tableCell}>날짜</TableCell>
                        <TableCell className={classes.tableCell}>주문번호</TableCell>
                        <TableCell className={classes.tableCell}>구매자</TableCell>
                        <TableCell className={classes.tableCell}>배송정보</TableCell>
                        <TableCell className={classes.tableCell}>결제금액</TableCell>
                        <TableCell className={classes.tableCell}>토큰지급</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderData !== null? orderData.dtoList.map((row) => (
                        <TableRow key={row.idx}>
                            <TableCell className={classes.tableCell}>{row.regDate.slice(0, 10)}</TableCell>
                            <TableCell className={classes.tableCell}>{row.orderNumber}</TableCell>
                            <TableCell className={classes.tableCell}>{row.userName}</TableCell>
                            <TableCell className={classes.tableCell}>{row.recipientAddress}</TableCell>
                            <TableCell className={classes.tableCell}>{row.totalPrice.toLocaleString('ko-KR')} 원</TableCell>
                            <TableCell className={classes.tableCell}>{row.tokenAmount}</TableCell>
                            {/*<TableCell align="right">{row.amount}</TableCell>*/}
                        </TableRow>
                    )) : <LoaddingSpinner/>}
                </TableBody>
            </Table>
                <Button variant="success" onClick={backwardBtnHandler} className={classes.btn}>뒤로가기</Button>
            </Container>
        </React.Fragment>
    );
}
