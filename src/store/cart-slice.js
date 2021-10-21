import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice:0,
        changed: false,
        clear: false,
    },
    reducers: {
        replaceCart(state, action){
            state.items             = action.payload.items;
            for(let a = 0; a < action.payload.items.length; a++){
                state.totalPrice        += action.payload.items[a].totalPrice;
                state.totalQuantity     += action.payload.items[a].quantity;
            }
        },
        addItem(state, action){
            const newItem           = action.payload;
            const existingItem      = state.items.find(item => item.productIdx === newItem.productIdx);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    productIdx: newItem.productIdx,
                    title: newItem.title,
                    img: newItem.imageDtoList,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                });
                state.totalPrice += newItem.price;
            }else{
                existingItem.quantity = existingItem.quantity + newItem.quantity;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                state.totalPrice += existingItem.price;
            }
            state.changed       = true;
        },
        addOneItem(state, action){
            const newItem           = action.payload;
            const existingItem      = state.items.find(item => item.productIdx === newItem.productIdx);
            state.totalQuantity++;
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            state.totalPrice += existingItem.price;
            state.changed           = true;
        },
        removeItem(state, action){
            const id            = action.payload;
            const existingItem  = state.items.find(item => item.productIdx === id);
            state.totalQuantity--;

            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.productIdx !== id);
                state.totalPrice -= existingItem.price;
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                state.totalPrice -= existingItem.price;
            }
            state.changed       = true;
        },
        cleanCart(state){
            state.items = [];
            state.totalQuantity= 0;
            state.totalPrice = 0;
            state.clear = true;
        }
        //a next reducer comes here
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;