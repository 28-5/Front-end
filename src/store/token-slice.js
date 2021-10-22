import {createSlice} from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        tokenPrice: null,
    },
    reducers: {
        updateTokenPrice(state, action){
            console.log(action.payload);
            state.tokenPrice         = action.payload.price;
        },
    },
});

export const tokenPriceActions = tokenSlice.actions;
export default tokenSlice;