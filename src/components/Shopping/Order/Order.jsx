import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Container from "@material-ui/core/Container";
import "./Order.css";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";
import useInput from "../../hooks/use-input";
import OrderList from "./OrderList";

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
    return ['배송정보 입력', '결제', '구매완료'];
}

const Order = () => {
    const classes                                                                                           = useStyles();
    const [activeStep, setActiveStep]                                                                       = React.useState(0);
    const steps                                                                                             = getSteps();
    let   isFormValid                                                                                       = false;
    const { value: enteredBuyer, valueChangeHandler: buyerChangeHandler, reset: resetBuyerInput}            = useInput();
    const { value: enteredReceiver, valueChangeHandler: receiverChangeHandler, reset: resetreceiverInput}   = useInput();
    const { value: enteredContact, valueChangeHandler: contactChangeHandler, reset: resetContactInput}      = useInput();
    const { value: enteredAddress, valueChangeHandler: addressChangeHandler, reset: resetAddressInput}      = useInput();
    const { value: enteredMemo, valueChangeHandler: memoChangeHandler, reset: resetMemoInput}               = useInput();
    const { value: selectedMethod, valueChangeHandler: methodChangeHandler, reset: resetday}                = useInput();
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <AddressForm buyerChangeHandler={buyerChangeHandler} receiverChangeHandler={receiverChangeHandler}
                                    contactChangeHandler={contactChangeHandler} addressChangeHandler={addressChangeHandler}
                                    memoChangeHandler={memoChangeHandler} buyer={enteredBuyer} receiver={enteredReceiver}
                                    addr={enteredAddress} contact={enteredContact} memo={enteredMemo}/>;
            case 1:
                return <PaymentForm selectedMethod={selectedMethod} methodChangeHandler={methodChangeHandler}/>;
            case 2:
                return <OrderSummary buyer={enteredBuyer} receiver={enteredReceiver} contact={enteredContact}
                                     address={enteredAddress} payment={selectedMethod} memo={enteredMemo} />;
            default:
                throw new Error('Unknown step');
        }
    }
    if(enteredBuyer !=='' && enteredReceiver !=='' && enteredContact !=='' && enteredAddress !==''){
        isFormValid = true;
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

    return (
        <div className={classes.orderMainDiv}>
            <Container maxWidth="lg" className={classes.orderContainer}>
                <div className={classes.root}>
                    <Stepper alternativeLabel activeStep={activeStep}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                <div id='container'>
                    <aside id='info'>
                        {getStepContent(activeStep)}
                        <button id='makePayment'
                                onClick={handleNext}>{activeStep === 0 ? "결제선택" : activeStep === 1 ? "결제하기" : "구매완료"}</button>
                        {activeStep > 0 && <button id='backward' onClick={handleBack}>이전</button>}
                    </aside>
                    <OrderList/>
                </div>
            </Container>
        </div>
    );
};

export default Order;