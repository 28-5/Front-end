import axios from "axios";
import {tokenPriceActions} from "./token-slice";

export const getTokenPrice = () =>{
    return async dispatch => {
        const getData = async () =>{
            const response = axios.get("/point");
            if(!response){
                throw new Error("Could not get product data!");
            }
            const data = (await response).data;
            return data;
        };
        try{
            const price = await getData();
            dispatch(tokenPriceActions.updateTokenPrice(price));
        }catch(error){
            console.log(error.request);
            console.log(error.response);
        }
    }
};