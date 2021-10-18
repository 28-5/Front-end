import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isCartVisible: false,
        notification: null,
        notificationVisible: false,
    },
    reducers: {
        toggle(state){
            state.isCartVisible = !state.isCartVisible;
        },
        showNotification(state, action){
          state.notification = {
            status: action.payload.status,
            title: action.payload.title,
            message: action.payload.message,
          };
        },
        notificationVisible(state, action){
          state.notificationVisible = action.payload;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;