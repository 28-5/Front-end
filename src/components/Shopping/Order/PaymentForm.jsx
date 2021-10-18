import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';

const PaymentForm = (props) => {
    return(
        <>
            <h1>결제방법 선택</h1>
            <div className={"radioDiv"}>
            <label className="form-radio-label">
                <input name="eat" className="form-radio-field" type="radio" value="무통장" onClick={props.methodChangeHandler}/>
                <i className="form-radio-button"></i>
                <span>무통장입금</span>
            </label>
            <label className="form-radio-label">
                <input name="eat" className="form-radio-field" type="radio" value="카드" onClick={props.methodChangeHandler}/>
                <i className="form-radio-button"></i>
                <span>카드 결제</span>
            </label>
            <label className="form-radio-label">
                <input name="eat" className="form-radio-field" type="radio" value="계좌이체" onClick={props.methodChangeHandler} />
                <i className="form-radio-button"></i>
                <span>실시간 계좌이체</span>
            </label>
            <label className="form-radio-label">
                <input name="eat" className="form-radio-field" type="radio" value="카카오" onClick={props.methodChangeHandler} />
                <i className="form-radio-button"></i>
                <span>카카오페이</span>
            </label>
            <label className="form-radio-label">
                <input name="eat" className="form-radio-field" type="radio" value="토큰" onClick={props.methodChangeHandler}/>
                <i className="form-radio-button"></i>
                <span>토큰 결제</span>
            </label><br/>
            </div>
            {props.selectedMethod === "무통장"&&
                <div className="paymentDiv">
                    <h1>무통장입금</h1>
                    <div className={"paymentWireDiv"}>
                        <label htmlFor='cardDate'className={"paymentLabel"} >입금자 성명</label>
                        <TextField required id="standard-basic" />
                    </div><br/>
                    <div className={"paymentWireDiv"}>
                        <label htmlFor='cardDate'className={"paymentLabel"} >은행 계좌</label>
                        <Typography variant={"h6"}>신한은행 110-123123-123</Typography>
                        {/*<input type='text' name='cardDate' className={"paymentLabel"}/>*/}
                    </div>
                </div>}
            {/*<select name='paymentMethod'>*/}
            {/*    <option>Visa</option>*/}
            {/*    <option>MasterCard</option>*/}
            {/*    <option>Elo</option>*/}
            {/*</select>*/}

            {/*<label htmlFor='cardDate'>Expiration Date</label>*/}
            {/*<input type='text' name='cardDate'/>*/}

            {/*<label htmlFor='cvv'>CVV</label>*/}
            {/*<input type='text' name='cvv'/>*/}
        </>
    )
};

export default PaymentForm;