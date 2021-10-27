import Grid from "@material-ui/core/Grid";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    gridContainer:{
        marginTop: 40,
        marginBottom: 80
    },
    line_dec:{
        width: "100%",
        height: "5px",
        backgroundColor: "#84bc44",
    },
    bodyTitle:{
        color: "#222222",
        fontSize: "22px",
        fontFamily: "twayair",
        fontWeight: 400,
    },
    contentInfoDiv:{
        paddingTop: 15,
      paddingBottom: 50
    },
    bodyContentInfo:{
        color: "#222222",
        fontSize: "18px",
        fontFamily: "twayair",
        fontWeight: 400,
    },
    bodyContent:{
        fontFamily: "twayair",
    },
}));
//5000 41
const DetailedProductContent = props => {
    const classes = useStyles();
    return(
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className={classes.gridContainer}>
            <Typography variant="h5" className={classes.bodyTitle}>상품상세정보</Typography>
            <div className={classes.line_dec} />
            <div className={classes.contentInfoDiv}>
                <Typography variant="h5" className={classes.bodyContentInfo}>상품번호 {props.idx}</Typography>
                <Typography variant="h5" className={classes.bodyContentInfo}>모델번호 1000229194115</Typography>
            </div>
            <Grid item sm={12} md={12} className={classes.bodyContent}>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</span>
            </Grid>
        </Grid>
    );
};

export default DetailedProductContent;