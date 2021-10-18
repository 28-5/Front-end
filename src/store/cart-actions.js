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
            const data = (await response).data;
            console.log(data);
            return data;
        };
        try{
            const cartData = await getData();
            console.log(cartData);
            dispatch(cartActions.replaceCart({
                //이부분 다시 확인
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0,
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
        const response = await axios.post("/carts", {
            // productIdx: 12,
            productIdx: cart.items[cart.items.length-1].id,
            quentity: cart.items[cart.items.length-1].quantity,
        });
        if(!response){
            throw new Error("카트에 담다가 손이 미끄러졌습니다!");
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

