import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        items: [],
    },
    reducers: {
        updateProductList(state, action){
            state.items         = action.payload.items;
        },
        //a next reducer comes here
    },
});

export const productActions = productSlice.actions;
export default productSlice;