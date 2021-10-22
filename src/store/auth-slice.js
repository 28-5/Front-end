import {createSlice} from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        idx: null,
        email: null,
        name: null,
        password: null,
        phone: null,
        address: null,
        tokenAmount: 0,
        walletAddress: null,
        admin: false,

    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            localStorage.setItem("jwt", action.payload.token);
            state.admin = action.payload.admin;
        },
        logout(state) {
            localStorage.removeItem("jwt");
            state.isAuthenticated = false;
            state.idx = null;
            state.email = null;
            state.name = null;
            state.password = null;
            state.phone = null;
            state.address = null;
            state.tokenAmount = 0;
            state.walletAddress = null;
            state.admin = false;
            window.location.replace("/");
        },
        auth(state, action) {
            state.isAuthenticated = true;
            state.idx = action.payload.idx;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.password = action.payload.password;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
            state.tokenAmount = action.payload.tokenAmount;
            state.walletAddress = action.payload.walletAddress;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;