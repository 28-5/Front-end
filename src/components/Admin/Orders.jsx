import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import LoaddingSpinner from "../UI/LoaddingSpinner";


function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>최근 주문</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>날짜</TableCell>
                        <TableCell>주문번호</TableCell>
                        <TableCell>구매자</TableCell>
                        <TableCell>배송정보</TableCell>
                        <TableCell>결제금액</TableCell>
                        <TableCell>토큰지급</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.orderData !== null? props.orderData.dtoList.map((row) => (
                        <TableRow key={row.idx}>
                            <TableCell>{row.regDate.slice(0, 10)}</TableCell>
                            <TableCell>{row.orderNumber}</TableCell>
                            <TableCell>{row.userName}</TableCell>
                            <TableCell>{row.recipientAddress}</TableCell>
                            <TableCell>{row.totalPrice.toLocaleString('ko-KR')} 원</TableCell>
                            <TableCell>{row.tokenAmount}</TableCell>
                        </TableRow>
                    )) : <TableRow><td><LoaddingSpinner/></td></TableRow>}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more orders
                </Link>
            </div>
        </React.Fragment>
    );
}