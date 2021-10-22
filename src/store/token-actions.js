import axios from "axios";
import tokenPriceActions from "./token-slice";

export const getTokenPrice = () =>{
    return async dispatch => {
        //1, 2, 3번은 상위 카테고리임.
        //data 배열의 0~2번은 상위카테고리이기 때문에 거기에 해당하는 제품들이 다시 3~16번에 나타남.
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
            console.log(price);
            dispatch(tokenPriceActions.updateTokenPrice(price));
        }catch(error){
            console.log(error.request);
            console.log(error.response);
        }
    }
};