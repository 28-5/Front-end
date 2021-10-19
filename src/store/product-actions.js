import axios from "axios";
import {productActions} from "./product-slice";

export const getProductdata = () =>{
    return async dispatch => {
        //1, 2, 3번은 상위 카테고리임.
        //data 배열의 0~2번은 상위카테고리이기 때문에 거기에 해당하는 제품들이 다시 3~16번에 나타남.
        const getData = async () =>{
            let data = [];
            for (let a = 1; a < 17 ; a++){
                const response = axios.get("/categories/"+a+"/products");
                if(!response){
                    throw new Error("Could not get product data!");
                }

                data.push((await response).data.dtoList);
            }
            return data;
        };
        try{
            const productData = await getData();
            console.log(productData);
            dispatch(productActions.updateProductList({
                items: productData || null
            }));
        }catch(error){
            console.log(error.request);
            console.log(error.response);
            console.log(error.response.message);
        }
    }
};