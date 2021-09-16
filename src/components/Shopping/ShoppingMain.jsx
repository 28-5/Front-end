import ShoppingTopNav from "./ShoppingTopNav";
import ShoppingCarousel from "./ShoppingCarousel";
import ShoppingNavbar from "../Navbar/ShoppingNavbar";
import ProductCardList from "../Product/ProductCardList";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Container from "@material-ui/core/Container";

const ShoppingMain = () => {

    return(
        <>
            <ShoppingTopNav/>
            <ShoppingNavbar />
            <ShoppingCarousel />
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center" alignItems="center"  >
                    <ProductCardList />
                </Grid>
            </Container>
        </>
    );
};

export default ShoppingMain;