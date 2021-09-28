import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(127, 200, 49, 1)',
            outline: '1px solid slategrey'
        }
    },
    title:{
        fontSize: "50px",
        fontWeight:"bold",
        paddingTop: "10px",
        height: "4rem"
    },
    titleLink:{
        color: "#84bc44",
        textDecoration:"none",

    },

}));

const ShoppingTopNav = () => {
    const classes = useStyles();

    return(
        <Container maxWidth="lg">
            <Typography variant={"h1"} className={classes.title} align={"center"}><Link to="/shop" className={classes.titleLink}>REBORN</Link></Typography>
        </Container>
    );
};

export default ShoppingTopNav;