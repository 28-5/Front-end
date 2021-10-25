import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        finalPrice: 0,
    },
    reducers: {
        updateFinalPrice(state, action){
            state.finalPrice = action.payload;
        },
    },
});

export const orderActions = orderSlice.actions;
export default orderSlice;