import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";
import useInput from "../../hooks/use-input";
import OrderList from "./OrderList";
import {uiActions} from "../../../store/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import "./Order.css";
import IamPortPay from "./Payment/IamPortPay";
import axios from "axios";

function getSteps() {
    return ['구매정보 입력', '결제', '구매완료'];
}

const Order = () => {
    const dispatch                         = useDispatch();
    const isAuth                           = useSelector(state => state.auth.isAuthenticated);
    const [activeStep, setActiveStep]      = useState(0);
    const [usedToken, setUsedToken]        = useState(0);
    const [paymentSuccessData, setPaymentSuccessData] = useState();
    const steps                            = getSteps();
    let   isFormValid                      = false;
    const [isBtnClicked, setIsBtnClicked]  = useState(false);
    const [orderList, setOrderList]        = useState(null);
    const { value: enteredBuyer, valueChangeHandler: buyerChangeHandler,
        reset: resetBuyerInput}            = useInput();
    const { value: enteredReceiver, valueChangeHandler: receiverChangeHandler,
        reset: resetreceiverInput}         = useInput();
    const { value: enteredContact, valueChangeHandler: contactChangeHandler,
        reset: resetContactInput}          = useInput();
    const { value: enteredReceiverContact,
        valueChangeHandler: receiverContactChangeHandler,
        reset: resetReceiverContactInput}  = useInput();
    const { value: enteredAddress, valueChangeHandler: addressChangeHandler,
        reset: resetAddressInput}          = useInput();
    const { value: enteredReceiverAddress,
        valueChangeHandler: receiverAddressChangeHandler,
        reset: resetReceiverAddressInput}  = useInput();
    const { value: enteredMemo, valueChangeHandler: memoChangeHandler,
        reset: resetMemoInput}             = useInput();
    const { value: selectedMethod, valueChangeHandler: methodChangeHandler,
        reset: resetMethod}                   = useInput();
    const { value: wireName, valueChangeHandler: wireNameChangeHandler,
        reset: resetWireName}                   = useInput();

    const sameInfoBtnHandler = (event) =>{
        setIsBtnClicked(!isBtnClicked)
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <AddressForm buyerChangeHandler={buyerChangeHandler} receiverChangeHandler={receiverChangeHandler}
                                    contactChangeHandler={contactChangeHandler} receiverContactChangeHandler={receiverContactChangeHandler}
                                    addressChangeHandler={addressChangeHandler} receiverAddressChangeHandler={receiverAddressChangeHandler}
                                    memoChangeHandler={memoChangeHandler} buyer={enteredBuyer} receiver={enteredReceiver}
                                    addr={enteredAddress} contact={enteredContact} receiveContact={enteredReceiverContact}
                                    receiverAddr={enteredReceiverAddress} memo={enteredMemo} setUsedToken={setUsedToken}
                                    usedToken={usedToken} isBtnClicked={isBtnClicked} sameInfoBtnHandler={sameInfoBtnHandler}/>;
            case 1:
                return <PaymentForm selectedMethod={selectedMethod} methodChangeHandler={methodChangeHandler} usedToken={usedToken}
                                    wireName={wireName} wireNameChangeHandler={wireNameChangeHandler} enteredMemo={enteredMemo}
                                    buyer={enteredBuyer} addr={enteredAddress} contact={enteredContact} setActiveStep={setActiveStep}
                                    orderList={orderList} setPaymentSuccessData={setPaymentSuccessData} resetMethod={resetMethod}/>;
            case 2:
                return <OrderSummary review={paymentSuccessData} />;
            default:
                throw new Error('Unknown step');
        }
    }
    if(isAuth){
        if(isBtnClicked){
            isFormValid = true;
        }else{
            if(enteredBuyer !=='' && enteredContact !=='' && enteredAddress !==''
                && enteredReceiver !=='' && enteredReceiverContact !== '' && enteredReceiverAddress !== ''){
                isFormValid = true;
            }
        }
    }else{
        if(isBtnClicked){
            if(enteredBuyer !=='' && enteredContact !=='' && enteredAddress !==''){
                isFormValid = true;
            }
        }else{
            if(enteredBuyer !=='' && enteredContact !=='' && enteredAddress !==''
                && enteredReceiver !=='' && enteredReceiverContact !== '' && enteredReceiverAddress !== ''){
                isFormValid = true;
            }
        }
    }

    const handleNext = () => {
        if(!isFormValid){
            return;
        }else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep < 0) {
            setActiveStep(0);
            return;
        }else{
            setActiveStep((prevActiveStep) => prevActiveStep - 1)
        }
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    useEffect(() => {
        const getOrderData = () => {
            axios.get("/carts")
                .then(res => setOrderList(res.data.cartDtos))
                .catch(err => console.log(err));

            // const getCartData = async () => {
            //     const response = axios.get("/carts");
            //
            //     if (!response) {
            //         throw new Error("카트 정보를 읽어올 수가 없습니다!");
            //     }
            //     const data = (await response).data.cartDtos;
            //     return data;
            // };
            // try{
            //     const orderData = await getCartData();
            //     setOrderList(orderData);
            // }catch(err){
            //     console.log(err);
            // }
        }
        getOrderData();
    }, []);

    dispatch(uiActions.toggleOff());
    return (
        <>
            <section className="page-add">
                <Container>
                    <Row>
                        <Col lg={4} >
                            <div className="page-breadcrumb">
                                <h2>주문하기</h2>
                            </div>
                        </Col>
                        <Col lg={8} >
                            <Stepper alternativeLabel activeStep={activeStep}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="cart-total-page spad">
                <Container>
                    <form action="#" className="checkout-form">
                        <Row className="row">
                            {getStepContent(activeStep)}
                            <OrderList orderList={orderList} usedToken={usedToken}/>
                        </Row>
                    </form>
                    <Row>
                        <div className="payment-method">
                        <button type="button" onClick={handleNext}>
                            {activeStep === 0 ? "결제선택" : activeStep === 1 ? "주문완료" : "구매완료"}
                        </button>
                            {activeStep > 0 && <button id='backward' onClick={handleBack}>이전</button>}
                        </div>
                    </Row>
                        {/*<Row className="row">*/}
                        {/*    <Col lg={12}>*/}
                        {/*        <div className="payment-method">*/}
                        {/*            <h3>Payment</h3>*/}
                        {/*            <ul>*/}
                        {/*                <li>Paypal <img src="img/paypal.jpg" alt=""/></li>*/}
                        {/*                <li>Credit / Debit card <img src="img/mastercard.jpg" alt=""/></li>*/}
                        {/*                <li>*/}
                        {/*                    <label htmlFor="two">Pay when you get the package</label>*/}
                        {/*                    <input type="radio" id="two"/>*/}
                        {/*                </li>*/}
                        {/*            </ul>*/}
                        {/*            {getStepContent(activeStep)}*/}
                        {/*            {activeStep > 0 && <button id='backward' onClick={handleBack}>이전</button>}*/}
                        {/*        </div>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}
                </Container>
            </section>
        </>
    );
};

export default Order;