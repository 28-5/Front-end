import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
// import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
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
    const [mobileAnchorEl, setMobileAnchorEl]             = useState(null);
    const [isButtonOpened, setisButtonOpened]             = useState(null);
    const [isMobileButtonOpened, setisMobileButtonOpened] = useState(null);

    const showCartHandler = () => {
        dispatch(uiActions.toggle());
    };
    const hideCartHandler = ()=>{
        dispatch(uiActions.toggle());
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const mobileHandleProfileMenuOpen = (event) => {
        setMobileAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuCloseLogout = () => {
        dispatch(authActions.logout());
        setAnchorEl(null);
    };
    const mobileHandleMenuClose = () => {
        setMobileAnchorEl(null);
    };

    const handleClick = (event) => {
        setisButtonOpened(event.currentTarget);
    };
    const mobileHandleClick = (event) => {
        setisMobileButtonOpened(event.currentTarget);
    };

    const handleClose = () => {
        setisButtonOpened(null);
    };
    const mobileHandleClose = () => {
        setisMobileButtonOpened(null);
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
                                   <MenuItem onClick={handleMenuCloseLogout}>로그아웃</MenuItem>
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
                                    <li><Link to={"/shop"} >전체상품</Link></li>
                                    <li><Link to={"/shop"}>카테고리</Link>
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

        // <Container maxWidth="lg" className={classes.grow}>
        //     <AppBar position="static" className={classes.appBar}>
        //         <Toolbar className={classes.toolBar}>
        //                 <div className={classes.menuContainer}>
        //                     <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} onClick={handleClick}>
        //                         <Typography className={classes.title} variant="h6" noWrap>
        //                             전체 카테고리
        //                         </Typography>
        //                     </Button>
        //                     <Menu id="simple-menu" anchorEl={isButtonOpened} keepMounted open={Boolean(isButtonOpened)} onClick={handleClose}>
        //                         <MenuItem onClick={handleMenuClose}>베스트</MenuItem>
        //                         <MenuItem onClick={handleMenuClose}>주문조회</MenuItem>
        //                         <MenuItem onClick={handleMenuClose}>마이페이지</MenuItem>
        //                         <MenuItem onClick={handleMenuClose}>공지사항</MenuItem>
        //                     </Menu>
        //                     <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} component={Link} to="/">
        //                         <Typography className={classes.title} variant="h6" noWrap>
        //                             베스트
        //                         </Typography>
        //                     </Button>
        //                     <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} component={Link} to="/">
        //                         <Typography className={classes.title} variant="h6" noWrap>
        //                             주문조회
        //                         </Typography>
        //                     </Button>
        //                     <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} component={Link} to="/company">
        //                         <Typography className={classes.title} variant="h6" noWrap>
        //                             회사소개
        //                         </Typography>
        //                     </Button>
        //                     <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} component={Link} to="/notices">
        //                         <Typography className={classes.title} variant="h6" noWrap>
        //                             공지사항
        //                         </Typography>
        //                     </Button>
        //                 </div>

                    // {/*-----모바일-----*/}
            //         <div className={classes.mobileMenu}>
            //             <IconButton onClick={mobileHandleClick} color="inherit">
            //                 <MenuIcon className={classes.menuIcon}/>
            //             </IconButton>
            //             <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(isMobileButtonOpened)} onClose={mobileHandleClose}  getContentAnchorEl={null}
            //                   anchorOrigin={{ vertical: 145, horizontal: 80 }}>
            //                 <MenuItem onClick={mobileHandleMenuClose}>전체 카테고리</MenuItem>
            //                 <MenuItem onClick={mobileHandleMenuClose}>베스트</MenuItem>
            //                 <MenuItem onClick={mobileHandleMenuClose}>주문조회</MenuItem>
            //                 <MenuItem onClick={mobileHandleMenuClose}  component={Link} to="/company">회사소개</MenuItem>
            //                 <MenuItem onClick={mobileHandleMenuClose}  component={Link} to="/notices">공지사항</MenuItem>
            //             </Menu>
            //         </div>
            //         <div className={classes.search}>
            //             <Input id="standard-basic" className={classes.searchInput} label="Standard" startAdornment={( <InputAdornment position="start">
            //                 <SearchIcon/>
            //             </InputAdornment>)}/>
            //         </div>
            //
            //         <div className={classes.grow} />
            //
            //         <div className={classes.sectionDesktop}>
            //             <IconButton aria-label="show 4 new mails" color="inherit" onClick={showCartHandler}>
            //                 <Badge badgeContent={numberOfCartItems} color="secondary">
            //                     <ShoppingCartIcon className={classes.cartIcon} />
            //                 </Badge>
            //             </IconButton>
            //             <IconButton edge="end" onClick={handleProfileMenuOpen} color="inherit">
            //                 <AccountCircle className={classes.accountIcon}/>
            //             </IconButton>
            //             {isAuth === true?
            //             <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
            //                 <MenuItem onClick={handleMenuClose} component={Link} to="/mypage">프로필 보기</MenuItem>
            //                 <MenuItem onClick={handleMenuClose} component={Link} to="/mypage">개인정보 수정</MenuItem>
            //                 <MenuItem onClick={handleMenuCloseLogout}>로그아웃</MenuItem>
            //             </Menu>
            //             :<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
            //                     <MenuItem onClick={handleMenuClose} component={Link} to="/member/login">로그인</MenuItem>
            //                     <MenuItem onClick={handleMenuClose} component={Link} to="/member/register">회원가입</MenuItem>
            //                 </Menu>
            //             }
            //         </div>
            //
            //         <div className={classes.sectionMobile}>
            //             <IconButton aria-label="show 4 new mails" color="inherit" onClick={showCartHandler}>
            //                 <Badge badgeContent={numberOfCartItems} color="secondary">
            //                     <ShoppingCartIcon className={classes.cartIcon} />
            //                 </Badge>
            //             </IconButton>
            //             <IconButton onClick={mobileHandleProfileMenuOpen} color="inherit">
            //                 <MoreIcon />
            //             </IconButton>
            //             {isAuth === true?
            //             <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(mobileAnchorEl)} onClose={mobileHandleMenuClose} getContentAnchorEl={null}
            //                   anchorOrigin={{ vertical: 150, horizontal: 500 }}>
            //                 <MenuItem onClick={mobileHandleMenuClose} component={Link} to="/mypage">프로필 보기</MenuItem>
            //                 <MenuItem onClick={mobileHandleMenuClose} component={Link} to="/mypage">개인정보 수정</MenuItem>
            //                 <MenuItem onClick={handleMenuCloseLogout}>로그아웃</MenuItem>
            //             </Menu>
            //             :
            //             <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(mobileAnchorEl)} onClose={mobileHandleMenuClose} getContentAnchorEl={null}
            //                   anchorOrigin={{ vertical: 150, horizontal: 500 }}>
            //                 <MenuItem onClick={mobileHandleMenuClose} component={Link} to="/member/login">로그인</MenuItem>
            //                 <MenuItem onClick={mobileHandleMenuClose} component={Link} to="/member/register">회원가입</MenuItem>
            //             </Menu>
            //             }
            //
            //         </div>
            //     </Toolbar>
            // </AppBar>
            //
        // </Container>
    );
}

export default ShoppingNavbar;