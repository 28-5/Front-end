import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 260,
        boxShadow: "none",
        textAlign:"left",
    },

    cardGrid:{
        // backgroundColor:"#fff"
    },
    productTitle:{
        fontFamily: "twayair",
        fontSize: 20,
        color: "black",
        marginBottom: 0
    },
    productPrice:{
        fontFamily: "twayair",
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
    },
    productStart:{
        color:"black",
        marginLeft: -3
    },
    divider: {
        border: "1px solid orange",
        width: 800,
    }
}));

const ProductCardList = (props) => {
    const classes = useStyles();



    return(
        <>
            {props.data.map((item) => (
                <Grid item xs={6} md={3} className={classes.cardGrid} key={item.product_id}>
                 <Card className={classes.root} >
                    <Link to={"/shop/product/"+item.product_id}>
                        <CardActionArea >
                            <CardMedia component="img" alt="Product image" height="240" image={item.img}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.productTitle}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.productStart}>
                                    {item.star}
                                </Typography><Typography variant="body2" color="textSecondary" component="p" className={classes.productPrice}>
                                    {item.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                     </Link>
                </Card>
                </Grid>
                ))
                }
                </>
    );
};

export default ProductCardList;
