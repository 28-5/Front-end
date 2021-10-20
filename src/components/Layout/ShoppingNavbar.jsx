import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import Cart from "../Shopping/Cart/Cart";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";
import {authActions} from "../../store/auth-slice";
import "./ShoppingNavbar.css";
import Col from "react-bootstrap/Col";

const ShoppingNavbar = (props) => {
    const dispatch                                        = useDispatch();
    const numberOfCartItems                               = useSelector(state => state.cart.totalQuantity);
    const isAuth                                          = useSelector(state => state.auth.isAuthenticated);
    const userEmail                                       = useSelector(state => state.auth.userEmail);
    const showCart                                        = useSelector(state => state.ui.isCartVisible);
    const [anchorEl, setAnchorEl]                         = useState(null);
    const [isButtonOpened, setisButtonOpened]             = useState(null);
    const showCartHandler = () => {
        dispatch(uiActions.toggle());
    };
    const hideCartHandler = ()=>{
        dispatch(uiActions.toggle());
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuCloseLogout = () => {
        dispatch(authActions.logout());
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setisButtonOpened(event.currentTarget);
    };
    const handleClose = () => {
        setisButtonOpened(null);
    };
    return (
            <>
                <div className="search-model">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch">+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....."/>
                        </form>
                    </div>
                </div>
                <header className="header-section">
                    <Container fluid>
                        <div className="inner-header">
                            <div className="logo">
                                <Link to="/shop"><img src="/img/logo/logo.png" alt="logo"/></Link>
                            </div>
                            <div className="header-right">
                                <img src="/img/icons/search.png" alt="searchImg" className="search-trigger"/>
                                <img src="/img/icons/man.png" alt="accountImg" onClick={handleClick}/>
                                <Menu id="simple-menu" anchorEl={isButtonOpened} keepMounted open={Boolean(isButtonOpened)} onClick={handleClose}>
                                   <MenuItem onClick={handleMenuClose} component={Link} to="/mypage">프로필</MenuItem>
                                   <MenuItem onClick={handleMenuClose} component={Link} to="/mypage">개인정보수정</MenuItem>
                                    {isAuth && <MenuItem onClick={handleMenuCloseLogout}>로그아웃</MenuItem>}
                                </Menu>
                                <IconButton aria-label="show 4 new mails" color="inherit" onClick={showCartHandler}>
                                    <Badge badgeContent={numberOfCartItems} color="secondary">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </div>
                            {isAuth === false ? <div className="user-access">
                                <Link to={"/member/register"}>회원가입</Link>
                                <Link to={"/member/login"} className={"in"}>로그인</Link>
                            </div>:
                            <div className="user-access">
                                <a>{userEmail}</a>
                            </div>}
                            <Navbar className={isAuth === false? "main-menu" : "main-menu auth"}>
                                <ul>
                                    <li><Link to={"/shop/allproducts"} >전체상품</Link></li>
                                    <li><Link to={"/shop"}>카테고리</Link>
                                        <ul className="sub-menu">
                                            <li><a href="product-page.html">골프클럽</a></li>
                                                <li className="sub-category-menu"><Link to="#">드라이버</Link></li>
                                                <li className="sub-category-menu"><Link to="#">우드</Link></li>
                                                <li className="sub-category-menu"><Link to="#">아이언</Link></li>
                                                <li className="sub-category-menu"><Link to="#">풀세트</Link></li>
                                            <li><a href="shopping-cart.html">골프용품</a></li>
                                                <li className="sub-category-menu"><Link to="#">골프공</Link></li>
                                                <li className="sub-category-menu"><Link to="#">골프가방</Link></li>
                                                <li className="sub-category-menu"><Link to="#">골프장갑</Link></li>
                                                <li className="sub-category-menu"><Link to="#">골프모자</Link></li>
                                                <li className="sub-category-menu"><Link to="#">골프화</Link></li>
                                            <li><a href="check-out.html">골프웨어</a></li>
                                                <li className="sub-category-menu"><Link to="#">아우터</Link></li>
                                                <li className="sub-category-menu"><Link to="#">상의</Link></li>
                                                <li className="sub-category-menu"><Link to="#">하의</Link></li>
                                                <li className="sub-category-menu"><Link to="#">양말</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={""}>주문조회</Link></li>
                                    <li><Link to={"/notices"}>공지사항</Link>
                                        <ul className="sub-menu submenuBoard">
                                            <li><Link to="/notices">공지사항</Link></li>
                                            <li><Link to="/qnas">Q&A</Link></li>
                                            <li><Link to="/service/request">물품 픽업 신청</Link></li>
                                            <li><Link to="/service/seller/request">제품 등록</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={"/introduction"}>회사소개</Link>
                                        <ul className="sub-menu submenuBoard">
                                            <li><Link to="/introduction/team">팀</Link></li>
                                            <li><Link to="/qnas">사업</Link></li>
                                            <li><Link to="/introduction/business">토큰</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </Navbar>
                            <Navbar className="mobile-menu">
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
                        </div>
                    </Container>
                    {showCart && <Cart onClose={hideCartHandler} isOpen={showCart}/>}
                </header>
                <div className="header-info">
                    <Container fluid="lg">
                        <Row>
                            <Col md={4}>
                                <div className="header-item">
                                    <img src="/img/icons/delivery.png" alt=""/>
                                    <p>국내 배송 2,500원 및 도서지역 3,000원</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-left text-lg-center">
                                <div className="header-item">
                                    <img src="/img/icons/voucher.png" alt=""/>
                                    <p>리본 토큰 최대 20% 사용 가능</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-left text-xl-right">
                                <div className="header-item">
                                    <img src="/img/icons/sales.png" alt=""/>
                                    <p>무상 A/S 서비스 1년 제공</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
    );
}

export default ShoppingNavbar;