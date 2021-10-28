import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits(props) {
    const classes = useStyles();
    const today    = new Date();
    let totalPrice = 0;

    if(props.orderData !== null) {
        props.orderData.dtoList.map(price => {
            return totalPrice += price.totalPrice;
        });
    }

    return (
        <React.Fragment>
            <Title>매출</Title>
            <Typography component="p" variant="h4">
                {totalPrice.toLocaleString('ko-KR')} 원
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                {today.getMonth()+1 + "월" + today.getDate() + "일 기준"}
            </Typography>
        </React.Fragment>
    );
}