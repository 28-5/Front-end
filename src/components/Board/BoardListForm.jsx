import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Navbar from "../Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LoginNavBtn from "../Login/LoginNavBtn";
import {Link} from "react-router-dom";

const columns = [
    { id: 'postNum', label: '번호', maxWidth: 30 },
    { id: 'postTitle', label: '제목', minWidth: 300 },
    {
        id: 'userId',
        label: '작성자',
        maxWidth: 50,
        align: 'right',
    },
    {
        id: 'postDate',
        label: '작성일자',
        maxWidth: 50,
        align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
    },

];

function createData(postNum, postTitle, userId, postDate) {
    return { postNum, postTitle, userId, postDate };
}

const rows = [
    createData('1', 'India',  'user1234', "2021-09-30"),
    createData('2', 'China',  1403500365, 9596961),
    createData('3', 'Italy',  60483973, 301340),
    createData( '4', 'United States', 327167434, 9833520),
    createData('5', 'Canada',  37602103, 9984670),
    createData('6', 'Australia',  25475400, 7692024),
    createData('7', 'Germany',  83019200, 357578),
    createData('8', 'Ireland',  4857000, 70273),
    createData('9', 'Mexico',  126577691, 1972550),
    createData('100', 'Japan',  126317000, 377973),
    createData('12134', 'France',  67022000, 640679),
    createData( '123456', 'United Kingdom', 67545757, 242495),
    createData('123', 'Russia',  146793744, 17098246),
    createData('4', 'Nigeria',  200962417, 923768),
    createData('12312', 'Brazil',  210147125, 8515767),
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
        paddingLeft:"260px",
        paddingTop: "0px",
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
    boardTable:{

    }
});

const BoardListForm = props => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Navbar />
            <LoginNavBtn />
            <Container maxWidth="xl" className={classes.mainContainer}>
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
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} className={classes.tableRows}>
                                                    <Link to={"/main"} >
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </Link>
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page}
                                     onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
                </Paper>
            </Container>
        </>
    );
}


export default BoardListForm;
