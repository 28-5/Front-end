import React, {useEffect, useState} from 'react';
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
const columns = [
    { id: 'idx', label: 'IDX', minWidth: 80,  align: 'center' },
    { id: 'regDate', label: '신청일', minWidth: 100,  align: 'center', format: (value) => value.slice(0, 10)},
    { id: 'catagory', label: '카테고리', minWidth: 100,  align: 'center' },
    { id: 'brand', label: '브랜드', minWidth: 150, align: 'center' },
    { id: 'quentity', label: '수량', minWidth: 120, align: 'center' },
    { id: 'price', label: '희망가격', minWidth: 120, align: 'center', format: (value) => value.toLocaleString('ko-KR') +" 원"},
    { id: 'name', label: '제목', minWidth: 150,  align: 'center' },
    { id: 'details', label: '내용', minWidth: 150,  align: 'center' },
    { id: 'address', label: '주소', minWidth: 150,  align: 'center' },
    { id: 'expectedPointAmount', label: '토큰', minWidth: 120, align: 'center' },
    { id: 'imageDtoList', label: '이미지', minWidth: 120, align: 'center' },
];

const useStyles = makeStyles((theme) => ({
    containerDiv:{
        paddingTop: "50px"
    },
    container:{
        width: "100%",
    },
    tableCell:{
        fontSize: "18px"
    },
}));


const ServiceRequestControl = props => {
    const classes                                = useStyles();
    const [page, setPage]                        = useState(0);
    const [rowsPerPage, setRowsPerPage]          = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteBtnHandler = idx => {
        console.log(idx);
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
    };
    return (
        <>
            <h3 id={"userRequest"}>유저 판매 신청 리스트</h3>
            {props.requestData && <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table" className={classes.container}>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.requestData!== null ? props.requestData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={Math.random()}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} className={classes.tableCell}>
                                                    {column.format ? column.format(value) : column.id.includes("image")?
                                                        value.map(image => <img src={"/display?fileName="+image.imageURL} alt="productImg"/>) :value}
                                                </TableCell>
                                            );
                                        })
                                        }
                                        <TableCell>
                                            <Button variant="primary" onClick={() => {deleteBtnHandler(row.idx)}}>승인</Button>
                                            <Button variant="danger" onClick={() => {deleteBtnHandler(row.idx)}}>거부</Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            }) : <h1> Loading... </h1> }
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