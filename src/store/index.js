import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";
import productSlice from "./product-slice";
import tokenSlice from "./token-slice";
import orderSlice from "./order-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
        product: productSlice.reducer,
        token: tokenSlice.reducer,
        order: orderSlice.reducer,
    },
});

export default  store;
