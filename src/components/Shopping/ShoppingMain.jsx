import ShoppingCarousel from "./ShoppingCarousel";
import ProductCardList from "./Product/ProductCardList";
import React, {useEffect} from "react";
import ShoppingAds from "./ShoppingAds";
import {useSelector} from "react-redux";

const ShoppingMain = (props) => {
    const allItems        =   [];
    const allItemsRedeux  =   useSelector(state => state.product.items);

    if(allItemsRedeux.length > 0){
        for (let a = 0 ; a < 3 ; a++){
            allItemsRedeux[a].forEach(item => {
                allItems.push(item);
            });
        }
    }
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return(
        <>
            <ShoppingCarousel />
            <ShoppingAds/>
            <ProductCardList data={allItems} categorizedData={allItemsRedeux}/>
        </>
    );
};

export default ShoppingMain;