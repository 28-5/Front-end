import React, {useState} from 'react';
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
import {useDispatch} from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import "./Order.css";
import IamPortPay from "./Payment/IamPortPay";

const useStyles = makeStyles((theme) => ({
    orderMainDiv:{
      height:"120vh",
      [theme.breakpoints.down('md')]: {
        height:"140vh",
      },
    },
    orderContainer:{
    },
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },



}));



function getSteps() {
    return ['구매정보 입력', '결제', '구매완료'];
}

const Order = () => {
    const classes                          = useStyles();
    const dispatch                         = useDispatch();


    const [activeStep, setActiveStep]      = React.useState(0);
    const steps                            = getSteps();
    let   isFormValid                      = false;
    const [isBtnClicked, setIsBtnClicked]  = useState(false);
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
                                    receiverAddr={enteredReceiverAddress} memo={enteredMemo}
                                    isBtnClicked={isBtnClicked} sameInfoBtnHandler={sameInfoBtnHandler}/>;
            case 1:
                return <PaymentForm selectedMethod={selectedMethod} methodChangeHandler={methodChangeHandler}
                                    wireName={wireName} wireNameChangeHandler={wireNameChangeHandler} resetMethod={resetMethod}/>;
            case 2:
                return <OrderSummary buyer={enteredBuyer} receiver={enteredReceiver} contact={enteredContact}
                                     address={enteredAddress} payment={selectedMethod} memo={enteredMemo} />;
            default:
                throw new Error('Unknown step');
        }
    }
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
                            <OrderList />
                        </Row>
                    </form>
                    <Row>
                        <div className="payment-method">
                        <button type="button" onClick={handleNext}>
                            {activeStep === 0 ? "결제선택" : activeStep === 1 ? "결제하기" : "구매완료"}
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