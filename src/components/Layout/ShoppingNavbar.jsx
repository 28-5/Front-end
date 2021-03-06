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
    const isManager                                       = useSelector(state => state.auth.admin);
    const userEmail                                       = useSelector(state => state.auth.email);
    const showCart                                        = useSelector(state => state.ui.isCartVisible);
    const tokenPrice                                      = useSelector(state => state.token.tokenPrice);
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
                                {isAuth ?
                                <Menu id="simple-menu" anchorEl={isButtonOpened} keepMounted open={Boolean(isButtonOpened)} onClick={handleClose}>
                                   <MenuItem onClick={handleMenuClose} component={Link} to="/mypage">?????????</MenuItem>
                                   <MenuItem onClick={handleMenuClose} component={Link} to="/mypage">??????????????????</MenuItem>
                                    {isManager&& <MenuItem onClick={handleMenuClose} component={Link} to="/admin">?????????</MenuItem>}
                                   <MenuItem onClick={handleMenuCloseLogout}>????????????</MenuItem>
                                </Menu>:
                                <Menu id="simple-menu" anchorEl={isButtonOpened} keepMounted open={Boolean(isButtonOpened)} onClick={handleClose}>
                                    <MenuItem onClick={handleMenuClose} component={Link} to="/member/login">?????????</MenuItem>
                                </Menu>}
                                <IconButton aria-label="show 4 new mails" color="inherit" onClick={showCartHandler}>
                                    <Badge badgeContent={numberOfCartItems} color="secondary">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </div>
                            {isAuth === false ? <div className="user-access">
                                <Link to={"/member/register"}>????????????</Link>
                                <Link to={"/member/login"} className={"in"}>?????????</Link>
                            </div>:
                            <div className="user-access">
                                <Link to={"/mypage"}>{userEmail}</Link>
                            </div>}
                            <Navbar className={isAuth === false? "main-menu" : "main-menu auth"}>
                                <ul>
                                    <li><Link to={"/shop/allproducts"} >????????????</Link></li>
                                    <li><Link to={"/shop"}>????????????</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/shop/category/0">????????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/3">????????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/4">??????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/5">?????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/6">?????????</Link></li>
                                            <li><Link to="/shop/category/1">????????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/7">?????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/8">????????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/9">????????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/10">????????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/11">?????????</Link></li>
                                            <li><Link to="/shop/category/2">????????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/12">?????????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/13">??????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/14">??????</Link></li>
                                                <li className="sub-category-menu"><Link to="/shop/category/15">??????</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={"/mypage/order/list"}>????????????</Link></li>
                                    <li><Link to={"/notices"}>????????????</Link>
                                        <ul className="sub-menu submenuBoard">
                                            <li><Link to="/notices">????????????</Link></li>
                                            <li><Link to="/qnas">Q&A</Link></li>
                                            <li><Link to="/service/request">?????? ?????? ??????</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={"/introduction"}>????????????</Link>
                                        <ul className="sub-menu submenuBoard">
                                            <li><Link to="/introduction/team">???</Link></li>
                                            <li><Link to="/qnas">??????</Link></li>
                                            <li><Link to="/introduction/business">??????</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </Navbar>
                            <Navbar className="mobile-menu">
                                <ul>
                                    <li><Link to={"/shop"} className={"active"}>??????</Link></li>
                                    <li><Link to={"/shop"}>????????????</Link>
                                        <ul className="sub-menu">
                                            <li><a href="product-page.html">?????? ????????????1</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">??????</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">??????</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">??????</a></li>
                                            <li className="sub-category-menu"><a href="product-page.html">??????</a></li>
                                            <li><a href="shopping-cart.html">?????? ????????????2</a></li>
                                            <li><a href="check-out.html">?????? ????????????3</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to={"/mypage/order/list"}>????????????</Link></li>
                                    <li><Link to={"/notices"}>????????????</Link></li>
                                    <li><Link to={"/introduction"}>????????????</Link></li>
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
                                    <p>?????? ?????? 2,500??? ??? ???????????? 3,000???</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-left text-lg-center">
                                <div className="header-item">
                                    <img src="/img/icons/voucher.png" alt=""/>
                                    <p>?????? ?????? ?????? 20% ?????? ??????</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-left text-xl-right">
                                <div className="header-item">
                                    <img src="/img/icons/sales.png" alt=""/>
                                    <p>?????? ?????? ??????: {tokenPrice}???</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
    );
}

export default ShoppingNavbar;