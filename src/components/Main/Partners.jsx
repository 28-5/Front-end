import Grid from "@material-ui/core/Grid";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        paddingLeft:"200px",
        paddingTop: "50px",
        fontFamily: "twayair",
    },

    partnerImg:{
        width: "80%"
    },
    bodyTitle:{
        fontFamily: "twayair",
        textAlign:"center",
        fontSize: 40,
        paddingBottom: "40px",
    },
}));

const Partners = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.mainContainer}>
            <Grid item xs={12} md={12}>
                <Typography variant="h3" className={classes.bodyTitle}>제휴 업체</Typography>
            </Grid>
            <img src="./img/partners.jpg" className={classes.partnerImg}/>
        </Grid>
    );

};

export default Partners;