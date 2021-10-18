import React from "react";

const OrderList = () => {
    return(
        <div id="wrapper">
            <div id="container">
                <div id="left-col">
                    <div id="left-col-cont">
                        <h2>주문목록</h2>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/shirt.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Blue Ocean Shirt</h3>
                                <p className="amount">X 1</p>
                                <p className="price">$60</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/green-shirt.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Green Pine Shirt</h3>
                                <p className="amount">X 1</p>
                                <p className="price">$55</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/belt.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Cow Skin Belt</h3>
                                <p className="amount">X 10</p>
                                <p className="price">$32</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/watch1.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Festina Quartz Watch</h3>
                                <p className="amount">X 5</p>
                                <p className="price">$299</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/shirt.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Blue Ocean Shirt</h3>
                                <p className="amount">X 1</p>
                                <p className="price">$60</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/green-shirt.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Green Pine Shirt</h3>
                                <p className="amount">X 1</p>
                                <p className="price">$55</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/belt.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Cow Skin Belt</h3>
                                <p className="amount">X 10</p>
                                <p className="price">$32</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/watch1.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Festina Quartz Watch</h3>
                                <p className="amount">X 5</p>
                                <p className="price">$299</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/shirt.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Blue Ocean Shirt</h3>
                                <p className="amount">X 1</p>
                                <p className="price">$60</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/green-shirt.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Green Pine Shirt</h3>
                                <p className="amount">X 1</p>
                                <p className="price">$55</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/belt.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Cow Skin Belt</h3>
                                <p className="amount">X 10</p>
                                <p className="price">$32</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-col">
                                <img src="http://emilcarlsson.se/assets/watch1.png" alt=""/>
                            </div>
                            <div className="meta-col">
                                <h3>Festina Quartz Watch</h3>
                                <p className="amount">X 5</p>
                                <p className="price">$299</p>
                            </div>
                        </div>
                        <div className="item totalPrice">
                            <div className="totalPriceMeta">
                                <h1 id="total">Total</h1>
                                <h4 id="total-price">$ 446</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderList;