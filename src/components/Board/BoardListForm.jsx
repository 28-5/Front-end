import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import LoaddingSpinner from "../UI/LoaddingSpinner";
import Col from "react-bootstrap/Col";

const columns = [
    { id: 'postNum', label: '번호', maxWidth: 30 },
    { id: 'postTitle', label: '제목', minWidth: 300 },
    {
        id: 'userName',
        label: '작성자',
        maxWidth: 50,
        align: 'right',
    },
    {
        id: 'postDate',
        label: '작성일자',
        maxWidth: 50,
        align: 'right',
        format: (value) => value.slice(0,10),
    },
    {
        id: 'views',
        label: '조회수',
        maxWidth: 50,
        align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
    },

];

const useStyles = makeStyles({
    root: {
        width: '100%',
        height:"100%",
        boxShadow: "none"
    },
    container: {
        maxHeight: "100%",
    },
    mainContainer:{
        paddingTop: "20px",
        height:"100%",
    },
    tableColumns:{
        fontFamily: "twayair",
        textAlign:"center"
    },
    tableRows:{
        fontFamily: "twayair",
        textAlign:"center",
    },
    boardLink:{
        textDecoration: "none",
        color:"black"
    },
    title:{
        color: "#1e1e1e",
        marginBottom: "25px",
        paddingBottom: "14px",
        paddingTop: "20px",
        paddingLeft: "50px",
        borderBottom: "2px solid #D0D7DB",

    }
});

const BoardListForm = props => {
    const classes                       = useStyles();
    const [page, setPage]               = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const boardData                     = props.data.sort((a, b) => {
                                                return b.postNum - a.postNum;
                                            });;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Container maxWidth="xl" className={classes.mainContainer}>
                <Col lg={12}>
                    <h3 className={classes.title}>{(props.path.slice(1, -1)).toUpperCase()}</h3>
                </Col>
                {boardData ===undefined? <LoaddingSpinner/>:
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} className={classes.tableColumns}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                                <TableBody>
                                    {boardData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align} className={classes.tableRows}>
                                                            {column.label==="제목"?
                                                            <Link to={{ pathname: props.path +"/article/"+row.postNum,
                                                                    state: {
                                                                    data: row
                                                                    }}}
                                                                  className={classes.boardLink}>
                                                                {value}
                                                            </Link>:
                                                            column.label==="작성일자"? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={boardData.length} rowsPerPage={rowsPerPage} page={page}
                                     onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
                </Paper>
                }
            </Container>
        </>
    );
}


export default BoardListForm;
