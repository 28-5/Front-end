import ShoppingTopNav from "../ShoppingTopNav";
import ShoppingNavbar from "../../Navbar/ShoppingNavbar";
import React, {useState} from "react";
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
import CartModal from "../Cart/CartModal";

const useStyles = makeStyles((theme) => ({
    shoppingMainSection:{
        backgroundColor: "#fff"
    },
    shoppingMainContainer:{
        border: "1px solid black"
    },
    bestTitle:{
        textAlign:"center",
        paddingTop: "40px"
    },
    productImg:{
        width: 500
    },
    gridDelivery:{
        display:"inline"
    },
}));


const DetailedProduct = ({match}) => {
    const classes = useStyles();
    const data = ProductData;
    const productNumer = match.params.productNum;
    const productInfo = data.filter(d => {
        return d.product_id === productNumer;
    });

    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = ()=>{
        setCartIsShown(true);
    };
    const hideCartHandler = ()=>{
        setCartIsShown(false);
    };

    return(
        <section className={classes.shoppingMainSection}>
            <ShoppingTopNav/>
            <Container maxWidth="lg" className={classes.shoppingMainContainer}>
                <ShoppingNavbar />
                <Breadcrumb showPath={productNumer} />
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Grid item sm={12} md={6} >
                        <img src={productInfo[0].img} className={classes.productImg} alt="productImg"/>
                    </Grid>
                    <Grid item sm={12} md={6} >
                        <div>
                            <h1>{productInfo[0].title}</h1>
                            <h1>{productInfo[0].price}</h1>
                            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</span>
                        </div>
                            <h1 className={classes.gridDelivery}>배송정보 </h1>
                            <h3 className={classes.gridDelivery}>9월 20일 도착 예정</h3>
                        <AmountSelect/>
                    </Grid>
                        <Grid item sm={12} md={6} >
                            <Button variant="contained" color="primary" onClick={showCartHandler} className={classes.button} startIcon={<ShoppingCartIcon>send</ShoppingCartIcon>}>
                                장바구니
                            </Button>
                            {cartIsShown && <Cart onClose={hideCartHandler} isOpen={cartIsShown} data={productInfo[0]}/>}
                        </Grid>
                        <Grid item sm={12} md={6} >
                            <Button variant="contained" color="primary" className={classes.button} startIcon={<LocalShippingIcon>send</LocalShippingIcon>}                        >
                                주문하기
                            </Button>
                        </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default DetailedProduct;