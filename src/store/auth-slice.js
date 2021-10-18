import {createSlice} from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        userEmail: null,
    },
    reducers:{
        login(state, action){
            state.isAuthenticated = true;
            localStorage.setItem("jwt", action.payload.token);
            state.userEmail       = action.payload.email;
        },
        logout(state){
            localStorage.removeItem("jwt");
            state.isAuthenticated = false;
            state.userEmail       = null;
        },
        auth(state){
            state.isAuthenticated = true;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;