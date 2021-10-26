import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
import RequestRevieweModal from "./RequestReviewModal";
import useInput from "../hooks/use-input";
const columns = [
    { id: 'idx', label: 'IDX', minWidth: 80,  align: 'center' },
    { id: 'regDate', label: '신청일', minWidth: 100,  align: 'center', format: (value) => value.slice(0, 10)},
    { id: 'catagory', label: '카테고리', minWidth: 100,  align: 'center' },
    { id: 'brand', label: '브랜드', minWidth: 150, align: 'center' },
    { id: 'quentity', label: '수량', minWidth: 80, align: 'center' },
    { id: 'price', label: '희망가격', minWidth: 120, align: 'center', format: (value) => value.toLocaleString('ko-KR') +" 원"},
    { id: 'name', label: '제목', minWidth: 150,  align: 'center' },
    { id: 'details', label: '내용', minWidth: 150,  align: 'center' },
    { id: 'address', label: '주소', minWidth: 150,  align: 'center' },
    { id: 'expectedPointAmount', label: '토큰', minWidth: 120, align: 'center' },
    { id: 'imageDtoList', label: '이미지', minWidth: 120, align: 'center' },
    { id: 'step', label: '상태', minWidth: 120, align: 'center' },
];

const useStyles = makeStyles((theme) => ({
    containerDiv:{
        paddingTop: "50px"
    },
    tableRow:{
        height: "10px",
        padding: 0,
        fontWeight: "bold",
    },
    container:{
        width: "100%",
    },
    tableCell:{
        fontSize: "18px",
        height: "30px",
        padding: 0
    },
    productImg:{
      height: "30px"
    },
    tableBtnCell:{
        padding: 0,
        width: "30px"
    },
    requestBtn:{
      fontSize: "10px",
      width: "40px",
      height: "30px",
      padding: 0,
      marginRight: "5px"
    },

}));
// 제안 버튼 눌러서 나오는 모달창은 현재 map 을 통해 만들어지는데 마지막 값만 입력되어있음. 왜냐하면 반복문을 통해서 생성하고 덮어씌워지기 때문.

const ServiceRequestControl = props => {
    const classes                                = useStyles();
    const [page, setPage]                        = useState(0);
    const [rowsPerPage, setRowsPerPage]          = useState(10);
    const [show, setShow]                        = useState(false);
    const handleClose                            = () => setShow(false);
    const handleChangePage                       = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const negoBtnHandler = () => {
        setShow(true);
    };
    const approvalBtn      = (idx, price) => {
        if(window.confirm("승인하시겠습니까?")){
            axios.put("/purchased-products/"+idx+"/step", {cost: price},{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    axios.put("/purchased-products/"+idx+"/step", {cost: price},{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                        .then(res => {
                            alert("승인하였습니다.");
                            window.location.replace("/admin");
                        })
                        .catch(err => {
                            console.log(err.request);
                            console.log(err.response.data);
                            console.log(err.response.message);
                        });
                })
                .catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
        }
    };
    const deleteBtnHandler = idx => {
        if(window.confirm("진행하시겠습니까")){
            axios.delete("/purchased-products/"+idx, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    alert("삭제하였습니다.");
                    window.location.replace("/admin");
                })
                .catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
        }
    };
    return (
        <>
            <h3 id={"userRequest"}>유저 판매 신청 리스트</h3>
            {props.requestData && <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table" className={classes.container}>
                        <TableHead>
                            <TableRow className={classes.tableRow}>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        className={classes.tableRow}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.requestData!== null ? props.requestData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={Math.random()*10} >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} className={classes.tableCell}>
                                                    {column.format ? column.format(value) : column.id.includes("image")?
                                                        value.map(image => <img src={"/display?fileName="+image.imageURL} className={classes.productImg}
                                                                                key={Math.random()*10} alt={"productImg"}/>) :value}
                                                </TableCell>
                                            );
                                        })
                                        }
                                                {show === true && <RequestRevieweModal show={show} onHide={handleClose} handleClose={handleClose}
                                                                   data={row}/>}
                                        {row.step === "FINISH" || row.step ==="CANCELED" ? null :
                                        <>
                                            <TableCell className={classes.tableBtnCell}>
                                                <Button variant="secondary" className={classes.requestBtn}  onClick={() => {negoBtnHandler(row.idx)}}>제안</Button>
                                            </TableCell>
                                            <TableCell className={classes.tableBtnCell}>
                                                <Button variant="primary" className={classes.requestBtn}  onClick={() => {approvalBtn(row.idx, row.price)}}>승인</Button>
                                            </TableCell>
                                            <TableCell className={classes.tableBtnCell}>
                                                <Button variant="danger" className={classes.requestBtn} onClick={() => {deleteBtnHandler(row.idx)}}>거절</Button>
                                            </TableCell>
                                        </>
                                            }
                                    </TableRow>
                                );
                            }) : <TableRow> Loading... </TableRow> }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={props.requestData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>}
        </>
    )
};

export default ServiceRequestControl;