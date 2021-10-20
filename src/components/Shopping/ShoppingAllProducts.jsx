import ProductCardList from "./Product/ProductCardList";
import React from "react";
import {useSelector} from "react-redux";
import LoaddingSpinner from "../UI/LoaddingSpinner";

const ShoppingAllProducts = () => {
    const allItems        =   [];
    const allItemsRedeux  =   useSelector(state => state.product.items);

    if(allItemsRedeux.length > 1){
        for (let a = 0 ; a < 3 ; a++){
            allItemsRedeux[a].forEach(item => {
                allItems.push(item);
            });
        }
    }
    return(
        <>
            {allItemsRedeux.length < 1 && <LoaddingSpinner color="#00BFFF" height={100} width={100}/>}
            <ProductCardList data={allItems} categorizedData={allItemsRedeux}/>
        </>
    );
};
export default ShoppingAllProducts;