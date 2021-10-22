import React, {useEffect} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import IamPortPay from "./Payment/IamPortPay";
const PaymentForm = (props) => {
    useEffect(() => {
        window.scrollTo(0,200);
    }, [])
    return(
        <>
            <Col lg={12}>
                <h3>결제</h3>
            </Col>
            <Col lg={9}>
                <Row>
                    <ButtonGroup aria-label="Basic example" className="btnGroup">
                        <Button variant="outline-primary" value="무통장" onClick={props.methodChangeHandler}>무통장입금</Button>
                        <Button variant="outline-primary" value="카드" onClick={props.methodChangeHandler}>카드</Button>
                        <Button variant="outline-primary" value="계좌이체" onClick={props.methodChangeHandler}>실시간 계좌이체</Button>
                        <Button variant="outline-primary" value="카카오" onClick={props.methodChangeHandler}>카카오페이</Button>
                    </ButtonGroup>
                    {props.selectedMethod === "무통장"&&
                    <>
                        <Row>
                            <Col lg={2}>
                                <p className="in-name">입금인*</p>
                            </Col>
                            <Col lg={4}>
                                <input type="text" value={props.wireName} onChange={props.wireNameChangeHandler}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}>
                                <p className="in-name">입금계좌</p>
                            </Col>
                            <Col lg={10}>
                                <input type="text" value={"신한은행 110-123123-123"} readOnly/>
                            </Col>
                        </Row>
                    </>}

                    {props.selectedMethod === "카카오" && <IamPortPay orderList={props.orderList} buyer={props.buyer}
                                                                    contact={props.contact} addr={props.addr} usedToken={props.usedToken}
                                                                   enteredMemo={props.enteredMemo} setActiveStep={props.setActiveStep}
                                                                   setPaymentSuccessData={props.setPaymentSuccessData}/>}
                </Row>
            </Col>
        </>
    )
};

export default PaymentForm;