import {Link} from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
    return(

        <footer className="footer-section spad">
            <Container className="container">
                <div className="footer-widget">
                    <Row className="row">
                        <Col sm={6} lg={3}>
                            <div className="single-footer-widget">
                                <h4>회사소개</h4>
                                <ul>
                                    <li><Link to={"/introduction"}>리본</Link></li>
                                    <li><Link to={"/introduction/team"}>사업소개</Link></li>
                                    <li><Link to={"/introduction/business"}>팀</Link></li>
                                    <li><Link to={"/introduction/manual"}>리본 토큰</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} lg={3}>
                            <div className="single-footer-widget">
                                <h4>쇼핑</h4>
                                <ul>
                                    <li><Link to={"/introduction"}>골프클럽</Link></li>
                                    <li><Link to={"/introduction"}>용품</Link></li>
                                    <li><Link to={"/introduction"}>웨어</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>게시판</h4>
                                <ul>
                                    <li><Link to={"/notices"}>공지사항</Link></li>
                                    <li><Link to={"/qnas"}>질문게시판</Link></li>
                                    <li><Link to={"/faq"}>자주묻는질문</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>마이페이지</h4>
                                <ul>
                                    <li><Link to={"/mypage"}>정보조회</Link></li>
                                    <li><Link to={"/mypage/order/list"}>주문조회</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="social-links-warp">
                <Container className="container">
                    <div className="social-links">
                        <Row className="row">
                            <Col sm={6} lg={12}>
                                <Link to="/shop" >메인</Link>
                                <Link to="/shop" >이용약관</Link>
                                <Link to="/shop" >개인정보처리방침</Link>
                                <Link to="/shop" >Contact Us</Link>
                            </Col>
                            <Col sm={6} lg={6}>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container className="text-center pt-5">
                                <p>서울시 구로구 가산동 1 8층</p>
                    <p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0
                        Copyright &copy;
                        All rights reserved | This template is made with by
                        <a href="https://colorlib.com" target="#">Colorlib</a>
                    </p>
                </Container>
            </div>
        </footer>
    )
};

export default Footer;