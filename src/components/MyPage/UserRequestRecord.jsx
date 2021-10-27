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
        padding: 5,
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
    },
    tableBtnCell:{
        padding: 5
    },
    requestBtn:{
        fontSize: "20px",
        width: 50,
        height: 50,
        padding: 0
    }
}));

export default function UserRequestRecord(props) {
    const classes = useStyles();
    const history = useHistory();
    const [requestData, setRequestData] = useState([]);
    const backwardBtnHandler = () => {
        history.goBack(-1);
    };
    const approvalBtn      = (idx, price) => {
        if(window.confirm("승인하시겠습니까?")){
            axios.put("/purchased-products/"+idx+"/step", {cost: price},{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    alert("승인하였습니다.");
                    window.location.replace("/mypage/request/list");
                })
                .catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
        }
    };
    const deleteBtnHandler = idx => {
        if(window.confirm("거절하시겠습니까?")){
            axios.delete("/purchased-products/"+idx, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    alert("거절하였습니다.");
                    window.location.replace("/mypage/request/list");
                })
                .catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
        }
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
                            <TableCell className={classes.tableCell}>리본제시금액</TableCell>
                            <TableCell className={classes.tableCell}>최종금액</TableCell>
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
                                <TableCell className={classes.tableCell}>{row.expectedPrice === null? "." : row.expectedPrice.toLocaleString('ko-KR')} 원</TableCell>
                                <TableCell className={classes.tableCell}>{row.proposalPrice === null? "." : row.proposalPrice.toLocaleString('ko-KR')} 원</TableCell>
                                <TableCell className={classes.tableCell}>{row.acceptedPrice === null? "." : row.acceptedPrice.toLocaleString('ko-KR')} 원</TableCell>
                                <TableCell className={classes.tableCell}>{row.acceptedTokenAmount === null? "." : row.acceptedTokenAmount}</TableCell>
                                <TableCell className={classes.ImgTableCell}>
                                    <img src={"/display?fileName="+row.imageDtoList[0].imageURL} className={classes.tableCellImg} alt="productImg"/>
                                </TableCell>
                                <TableCell className={classes.tableCell}>{row.step}</TableCell>
                                {row.step === "RESERVATION" || row.step === "ACCEPTANCE" || row.step === "FINISH" || row.step ==="CANCELED" ? null :
                                    <>
                                        <TableCell className={classes.tableBtnCell}>
                                            <Button variant="primary" className={classes.requestBtn} onClick={() => {approvalBtn(row.idx, row.proposalPrice)}} >승인</Button>
                                        </TableCell>
                                        <TableCell className={classes.tableBtnCell}>
                                            <Button variant="danger" className={classes.requestBtn} onClick={() => {deleteBtnHandler(row.idx)}}>거절</Button>
                                        </TableCell>
                                    </>
                                }
                            </TableRow>
                        )) : <tr><TableCell>기록이 없습니다.</TableCell></tr>}
                    </TableBody>
                </Table>
                <Button variant="success" onClick={backwardBtnHandler} className={classes.btn}>뒤로가기</Button>
            </Container>
        </React.Fragment>
    );
}