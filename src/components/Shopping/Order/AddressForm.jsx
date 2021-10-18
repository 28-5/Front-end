import React from "react";
import Grid from '@material-ui/core/Grid';
const AddressForm = (props) => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <h1>배송정보</h1>
            </Grid>
            <Grid item xs={12}>
                <label htmlFor='cardNumber'>주문자 성함</label>
                <input required type='text' name='cardNumber' value={props.buyer} onChange={props.buyerChangeHandler}/>
            </Grid>
            <Grid item xs={12}>
                <label htmlFor='cardholderName'>수령인</label>
                <input required type='text' name='cardholderName' value={props.receiver}
                       onChange={props.receiverChangeHandler}/>
            </Grid>
            <Grid item xs={12}>
                <label htmlFor='cardholderName'>연락처</label>
                <input required type='text' name='cardholderName' value={props.contact}
                       onChange={props.contactChangeHandler}/>
            </Grid>
            <Grid item xs={12}>
                <label htmlFor='cardholderName'>주소</label>
                <input required type='text' name='cardholderName' value={props.addr} onChange={props.addressChangeHandler}/>
            </Grid>
            <Grid item xs={12}>
                <label htmlFor='cardholderName'>요청사항</label>
                <input required type='text' name='cardholderName' value={props.memo} onChange={props.memoChangeHandler}/>
            </Grid>
        </Grid>

    );
};

export default AddressForm;