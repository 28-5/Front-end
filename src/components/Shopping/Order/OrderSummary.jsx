import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import React, {Fragment} from "react";
import "./OrderSummary.css";

const OrderSummary = (props) => {
    console.log(props.review);
    // {"idx":7,"impUid":"imp_806893599320","orderNumber":"1635052891495","orderName":"리본 상품 결제","totalPrice":29873,
    // "tokenPrice":12.61,"tokenAmount":10,"orderState":"ORDER","orderProductsCount":1,
    // "orderProductList":[{"orderProductIdx":7,"price":30000,"quantity":6,"productIdx":4,"title":"캘러웨이 로스트볼",
    // "brand":"캘러웨이","rank":null,"content":"캘러웨이 로스트볼!","isRemoved":false,
    // "imageDtoList":[{"imgName":"ball_callewayball.jpg","uuid":"6e77f59e-e172-40c0-9159-9aeb5f90e61a","path":"2021/10/23",
    // "imageURL":"2021%2F10%2F23%2F6e77f59e-e172-40c0-9159-9aeb5f90e61a_ball_callewayball.jpg",
    // "thumbnailURL":"2021%2F10%2F23%2Fs_6e77f59e-e172-40c0-9159-9aeb5f90e61a_ball_callewayball.jpg"}]}],
    // "userEmail":"test12@gmail.com","userName":"이노에듀","recipient":null,"recipientAddress":"부산 강서구 르노삼성대로 14 (신호동)",
    // "recipientPhone":null,"deliveryStatus":"READY","deliveryMessage":"","regDate":"2021-10-24T14:22:26.0576012","modDate":"2021-10-24T14:22:26.0576012",
    // "pointAmountToBuyer":71}
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
                <Row>
                    <Col lg={12} >
                        <div className="order-table">
                            <div className="cart-item">
                                <span>주문번호</span>
                                <p>{props.review.orderNumber}</p>
                            </div>
                            <div className="cart-item">
                                <span>제품</span>
                                {/*<p>{props.review}</p>*/}
                            </div>
                            <div className="cart-item">
                                <span>전체 수량</span>
                            </div>
                            <div className="cart-item">
                                <span>전체가격</span>
                            </div>
                            <div className="cart-item">
                                <span>할인금액 (토큰 개수)</span>
                            </div>
                            <div className="cart-item">
                                <span>배송비</span>
                                <p>무료</p>
                            </div>
                            <div className="cart-total">
                                {props.method === "카카오"? <span>결제하신 금액</span>: <span>입금하실 금액</span>}
                            </div>
                        </div>
                    </Col>
                    {props.method === "카카오" &&
                    <a className="btn btn-warning" href="#" role="button">영수증</a>}
                </Row>
            </Container>
        </>
    );
}

export default OrderSummary;