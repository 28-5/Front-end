import React, {useEffect, useState, Fragment} from "react";
import Col from "react-bootstrap/Col";
import {useSelector} from "react-redux";
import axios from "axios";

const OrderList = (props) => {
    const numberOfCartItems                = useSelector(state => state.cart.totalQuantity);
    const totalPrice                       = useSelector(state => state.cart.totalPrice);


    return(
        <>
            <Col lg={3} >
                <div className="order-table">
                    <div className="cart-item">
                        <span>제품</span>
                        {props.orderList !== null && props.orderList.map(list => (
                            <Fragment key={list.cartIdx}>
                                <p className="product-name">{list.title} X {list.quantity}</p>
                                <br/>
                            </Fragment>
                        ))
                        }
                    </div>
                    <div className="cart-item">
                        <span>전체 수량</span>
                        <p>{numberOfCartItems}</p>
                    </div>
                    <div className="cart-item">
                        <span>전체가격</span>
                        <p>{totalPrice.toLocaleString('ko-KR')}</p>
                    </div>
                    <div className="cart-item">
                        <span>토큰 사용</span>
                        <p>{props.usedToken}</p>
                    </div>
                    <div className="cart-item">
                        <span>배송비</span>
                        <p>2,500원</p>
                    </div>

                    <div className="cart-total">
                        <span>결제하실 금액</span>
                        <p>$39</p>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default OrderList;