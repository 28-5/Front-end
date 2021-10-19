import ShoppingCarousel from "./ShoppingCarousel";
import ProductCardList from "./Product/ProductCardList";
import React from "react";
import productData from "./Product/ProductData";
import ShoppingAds from "./ShoppingAds";

const ShoppingMain = (props) => {

    return(
        <>
            <ShoppingCarousel />
            <ShoppingAds/>
            {/*<ProductCardList data={productData}/>*/}
        </>
    );
};

export default ShoppingMain;