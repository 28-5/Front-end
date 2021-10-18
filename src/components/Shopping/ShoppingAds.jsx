import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import "./ShoppingAds.css"

const ShoppingAds = () => {
    return(
        <section className="features-section spad">
            <Col className="features-box">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col lg={12}>
                                    <div className="single-box-item first-box">
                                        <img src="/img/ads/ads2.jpg" alt="ads2"/>
                                        <div className="box-text">
                                            <span className="trend-year">2021</span>
                                            <h2>미즈노</h2>
                                            <span className="trend-alert">MP-20</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="single-box-item second-box">
                                        <img src="/img/ads/ads3.jpg" alt="ads3"/>
                                        <div className="box-text">
                                            <span className="trend-year">2021 Fashion Trend</span>
                                            <h2 className={"trend-title"}>Golf Wear</h2>
                                            <span className="trend-alert">Bold & Beige</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <div className="single-box-item large-box">
                                <img src="/img/ads/ads1.jpg" alt="ads1"/>
                                <div className="box-text">
                                    <span className="trend-year">2021 REBORN</span>
                                    <h2>Collection</h2>
                                    <div className="trend-alert">Trend Alert</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </section>
    );
};

export default ShoppingAds;