import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel'
import {Link} from "react-router-dom";
import React from "react";
import "./Test.css";

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
                <Container fluid="lg">
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
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/carousel/img1.jpg" alt="First slide"/>
                    <Carousel.Caption>
                        <h3>2021</h3>
                        <p>REBORN</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/carousel/img2.jpg" alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>2021</h3>
                        <p>REBORN</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/carousel/img3.jpg" alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>2021</h3>
                        <p>REBORN</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/carousel/img4.jpg" alt="Fourth slide"/>
                    <Carousel.Caption>
                        <h3>2021</h3>
                        <p>REBORN</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/carousel/img5.jpg" alt="Fifth slide"/>
                    <Carousel.Caption>
                        <h3>2021</h3>
                        <p>REBORN</p>>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className="features-section spad">
                <Col className="features-box">
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className="single-box-item first-box">
                                            <img src="/img/ads/ads2.jpg" alt="ads3"/>
                                                <div className="box-text">
                                                    <span className="trend-year">2021</span>
                                                    <h2>미즈노</h2>
                                                    <span className="trend-alert">MP-20</span>
                                                </div>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="single-box-item second-box">
                                            <img src="/img/ads/ads3.jpg" alt="ads2"/>
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

            <section className="latest-products spad">
                <Container>
                    <div className="product-filter">
                        <Row>
                            <Col lg={12} className="text-center">
                                <div className="section-title">
                                    <h2>Latest Products</h2>
                                </div>
                                <ul className="product-controls">
                                    <li data-filter="*">All</li>
                                    <li data-filter=".dresses">Dresses</li>
                                    <li data-filter=".bags">Bags</li>
                                    <li data-filter=".shoes">Shoes</li>
                                    <li data-filter=".accesories">Accesories</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <Row className="row" id="product-list">
                        <Col lg={3} sm={6} className="mix all dresses bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="#"><img src="img/products/ball_callewayball.jpg" alt=""/></a>
                                    <div className="p-status">new</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Green Dress with details</h6>
                                    <p>$22.90</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="mix all dresses bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="#"><img src="img/products/img-2.jpg" alt=""/></a>
                                    <div className="p-status sale">sale</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Yellow Maxi Dress</h6>
                                    <p>$25.90</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="mix all shoes accesories">
                            <div className="single-product-item">
                                <figure>
                                    <a href="#"><img src="img/products/img-3.jpg" alt=""/></a>
                                    <div className="p-status">new</div>
                                </figure>
                                <div className="product-text">
                                    <h6>One piece bodysuit</h6>
                                    <p>$19.90</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="mix all shoes accesories">
                            <div className="single-product-item">
                                <figure>
                                    <a href="#"><img src="img/products/img-4.jpg" alt=""/></a>
                                    <div className="p-status popular">popular</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Blue Dress with details</h6>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="mix all dresses shoes">
                            <div className="single-product-item">
                                <figure>
                                    <a href="#"><img src="img/products/img-5.jpg" alt=""/></a>
                                    <div className="p-status">new</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Green Dress with details</h6>
                                    <p>$22.90</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="mix all accesories bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="#"><img src="img/products/img-6.jpg" alt=""/></a>
                                    <div className="p-status sale">sale</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Yellow Maxi Dress</h6>
                                    <p>$25.90</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="mix all dresses bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="#"><img src="img/products/img-7.jpg" alt=""/></a>
                                </figure>
                                <div className="product-text">
                                    <h6>One piece bodysuit</h6>
                                    <p>$19.90</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="mix all accesories bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="#"><img src="img/products/img-8.jpg" alt=""/></a>
                                    <div className="p-status popular">popular</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Blue Dress with details</h6>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



                <footer className="footer-section spad">
                    <Container>
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
                                            <li><Link to={"/introduction"}>주문조회</Link></li>
                                            <li><Link to={"/introduction"}>리본</Link></li>
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
                                    <Col sm={6} lg={6}>
                                        <Link to="/company" >메인</Link>
                                        <Link to="#" >이용약관</Link>
                                        <Link to="#" >개인정보처리방침</Link>
                                        <Link to="#" >Contact Us</Link>
                                    </Col>
                                    <Col sm={6} lg={6}>
                                    </Col>
                                </Row>
                            </div>
                        </Container>

                        <Container className="text-center pt-5">
                            <p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0
                                Copyright &copy;
                                All rights reserved | This template is made with <i className="icon-heart color-danger"
                                                                                    aria-hidden="true"></i> by <a
                                    href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </Container>


                    </div>
                </footer>
        </>
    )

}

export default Test;