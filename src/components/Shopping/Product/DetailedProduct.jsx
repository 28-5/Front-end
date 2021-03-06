import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Breadcrumb from "./Breadcrumb";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AmountSelect from "./AmountSelect";
import Typography from "@material-ui/core/Typography";
import DetailedProductContent from "./DetailedProductContent";
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from "../../../store/cart-slice";

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
        fontFamily: "twayair",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    buyBtn:{
        width: "50%",
        fontFamily: "twayair",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
}));
const DetailedProduct = (props) => {
    const classes                               = useStyles();
    const dispatch                              = useDispatch();
    const [selectedAmount, setSelectedAmount]   = useState(1);
    const location                              = useLocation();
    const { data }                              = location.state;
    const today                                 = new Date();
    const month                                 = today.getMonth() + 1;  // ???
    const date                                  = today.getDate()+2;  // ??????
    const addToCartHandler = () =>{
        dispatch(cartActions.addItem({
            productIdx: data.idx,
            title: data.title,
            price:data.price,
            quantity: selectedAmount,
            img: data.imageDtoList[0].imageURL,
        }));
    };
    useEffect(() => {
        window.scrollTo(0,100);
    }, []);
    return(
        <section className={classes.shoppingMainSection}>
            <Container maxWidth="lg">
                <Breadcrumb showPath={data.brand} />
                <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.gridContainer}>
                    <Grid item sm={12} md={6} >
                        <img src={"/display?fileName="+data.imageDtoList[0].imageURL} className={classes.productImg} alt="productImg"/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div className={classes.detailedProductInfoTitleDiv}>
                            <Typography variant="h5" className={classes.infoTitle}>{data.brand}</Typography>
                            <Typography variant="h5" className={classes.infoTitle}>{data.title}</Typography>
                        {/*<hr className={classes.hr}/>*/}
                            <Typography variant="h5" className={classes.infoPrice}>{data.price.toLocaleString('ko-KR')} ???</Typography>
                        <hr className={classes.hr}/>
                        </div>
                        <Typography variant="h5" className={classes.cardTitle}>???????????????</Typography>
                        {/*<Typography variant="h5" className={classes.cardPrice}>{(stringNumberToNumber(data.price)*0.9).toLocaleString('ko-KR')} ???</Typography>*/}
                        <Typography variant="h5" className={classes.cardPrice}>{(data.price*0.9).toLocaleString('ko-KR')} ???</Typography>
                        <hr className={classes.hr}/>

                        <Typography variant="h5" className={classes.deliveryTitle}>????????????</Typography>
                        <Typography variant="h5" className={classes.deliveryDate}>{month + "??? " + date}?????? ??????</Typography><br/>
                        <Typography variant="h5" className={classes.deliveryTitle}>?????????</Typography>
                        <Typography variant="h5" className={classes.deliveryFee}>????????????</Typography>

                        <hr className={classes.hr}/>
                        <AmountSelect setAmount={setSelectedAmount} minimumAmount={selectedAmount}/>
                        <div className={classes.btnDiv}>
                        <Button variant="contained" color="secondary" onClick={addToCartHandler} className={classes.cartBtn} startIcon={<ShoppingCartIcon>send</ShoppingCartIcon>}>
                                ???????????? ??????
                        </Button>
                        <Button variant="contained" color="primary" className={classes.buyBtn} component={Link} to={"/shop/order"} startIcon={<LocalShippingIcon>send</LocalShippingIcon>}                        >
                                ????????????
                        </Button>
                        </div>
                    </Grid>
                </Grid>
                <DetailedProductContent idx={data.idx}/>
            </Container>
        </section>
    );
}

export default DetailedProduct;