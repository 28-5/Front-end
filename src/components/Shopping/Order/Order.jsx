import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingTopNav from "../ShoppingTopNav";
import Container from "@material-ui/core/Container";
import ShoppingNavbar from "../../Navbar/ShoppingNavbar";
import "./Order.css";

const useStyles = makeStyles((theme) => ({
    orderMainDiv:{
      height:"120vh"

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
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
            <ShoppingTopNav/>
            <Container maxWidth="lg" className={classes.orderContainer}>
            <ShoppingNavbar/>
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
                        <label htmlFor='cardNumber'>주문자 성함</label>
                        <input type='text' name='cardNumber'/>
                        <label htmlFor='cardholderName'>연락처</label>
                        <input type='text' name='cardholderName'/>
                        <label htmlFor='cardholderName'>주소</label>
                        <input type='text' name='cardholderName'/>
                        <label htmlFor='cardholderName'>요청사항</label>
                        <input type='text' name='cardholderName'/>

                        {/*<label htmlFor='paymentMethod'>Payment Method</label>*/}
                        {/*<select name='paymentMethod'>*/}
                        {/*    <option>Visa</option>*/}
                        {/*    <option>MasterCard</option>*/}
                        {/*    <option>Elo</option>*/}
                        {/*</select>*/}


                        {/*<label htmlFor='cardDate'>Expiration Date</label>*/}
                        {/*<input type='text' name='cardDate'/>*/}

                        {/*<label htmlFor='cvv'>CVV</label>*/}
                        {/*<input type='text' name='cvv'/>*/}

                        <button id='makePayment' onClick={handleNext}>{activeStep === 0? "결제선택": activeStep === 1?"결제하기":"구매완료"}</button>
                        {activeStep > 0 && <button id='backward' onClick={handleBack}>이전</button>}
                    </aside>
                    <div id='description'>
                        <h2>주문리스트 확인</h2>
                        <img src='/img/productImg/1.png'/>
                            <h1>$150</h1>
                    </div>
                </div>
        </Container>
        </div>
    );
};

export default Order;