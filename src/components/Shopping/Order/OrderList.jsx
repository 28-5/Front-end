import React, {useEffect, useState, Fragment} from "react";
import Col from "react-bootstrap/Col";
import {useSelector} from "react-redux";
import axios from "axios";

const OrderList = () => {
    const numberOfCartItems                = useSelector(state => state.cart.totalQuantity);
    const totalPrice                       = useSelector(state => state.cart.totalPrice);
    const [orderList, setOrderList]        = useState(null);
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
    }, [])
    return(
        <>
            <Col lg={3} >
                <div className="order-table">
                    <div className="cart-item">
                        <span>제품</span>
                        {orderList !== null && orderList.map(list => (
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
                        <p>0.5 개</p>
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