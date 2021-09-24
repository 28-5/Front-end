import Grid from "@material-ui/core/Grid";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        paddingLeft:"260px",
        paddingTop: "50px",
        fontFamily: "twayair",
        backgroundColor: "#fff",
    },

    partnerImg:{
        width: "94%"
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

const Partners = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.mainContainer}>
            <Grid item xs={12} md={12}>
                <div className={classes.line_dec} />
                <Typography variant="h3" className={classes.bodyTitle}>제휴 업체</Typography>
            <img src="./img/partners.jpg" className={classes.partnerImg} alt="partners"/>
            </Grid>
        </Grid>
    );

};

export default Partners;