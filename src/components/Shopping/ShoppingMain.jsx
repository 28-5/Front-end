import ShoppingTopNav from "./ShoppingTopNav";
import ShoppingCarousel from "./ShoppingCarousel";
import ShoppingNavbar from "../Navbar/ShoppingNavbar";
import ProductCardList from "./Product/ProductCardList";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Container from "@material-ui/core/Container";
import productData from "./Product/ProductData";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    shoppingMainSection:{
        backgroundColor: "#fff"
    },
    bestTitle:{
        textAlign:"center",
        paddingTop: "40px",
        paddingBottom: "40px"
    }
}));

const ShoppingMain = ({match}) => {
    const classes = useStyles();
    return(
        <section className={classes.shoppingMainSection}>
            <ShoppingTopNav/>
            <Container maxWidth="lg">
                <ShoppingNavbar />
                <ShoppingCarousel />
                <Typography variant="h3" className={classes.bestTitle}>베스트 상품</Typography>
                <Grid container direction="row" justifyContent="center" alignItems="center"  >
                    <ProductCardList data={productData}/>
                </Grid>
            </Container>
        </section>
    );
};

export default ShoppingMain;