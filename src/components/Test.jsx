import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import "./Test.css";
import {Link} from "react-router-dom";
import React from "react";

const Test = () => {
    return(
        <>
            {/*<Row className="search-model">*/}
            {/*    <Col className="h-100 d-flex align-items-center justify-content-center">*/}
            {/*        <div className="search-close-switch">+</div>*/}
            {/*        <form className="search-model-form">*/}
            {/*            <input type="text" id="search-input" placeholder="Search here....."/>*/}
            {/*        </form>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <header className="header-section">
                <Container fluid>
                    <div className="inner-header">
                        <div className="logo">
                            <a href="./index.html"><img src="img/logo/logo.png" alt=""/></a>
                        </div>
                        <div className="header-right">
                            <img src="img/icons/search.png" alt="" className="search-trigger"/>
                                <img src="img/icons/man.png" alt=""/>
                                    <a href="#">
                                        <img src="img/icons/bag.png" alt=""/>
                                            <span>2</span>
                                    </a>
                        </div>
                        <div className="user-access">
                            <Link to={"/member/register"}>회원가입</Link>
                            <Link to={"/member/login"} className={"in"}>로그인</Link>
                            {/*<a href="#">회원가입</a>*/}
                            {/*<a href="#" className="in">로그인</a>*/}
                        </div>
                        <Navbar className="main-menu">
                            <ul>
                                <li><Link to={"/shop"} className={"active"}>메인</Link></li>
                                <li><Link to={"/shop"}>쇼핑하기</Link>
                                    <ul className="sub-menu">
                                        <li><a href="product-page.html">제품 카테고리1</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                        <li><a href="shopping-cart.html">제품 카테고리2</a></li>
                                        <li><a href="check-out.html">제품 카테고리3</a></li>
                                    </ul>
                                </li>
                                <li><Link to={""}>주문조회</Link></li>
                                <li><Link to={"/notices"}>공지사항</Link></li>
                                <li><Link to={"/introduction"}>회사소개</Link></li>
                            </ul>
                        </Navbar>
                        <Navbar className="mobile-menu">
                            <ul>
                                <li><Link to={"/shop"} className={"active"}>메인</Link></li>
                                <li><Link to={"/shop"}>쇼핑하dd기</Link>
                                    <ul className="sub-menu">
                                        <li><a href="product-page.html">제품 카테고리1</a></li>
                                        <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                        <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                        <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                        <li className="sub-category-menu"><a href="product-page.html">제품</a></li>
                                        <li><a href="shopping-cart.html">제품 카테고리2</a></li>
                                        <li><a href="check-out.html">제품 카테고리3</a></li>
                                    </ul>
                                </li>
                                <li><Link to={""}>주문조회</Link></li>
                                <li><Link to={"/notices"}>공지사항</Link></li>
                                <li><Link to={"/introduction"}>회사소개</Link></li>
                            </ul>
                        </Navbar>
                    </div>
                </Container>
            </header>
            <div class="header-info">
                <Container fluid>
                    <Row >
                        <Col md={4}>
                            <div className="header-item">
                                <img src="img/icons/delivery.png" alt=""/>
                                    <p>Free shipping on orders over $30 in USA</p>
                            </div>
                        </Col>
                        <Col md={4} className="text-left text-lg-center">
                            <div className="header-item">
                                <img src="img/icons/voucher.png" alt=""/>
                                    <p>20% Student Discount</p>
                            </div>
                        </Col>
                        <Col md={4} className="text-left text-xl-right">
                            <div className="header-item">
                                <img src="img/icons/sales.png" alt=""/>
                                    <p>30% off on dresses. Use code: 30OFF</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
                <footer className="footer-section spad">
                    <Container className="container">
                        <div className="footer-widget">
                            <Row className="row">
                                <Col sm={6} lg={3}>
                                    <div className="single-footer-widget">
                                        <h4>About us</h4>
                                        <ul>
                                            <li>About Us</li>
                                            <li>Community</li>
                                            <li>Jobs</li>
                                            <li>Shipping</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={6} lg={3}>
                                    <div className="single-footer-widget">
                                        <h4>Customer Care</h4>
                                        <ul>
                                            <li>Search</li>
                                            <li>Privacy Policy</li>
                                            <li>2019 Lookbook</li>
                                            <li>Shipping & Delivery</li>
                                            <li>Gallery</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={3} sm={6} className="col-lg-3 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h4>Our Services</h4>
                                        <ul>
                                            <li>Free Shipping</li>
                                            <li>Free Returnes</li>
                                            <li>Our Franchising</li>
                                            <li>Terms and conditions</li>
                                            <li>Privacy Policy</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={3} sm={6} className="col-lg-3 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h4>Information</h4>
                                        <ul>
                                            <li>Payment methods</li>
                                            <li>Times and shipping costs</li>
                                            <li>Product Returns</li>
                                            <li>Shipping methods</li>
                                            <li>Conformity of the products</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="social-links-warp">
                        <div className="container">
                            <div className="social-links">
                                <Link to="/company" >메인</Link>
                                <Link to="/introduction" >회사소개</Link>
                                <Link to="#" >이용약관</Link>
                            <Link to="#" >개인정보처리방침</Link>
                        <Link to="#" >Contact Us</Link>
                            </div>
                        </div>

                        <div className="container text-center pt-5">
                            <p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0
                                Copyright &copy;
                                All rights reserved | This template is made with <i className="icon-heart color-danger"
                                                                                    aria-hidden="true"></i> by <a
                                    href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>


                    </div>
                </footer>
        </>
    )

}

export default Test;