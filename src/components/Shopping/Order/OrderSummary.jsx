import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import React from "react";
import "./OrderSummary.css";

const OrderSummary = (props) => {
    console.log(props.review);
    props.resetAddressInput();
    props.resetBuyerInput();
    props.resetContactInput();
    props.resetMemoInput();
    props.resetReceiverAddressInput();
    props.resetReceiverContactInput();
    props.resetreceiverInput();
    props.resetWireName();
    return (
        <>
            <h3>구매확인</h3>
            <Container>
                <Row>
                    <Col lg={4}>
                    </Col>
                    <Col lg={8}>
                        <h2>구매해주셔서 감사합니다!</h2>
                    </Col>
                </Row>

                {/*{props.selectedMethod === "카카오" && props.review &&*/}
                {/*    <Row>*/}
                {/*    <Col lg={12} >*/}
                {/*        <div className="order-table">*/}
                {/*            <div className="cart-item">*/}
                {/*                <span>주문번호</span>*/}
                {/*                <p>{props.review.orderNumber}</p>*/}
                {/*            </div>*/}
                {/*            <div className="cart-item">*/}
                {/*                <span>제품</span>*/}
                {/*                {props.review.orderProductList.map(item =>*/}
                {/*                    <p>{item.title}</p>*/}
                {/*                )}*/}
                {/*            </div>*/}
                {/*            <div className="cart-item">*/}
                {/*                <span>전체 수량</span>*/}
                {/*            </div>*/}
                {/*            <div className="cart-item">*/}
                {/*                <span>전체가격</span>*/}
                {/*                <p>{props.review.totalPrice}</p>*/}
                {/*            </div>*/}
                {/*            <div className="cart-item">*/}
                {/*                <span>할인금액 (토큰 개수)</span>*/}
                {/*            </div>*/}
                {/*            <div className="cart-item">*/}
                {/*                <span>배송비</span>*/}
                {/*                <p>무료</p>*/}
                {/*            </div>*/}
                {/*            <div className="cart-item">*/}
                {/*                <span>적립 토큰</span>*/}
                {/*                <p>{props.review.pointAmountToBuyer}</p>*/}
                {/*            </div>*/}
                {/*            <div className="cart-total">*/}
                {/*                {props.method === "카카오"? <span>결제하신 금액</span>: <span>입금하실 금액</span>}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*    <a className="btn btn-warning" href="#" role="button">영수증</a>*/}
                {/*</Row>}*/}
            </Container>
        </>
    );
}

export default OrderSummary;