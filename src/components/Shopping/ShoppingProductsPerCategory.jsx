import React from "react";
import {useSelector} from "react-redux";
import LoaddingSpinner from "../UI/LoaddingSpinner";
import {useLocation} from "react-router-dom";
import ProductCardListPerCategory from "./Product/ProductCardListPerCategory";

const ShoppingProductsPerCategory = () => {
    const allItemsRedeux  =   useSelector(state => state.product.items);
    const location        = useLocation();
    const categoryNum     = location.pathname.slice(15);
    return(
        <>
            {allItemsRedeux.length < 1 && <LoaddingSpinner color="#00BFFF" height={100} width={100}/>}
            <ProductCardListPerCategory data={allItemsRedeux[categoryNum]} />
        </>
    );
};
export default ShoppingProductsPerCategory;