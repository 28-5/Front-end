import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ProductData from "./ProductData";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 260,
        boxShadow: "none",
        textAlign:"left",
    },

    cardGrid:{
        backgroundColor:"#fff"
    },
    productTitle:{
        fontFamily: "twayair",
        fontSize: 20
    },
    productPrice:{
        fontFamily: "twayair",
        fontSize: 18
    },
    cardContent:{
    },
    divider: {
        border: "1px solid orange",
        width: 800,
    }
}));

const ProductCardList = () => {
    const classes = useStyles();

    return(
        <>
            {ProductData.map((item) => (
                <Grid item xs={6} md={3} className={classes.cardGrid}>
                 <Card className={classes.root}>
                    <CardActionArea href="/login">
                        <CardMedia component="img" alt="Product image" height="240" image={item.img} title="Reborn Products" />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.productTitle}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.productPrice}>
                                {item.star}
                            </Typography><Typography variant="body2" color="textSecondary" component="p" className={classes.productPrice}>
                                {item.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                ))
                }
                </>
    );
};

export default ProductCardList;