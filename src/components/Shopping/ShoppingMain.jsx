import ShoppingTopNav from "./ShoppingTopNav";
import ShoppingCarousel from "./ShoppingCarousel";
import ShoppingNavbar from "../Navbar/ShoppingNavbar";
import ProductCardList from "./Product/ProductCardList";
import Grid from "@material-ui/core/Grid";
import React, {useCallback, useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import productData from "./Product/ProductData";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Footer from "../Main/Footer";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    shoppingMainSection:{
        backgroundColor: "#fff"
    },
    bestTitle:{
        textAlign:"center",
        paddingTop: "40px",
        paddingBottom: "40px"
    }
}));

const ShoppingMain = ({match}) => {
    const classes = useStyles();
    const [productItems, setProductItems] = useState([]);
    const [error, setError]               = useState(null);

    const productDataAxiosHandler= useCallback(async () => {
        setError(null);

        try{
            // const response = await axios.get("http://localhost:8089/shop/product");
            const response = await axios.get("https://swapi.dev/api/films");
            if(response.status !== 200){
                throw new Error("Something went wrong!");
            }
            console.log(response.data);
            const receivedProductData = response.data.map(item => {
                return{
                  productNum: item.pno,
                  productTitle: item.title,
                  productBrand: item.brand,
                  productQuality: item.rank,
                  productQuantity: item.quantity,
                  productPrice: item.price,
                  productContent: item.content,
                  productImg: item.imageurl,
                  productStar: item.avg,
                  productReviewNum: item.reviewcnt,
                  productRegDate: item.regdate,
                };
            });
            setProductItems(receivedProductData);
        }catch (error) {
            setError(error.message);
        }
    }, []);

    useEffect( ()=>{
        productDataAxiosHandler();
    }, [productDataAxiosHandler]);

    return(
        <section className={classes.shoppingMainSection}>
            <ShoppingTopNav/>
            <Container maxWidth="lg">
                <ShoppingNavbar />
                <ShoppingCarousel />
                <Typography variant="h3" className={classes.bestTitle}>베스트 상품</Typography>
                <Grid container direction="row" justifyContent="center" alignItems="center"  >
                    <ProductCardList data={productData}/>
                </Grid>
            </Container>
            <Footer />
        </section>
    );
};

export default ShoppingMain;