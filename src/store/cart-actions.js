import axios from "axios";
import {cartActions} from "./cart-slice";
import {uiActions} from "./ui-slice";

export const getCartData = () => {
    return async dispatch => {
        const getData = async() => {
            const response = axios.get("/carts");

            if(!response){
                throw new Error("카트 정보를 읽어올 수가 없습니다!");
            }
            const data = (await response).data.cartDtos;
            return data;
        };
        try{
            const cartData = await getData();
            dispatch(cartActions.replaceCart({
                items: cartData || [],
            }));
        }catch(error){
            dispatch(uiActions.showNotification({
                status:"error",
                title: "에러!",
                message:"카트 정보를 읽어오는데 실패하였습니다!"
            }));
            console.log(error);
        }
    }
};

export const sendCartData = cart => {
    return async dispatch => {
        dispatch(uiActions.showNotification({
            status:"Pending",
            title: "담는중...",
            message:"카트에 담는중!"
        }));
        dispatch(uiActions.notificationVisible(true));
    const sendRequest = async () => {
        const getData = async() => {
            const response = axios.get("/carts");

            if(!response){
                throw new Error("카트 정보를 읽어올 수가 없습니다!");
            }
            const data = (await response).data.cartDtos;
            return data;
        };
        const cartData = await getData();


        const existingItem = cartData.find(i => {
            return i.productIdx === cart.items[cart.items.length-1].productIdx;
        });
        if(!existingItem){
            const response = await axios.post("/carts", {
                productIdx: cart.items[cart.items.length-1].productIdx,
                quantity: cart.items[cart.items.length-1].quantity,
            });
            if(!response){
                throw new Error("카트에 담다가 손이 미끄러졌습니다!");
            }

        }else{
            const response = await axios.put("/carts/"+existingItem.cartIdx+"?quentity="+cart.items[cart.items.length-1].quantity);
            if(!response){
                throw new Error("카트에 담다가 손이 미끄러졌습니다!");
            }
        }
    }
    try{
        await sendRequest();
        dispatch(uiActions.showNotification({
            status:"Success",
            title: "담기 성공!",
            message:"카트에 성공적으로 담았습니다!!"
        }));
        dispatch(uiActions.notificationVisible(true));
    }catch(error){
        dispatch(uiActions.showNotification({
            status:"Error",
            title: "어이쿠!",
            message:"카트에 담다가 손이 미끄러졌습니다!!"
        }));
        dispatch(uiActions.notificationVisible(true));
    }
    };
}


export const clearCartData = cart => {
    return async dispatch => {
        dispatch(uiActions.showNotification({
            status:"Pending",
            title: "비우는중...",
            message:"카트를 비우고 있습니다."
        }));
        dispatch(uiActions.notificationVisible(true));
        const clearRequest = async () => {
            const getData = async() => {
                const response = axios.get("/carts");

                if(!response){
                    throw new Error("카트 정보를 읽어올 수가 없습니다!");
                }
                const data = (await response).data.cartDtos;
                return data;
            };
            const cartData = await getData();
            let idxList    = [];

            if(cartData.length < 1){
                return;
            }else{
                for(let a = 0; a < cartData.length; a++){
                    idxList.push(cartData[a].cartIdx);
                }
                for(let a = 0; a < idxList.length; a++){
                    const response = await axios.delete("/carts/"+idxList[a]);
                    if(!response){
                        throw new Error("카트를 비우다가 미끄러졌습니다!");
                    }
                }
            }
        }
        try{
            await clearRequest();
            dispatch(uiActions.showNotification({
                status:"Success",
                title: "비우기 성공!",
                message:"카트를 성공적으로 비웠습니다!!"
            }));
            dispatch(uiActions.notificationVisible(true));
        }catch(error){
            dispatch(uiActions.showNotification({
                status:"Error",
                title: "어이쿠!",
                message:"카트를 비우다가 실수했습니다!!"
            }));
            dispatch(uiActions.notificationVisible(true));
        }
    };
}