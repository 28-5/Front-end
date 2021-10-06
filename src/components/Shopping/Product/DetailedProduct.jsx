import ShoppingTopNav from "../ShoppingTopNav";
import ShoppingNavbar from "../../Navbar/ShoppingNavbar";
import React, {useContext, useState} from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Breadcrumb from "./Breadcrumb";
import ProductData from "./ProductData"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AmountSelect from "./AmountSelect";
import Cart from "../Cart/Cart";
import Footer from "../../Main/Footer";
import CartContext from "../../../store/Cart-context";
import Typography from "@material-ui/core/Typography";
import DetailedProductContent from "./DetailedProductContent";

const useStyles = makeStyles((theme) => ({
    shoppingMainSection:{
        backgroundColor: "#fff"
    },
    gridContainer:{
      marginTop: 20
    },
    productImg:{
        width: "500px",
        height: "500px",
    },
    detailedProductInfoTitleDiv:{
        // marginBottom: 90
    },
    infoTitle:{
        fontSize: "24px",
        fontFamily: "twayair",
        fontWeight: 700,
        color: "#222222",
    },
    infoStar:{
        fontSize: 20,
        marginLeft: -4,
        color: "#222222",
    },
    infoPrice:{
        paddingTop: 20,
        fontSize: "40px",
        fontFamily: "twayair",
        fontWeight: 400,
        color: "#222222",
    },
    cardTitle:{
        fontSize: "20px",
        fontFamily: "twayair",
        fontWeight: 400,
        display:"inline-block",
        color: "#222222",
    },
    cardPrice:{
        fontSize: "20px",
        fontFamily: "twayair",
        fontWeight: 400,
        color: "#ff5b59",
        display:"inline-block",
        paddingLeft: 75,
    },
    deliveryTitle:{
        color: "#222222",
        fontSize: "18px",
        fontFamily: "twayair",
        fontWeight: 400,
        display:"inline-block",
    },
    deliveryDate:{
        color: "#222222",
        fontSize: "18px",
        paddingLeft: 100,
        fontFamily: "twayair",
        fontWeight: 400,
        display:"inline-block",
    },
    deliveryFee:{
        paddingTop: 15,
        color: "#222222",
        fontSize: "18px",
        paddingLeft: 115,
        fontFamily: "twayair",
        fontWeight: 400,
        display:"inline-block",
    },
    btnDiv:{
      marginTop: 160,
      textAlign: "center",

      [theme.breakpoints.down('sm')]: {
        marginTop: 100,
        },
    },
    cartBtn:{
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    buyBtn:{
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
}));
function stringNumberToNumber(num){
    return parseInt(num.replace(/,/g , ''));
}

const DetailedProduct = (props) => {
    const classes = useStyles();
    const cartCtx = useContext(CartContext);
    const [selectedAmount, setSelectedAmount]   =   useState(1);

    //Database 연결해야 하는 부분?
    const data = ProductData;
    const productNumber = props.match.params.productNum;
    const productInfo = data.filter(d => {
        return d.product_id === productNumber;
    });
    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id: productInfo[0].product_id,
            title: productInfo[0].title,
            price: stringNumberToNumber(productInfo[0].price),
            img: productInfo[0].img,
            amount: selectedAmount,
        });
    };

    return(
        <section className={classes.shoppingMainSection}>
            <ShoppingTopNav/>
            <Container maxWidth="lg">
                <ShoppingNavbar />
                <Breadcrumb showPath={productNumber} />
                <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.gridContainer}>
                    <Grid item sm={12} md={6} >
                        <img src={productInfo[0].img} className={classes.productImg} alt="productImg"/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div className={classes.detailedProductInfoTitleDiv}>
                            <Typography variant="h5" className={classes.infoTitle}>{productInfo[0].title}</Typography>
                            <Typography variant="h5" className={classes.infoStar}>{productInfo[0].star}</Typography>
                        {/*<hr className={classes.hr}/>*/}
                            <Typography variant="h5" className={classes.infoPrice}>{productInfo[0].price} 원</Typography>
                        <hr className={classes.hr}/>
                        </div>
                        <Typography variant="h5" className={classes.cardTitle}>카드혜택가</Typography>
                        <Typography variant="h5" className={classes.cardPrice}>{(stringNumberToNumber(productInfo[0].price)*0.9).toLocaleString('ko-KR')} 원</Typography>
                        <hr className={classes.hr}/>

                        <Typography variant="h5" className={classes.deliveryTitle}>배송정보</Typography>
                        <Typography variant="h5" className={classes.deliveryDate}>9월 20일 도착 예정</Typography><br/>
                        <Typography variant="h5" className={classes.deliveryTitle}>배송비</Typography>
                        <Typography variant="h5" className={classes.deliveryFee}>배송무료</Typography>

                        <hr className={classes.hr}/>
                        <AmountSelect setAmount={setSelectedAmount} minimumAmount={selectedAmount}/>
                        <div className={classes.btnDiv}>
                        <Button variant="contained" color="secondary" onClick={addToCartHandler} className={classes.cartBtn} startIcon={<ShoppingCartIcon>send</ShoppingCartIcon>}>
                                장바구니 담기
                        </Button>
                        <Button variant="contained" color="primary" className={classes.buyBtn} startIcon={<LocalShippingIcon>send</LocalShippingIcon>}                        >
                                구매하기
                        </Button>
                        </div>
                    </Grid>
                        {props.isShown && <Cart onClose={props.closeCart} isOpen={props.isShown} data={productInfo[0]}/>}
                </Grid>
                <DetailedProductContent/>
            </Container>
            <Footer />
        </section>
    );
}

export default DetailedProduct;