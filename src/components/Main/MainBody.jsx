import React from "react";
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import ProductCardList from "../Product/ProductCardList";

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        paddingLeft:"260px",
        paddingTop: "50px",
        fontFamily: "twayair",
        backgroundColor:"#fff"
    },
    bodyTitle:{
        fontFamily: "twayair",
        textAlign:"center",
        paddingBottom: "40px",
        fontSize: 40,
        borderBottom: "1px solid orange",
        backgroundColor:"#fff"
        // width: 800,
    },
    root: {
        maxWidth: 345,
    },

}));
const MainBody = () => {
    const classes = useStyles();

    return(
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.mainContainer}>
            <Grid item xs={12} md={12}>
                <Typography variant="h3" className={classes.bodyTitle}>베스트 상품</Typography>
            </Grid>
            <ProductCardList/>
        </Grid>
    );
};

export default MainBody;