import {createSlice} from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        tokenPrice: 0,
    },
    reducers: {
        updateTokenPrice(state, action){
            state.tokenPrice = action.payload;
        },
    },
});

export const tokenPriceActions = tokenSlice.actions;
export default tokenSlice;