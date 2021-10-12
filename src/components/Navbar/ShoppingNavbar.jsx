import React, {useContext, useState} from 'react';
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
import Container from "@material-ui/core/Container";
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

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        marginLeft: theme.spacing(0),
        paddingLeft:0,
    },
    appBar:{
        backgroundColor:"#fff",
        color: "black",
        boxShadow: "none",
        width:"1245px",
        [theme.breakpoints.down('md')]: {
            width:"100%",
        },
    },
    toolBar:{
        paddingLeft:0,

    },
    menuContainer:{
        [theme.breakpoints.down('sm')]: {
            display:"none",
        },
    },
    menuButton: {
        paddingLeft: 0,
        marginRight: theme.spacing(2),

    },
    title: {
        display: 'none',
        fontSize: 24,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            width: 'auto',
        },
        [theme.breakpoints.down('md')]: {
            position:"relative",
            float:"center",
            textAlign:"center",
            justifyContent: "center",
            alignItems: "center"
        },

    },
    searchInput:{
        width:"18rem",
        [theme.breakpoints.down('md')]: {
            width: "20rem"
        },
        [theme.breakpoints.down('sm')]: {
            width: "15rem"
        },
        [theme.breakpoints.down('xs')]: {
            width: "9rem"
        },
    },

    cartIcon:{
      fontSize:35,
        marginLeft:20,
    },
    accountIcon:{
      fontSize:35
    },
    menuIcon:{
      fontSize:35
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    mobileMenu:{
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display:"flex",
        },
    },
}));

const ShoppingNavbar = (props) => {
    const classes                                         = useStyles();
    const dispatch                                        = useDispatch();
    const numberOfCartItems                               = useSelector(state => state.cart.totalQuantity);
    const isAuth                                          = useSelector(state => state.auth.isAuthenticated);
    const [anchorEl, setAnchorEl]                         = useState(null);
    const [mobileAnchorEl, setMobileAnchorEl]             = useState(null);
    const [isButtonOpened, setisButtonOpened]             = useState(null);
    const [isMobileButtonOpened, setisMobileButtonOpened] = useState(null);
    // const numberOfCartItems                               = cartCtx.items.reduce((curNum, item) => {
    //     return curNum + item.amount;
    // }, 0);
    const showCart = useSelector(state => state.ui.isCartVisible);

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
        <Container maxWidth="lg" className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                        <div className={classes.menuContainer}>
                            <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} onClick={handleClick}>
                                <Typography className={classes.title} variant="h6" noWrap>
                                    전체 카테고리
                                </Typography>
                            </Button>
                            <Menu id="simple-menu" anchorEl={isButtonOpened} keepMounted open={Boolean(isButtonOpened)} onClose={handleClose}>
                                <MenuItem onClick={handleMenuClose}>베스트</MenuItem>
                                <MenuItem onClick={handleMenuClose}>주문조회</MenuItem>
                                <MenuItem onClick={handleMenuClose}>마이페이지</MenuItem>
                                <MenuItem onClick={handleMenuClose}>공지사항</MenuItem>
                            </Menu>
                            <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} component={Link} to="/">
                                <Typography className={classes.title} variant="h6" noWrap>
                                    베스트
                                </Typography>
                            </Button>
                            <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} component={Link} to="/">
                                <Typography className={classes.title} variant="h6" noWrap>
                                    주문조회
                                </Typography>
                            </Button>
                            <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} component={Link} to="/mypage">
                                <Typography className={classes.title} variant="h6" noWrap>
                                    마이페이지
                                </Typography>
                            </Button>
                            <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} component={Link} to="/notice">
                                <Typography className={classes.title} variant="h6" noWrap>
                                    공지사항
                                </Typography>
                            </Button>
                        </div>

                    {/*-----모바일-----*/}
                    <div className={classes.mobileMenu}>
                        <IconButton onClick={mobileHandleClick} color="inherit">
                            <MenuIcon className={classes.menuIcon}/>
                        </IconButton>
                        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(isMobileButtonOpened)} onClose={mobileHandleClose}  getContentAnchorEl={null}
                              anchorOrigin={{ vertical: 145, horizontal: 80 }}>
                            <MenuItem onClick={mobileHandleMenuClose}>전체 카테고리</MenuItem>
                            <MenuItem onClick={mobileHandleMenuClose}>베스트</MenuItem>
                            <MenuItem onClick={mobileHandleMenuClose}>주문조회</MenuItem>
                            <MenuItem onClick={mobileHandleMenuClose}>마이페이지</MenuItem>
                            <MenuItem onClick={mobileHandleMenuClose}>공지사항</MenuItem>
                        </Menu>
                    </div>
                    <div className={classes.search}>
                        <Input id="standard-basic" className={classes.searchInput} label="Standard" startAdornment={( <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>)}/>
                    </div>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit" onClick={showCartHandler}>
                            <Badge badgeContent={numberOfCartItems} color="secondary">
                                <ShoppingCartIcon className={classes.cartIcon} />
                            </Badge>
                        </IconButton>
                        <IconButton edge="end" onClick={handleProfileMenuOpen} color="inherit">
                            <AccountCircle className={classes.accountIcon}/>
                        </IconButton>
                        {isAuth === true?
                        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/mypage">프로필 보기</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/mypage">개인정보 수정</MenuItem>
                            <MenuItem onClick={handleMenuCloseLogout}>로그아웃</MenuItem>
                        </Menu>
                        :<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/member/login">로그인</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/member/register">회원가입</MenuItem>
                            </Menu>
                        }
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton aria-label="show 4 new mails" color="inherit" onClick={showCartHandler}>
                            <Badge badgeContent={numberOfCartItems} color="secondary">
                                <ShoppingCartIcon className={classes.cartIcon} />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={mobileHandleProfileMenuOpen} color="inherit">
                            <MoreIcon />
                        </IconButton>
                        {isAuth === true?
                        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(mobileAnchorEl)} onClose={mobileHandleMenuClose} getContentAnchorEl={null}
                              anchorOrigin={{ vertical: 150, horizontal: 500 }}>
                            <MenuItem onClick={mobileHandleMenuClose} component={Link} to="/mypage">프로필 보기</MenuItem>
                            <MenuItem onClick={mobileHandleMenuClose} component={Link} to="/mypage">개인정보 수정</MenuItem>
                            <MenuItem onClick={handleMenuCloseLogout}>로그아웃</MenuItem>
                        </Menu>
                        :
                        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(mobileAnchorEl)} onClose={mobileHandleMenuClose} getContentAnchorEl={null}
                              anchorOrigin={{ vertical: 150, horizontal: 500 }}>
                            <MenuItem onClick={mobileHandleMenuClose} component={Link} to="/member/login">로그인</MenuItem>
                            <MenuItem onClick={mobileHandleMenuClose} component={Link} to="/member/register">회원가입</MenuItem>
                        </Menu>
                        }

                    </div>
                </Toolbar>
            </AppBar>
            {showCart && <Cart onClose={hideCartHandler} isOpen={showCart}/>}
        </Container>
    );
}

export default ShoppingNavbar;