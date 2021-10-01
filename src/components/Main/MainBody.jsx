import React from "react";
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import ProductCardList from "../Shopping/Product/ProductCardList";
import ProductData from "../Shopping/Product/ProductData";

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        paddingLeft:"260px",
        paddingTop: "50px",
        fontFamily: "twayair",
        backgroundColor:"#fff",
        [theme.breakpoints.down('sm')]: {
            paddingLeft:"16px",
        },
    },
    bodyTitle:{
        fontFamily: "twayair",
        textAlign:"left",
        paddingTop: 20,
        paddingBottom: "40px",
        fontSize: 25,
        // borderBottom: "1px solid",
        backgroundColor:"#fff"
        // width: 800,
    },
    line_dec:{
        width: "30px",
        height: "5px",
        backgroundColor: "#84bc44",
    }

}));
const MainBody = () => {
    const classes = useStyles();

    return(
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.mainContainer}>
            <Grid item xs={12} md={12}>
                <div className={classes.line_dec} />
                <Typography variant="h3" className={classes.bodyTitle}>베스트 상품</Typography>
            </Grid>
            <ProductCardList data={ProductData}/>
        </Grid>
    );
};

export default MainBody;