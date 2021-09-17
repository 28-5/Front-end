import { Route } from "react-router-dom";
import React from "react";
import ShoppingMain from "./ShoppingMain";
import DetailedProduct from "./Product/DetailedProduct";

const ShoppingRouter = ({match}) => {

    return(
        <>
            <Route exact path={match.path} component={ShoppingMain}/>
            <Route path={`${match.path}/product/:productNum`} component={DetailedProduct}/>
        </>
    );

};

export default ShoppingRouter;