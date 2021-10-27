import React, { Fragment} from "react";
import Col from "react-bootstrap/Col";
import {useDispatch, useSelector} from "react-redux";
import {orderActions} from "../../../store/order-slice";

const OrderList = (props) => {
    const dispatch                         = useDispatch();
    const numberOfCartItems                = useSelector(state => state.cart.totalQuantity);
    const tokenPrice                       = useSelector(state => state.token.tokenPrice);
    const totalPrice                       = useSelector(state => state.cart.totalPrice);
    const userOrderTokenPrice              = (tokenPrice * props.usedToken);
    let discountPrice;
    if(props.usedToken >= 0){
        discountPrice                  = Number((totalPrice - userOrderTokenPrice).toFixed(2));
        dispatch(orderActions.updateFinalPrice(discountPrice));
    }else{
        discountPrice                      = Number((totalPrice).toFixed(2));
        dispatch(orderActions.updateFinalPrice(discountPrice));
    }

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
                        <span>할인금액 (토큰 개수)</span>
                        <p>{(tokenPrice * props.usedToken).toLocaleString('ko-KR')}원 ({props.usedToken})</p>
                    </div>
                    <div className="cart-item">
                        <span>배송비</span>
                        <p>무료</p>
                    </div>
                    <div className="cart-total">
                        <span>결제하실 금액</span>
                        <p>{discountPrice.toLocaleString('ko-KR')} 원</p>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default OrderList;