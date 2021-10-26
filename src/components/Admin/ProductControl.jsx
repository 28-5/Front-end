import React from 'react';
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
import {useSelector} from "react-redux";
import axios from "axios";
const columns = [
    { id: 'IDX', label: 'IDX', minWidth: 100,  align: 'center' },
    { id: 'Title', label: '제목', minWidth: 150,  align: 'center' },
    { id: 'Brand', label: '브랜드', minWidth: 150, align: 'center' },
    { id: 'Quantity', label: '수량', minWidth: 120, align: 'center' },
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
    tableCell:{
        height: "20px",
        padding: 0
    },
    tableBtnCell:{
        padding: 0,
        width: "30px"
    },
    requestBtn:{
        fontSize: "10px",
        width: "40px",
        height: "25px",
        padding: 0,
        marginRight: "5px"
    },
}));


const ProductControl = props => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const allItems        =   [];
    const allItemsRedeux  =   useSelector(state => state.product.items);
    if(allItemsRedeux.length > 1){
        for (let a = 0 ; a < 3 ; a++){
            allItemsRedeux[a].forEach(item => {
                allItems.push({IDX: item.idx, Title: item.title, Brand: item.brand, Quantity: item.quantity});
            });
        }
    }
    const rows = allItems;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteBtnHandler = idx => {
        console.log(idx);
        axios.delete("/products/"+idx, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
                alert("삭제하였습니다.");
                window.location.replace("/admin/product");
            })
            .catch(err => {
                console.log(err.request);
                console.log(err.response.data);
                console.log(err.response.message);
            });
    }
    return (
        <>
            <h3 id={"productControl"}>상품 관리</h3>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
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
                            {rows.length >0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={Math.random()} className={classes.tableCell}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} className={classes.tableCell}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })
                                        }
                                        <TableCell className={classes.tableBtnCell}>
                                            <Button variant="danger" onClick={() => {deleteBtnHandler(row.IDX)}} className={classes.requestBtn}>
                                                삭제
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            }) : <TableRow><td> Loading... </td></TableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
};

export default ProductControl;