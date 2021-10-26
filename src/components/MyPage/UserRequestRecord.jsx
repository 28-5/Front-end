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
      textAlign:"center",
    },
    btn:{
        paddingTop: "10px",
        float:"right"
    },
    tableCellImg:{
        width: "80px",
        height: "100px",
        padding: 0,
    },
    ImgTableCell:{
        padding: 0,
    }
}));

export default function UserRequestRecord(props) {
    const classes = useStyles();
    const history = useHistory();
    const [requestData, setRequestData] = useState([]);
    const backwardBtnHandler = () => {
        history.goBack(-1);
    };

    useEffect(() => {
        window.scrollTo(0,100);
        axios.get("/purchased-products")
            .then(res => {
                setRequestData(res.data.dtoList);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <React.Fragment >
            <Container className={classes.orderListDiv}>
                <h1 className={classes.title}>판매신청 현황</h1>
            <Table size="small">
                <TableHead className={classes.orderListDiv}>
                    <TableRow >
                        <TableCell className={classes.tableCell}>날짜</TableCell>
                        <TableCell className={classes.tableCell}>신청번호</TableCell>
                        <TableCell className={classes.tableCell}>배송정보</TableCell>
                        <TableCell className={classes.tableCell}>수량</TableCell>
                        <TableCell className={classes.tableCell}>희망금액</TableCell>
                        <TableCell className={classes.tableCell}>예상토큰지급량</TableCell>
                        <TableCell className={classes.tableCell}>이미지</TableCell>
                        <TableCell className={classes.tableCell}>상태</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {requestData.length >= 1 ? requestData.map((row) => (
                        <TableRow key={row.idx}>
                            <TableCell className={classes.tableCell}>{row.regDate.slice(0, 10)}</TableCell>
                            <TableCell className={classes.tableCell}>{row.idx}</TableCell>
                            <TableCell className={classes.tableCell}>{row.address}</TableCell>
                            <TableCell className={classes.tableCell}>{row.quantity}</TableCell>
                            <TableCell className={classes.tableCell}>{row.proposalPrice.toLocaleString('ko-KR')} 원</TableCell>
                            <TableCell className={classes.tableCell}>{row.expectedPointAmount}</TableCell>
                            <TableCell className={classes.ImgTableCell}>
                                <img src={"/display?fileName="+row.imageDtoList[0].imageURL} className={classes.tableCellImg}/>
                            </TableCell>
                            <TableCell className={classes.tableCell}>{row.step}</TableCell>
                        </TableRow>
                    )) : <h3>기록이 없습니다.</h3>}
                </TableBody>
            </Table>
                <Button variant="success" onClick={backwardBtnHandler} className={classes.btn}>뒤로가기</Button>
            </Container>
        </React.Fragment>
    );
}
