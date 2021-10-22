import React from 'react';
import { Form} from 'antd';
import { withRouter } from 'react-router-dom';
import { withUserAgent } from 'react-useragent';
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import {productActions} from "../../../../store/product-slice";
import axios from "axios";
function IamPortPay(props){
    const isAuth                = useSelector(state => state.auth.isAuthenticated);
    const userInfo              = useSelector(state => state.auth);
    const totalPrice            = useSelector(state => state.cart.totalPrice);
    const dispatch              = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const { IMP } = window;
        IMP.init("imp38404270");

        if(isAuth){
            IMP.request_pay({
                pg : "kakaopay",
                pay_method : 'card',
                merchant_uid : new Date().getTime(),
                name : '리본 상품 결제',
                amount : 1,
                buyer_email : userInfo.email,
                buyer_name : userInfo.name,
                buyer_tel : userInfo.phone,
                buyer_addr : userInfo.address,
                buyer_postcode : userInfo.address,
            }, callback);
        }else{
            IMP.request_pay({
                pg : "kakaopay",
                pay_method : 'card',
                merchant_uid : new Date().getTime(),
                name : '리본 상품 결제',
                amount : totalPrice,
                buyer_email : props.email,
                buyer_name : props.buyer,
                buyer_tel :  props.contact,
                buyer_addr : props.addr,
                buyer_postcode : props.addr,
            }, callback);
        }
    }
    function callback(res) {
        console.log(res);
        if(res.success){
            let orderProductList = props.orderList.map( element =>{
                let obj = {
                    productIdx:element.productIdx,
                    quantity:element.quantity
                }
                return obj
            })
            const paymentSuccessData  = ({
                impUid: res.imp_uid,
                orderNumber: res.merchant_uid,
                userId: res.buyer_email,
                userEmail: res.buyer_email,
                userName: res.buyer_name,
                orderName: res.name,
                deliveryMessage: props.enteredMemo,
                recipientAddress: res.buyer_addr,
                totalPrice: res.paid_amount,
                tokenAmount: props.usedToken,
                orderProductList: orderProductList,
                tokenPrice: 10,
            });
            console.log(props.orderList);
            console.log(paymentSuccessData);
            axios.post("/orders", paymentSuccessData, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'}).then(res => console.log(res.data))
                .catch(err => console.log(err));
            props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }else{
            alert("결제에 실패하였습니다. 에러 내용: " + res.errorMessage);
        }
    }

    return (
        <>
            <Button variant="outline-secondary" ><img src={"/img/kakaopay.jpg"} onClick={handleSubmit}/></Button>
        </>
    );
}

const PaymentForm = Form.create({ name: 'payment' })(IamPortPay);

export default withUserAgent(withRouter(PaymentForm));

