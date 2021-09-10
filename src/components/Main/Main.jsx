import React from "react";
import LoginNavBtn from "../Login/LoginNavBtn";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Navbar/Navbar";
const useStyles = makeStyles(() => ({
    mainContainer:{
        paddingLeft:"200px",
    },
    mainImg: {
       width: "100%",
        height:"700px",
        objectFit:"cover",
   },
    mainImgGrid:{
        position:"relative",
    },
    mainMessage:{
        color:"#fff",
        textAlign:"center",
        fontFamily:"twayair",
        fontWeight:"550",
        position:"absolute",
        zIndex:"1",
        top: "50%",
        left: "50%",
        transform: "translate(-25%, -50%)"
    },
    mainMessageGrid:{
      // verticalAlign:"center"
    },
    section:{
    },
}));

const Main = () => {
    const classes = useStyles();
    return(
        <>
          <Navbar />
          <LoginNavBtn />
          <section id="top" className={classes.section}>
              <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.loginBox}>
              <Grid item xs={12} md={6} className={classes.mainMessageGrid}>
                  <Typography display="inline" align="center" variant="h4" className={classes.mainMessage}>리본에<br/>오신걸 환영합니다</Typography>
              </Grid>
              <Grid item xs={12} md={12} className={classes.mainImgGrid}>
                <img className={classes.mainImg} src="/img/mainImg2.jpg" />
              </Grid>
              </Grid>
          </section>
      {/*// <Container maxWidth="lg" className={classes.mainContainer}>*/}
      {/*// </Container>*/}
    </>
    );
};

export default Main;