import axios from "axios";
import {productActions} from "./product-slice";

export const getProductdata = () =>{
    return async dispatch => {
        const getData = async () =>{
            const response = axios.get("/products");
            if(!response){
                throw new Error("Could not get product data!");
            }
            const data = (await response).data;
            return data;
        };
        try{
            const productData = await getData();
            console.log(productData.dtoList);
            dispatch(productActions.updateProductList(productData));
        }catch(error){
            console.log(error.request);
            console.log(error.response);
            console.log(error.response.message);
        }
    }
};