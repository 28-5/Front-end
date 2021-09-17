import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import React from "react";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    breadLink:{
        color:"grey"
    }
}));


const Breadcrumb = props => {
    const classes = useStyles();

    return(
        <Breadcrumbs aria-label="breadcrumb">
            <Link to="/shop" className={classes.breadLink}>
                쇼핑
            </Link>
            <Link to="/shop" className={classes.breadLink}>
                Core
            </Link>
            <Link to="/shop" className={classes.breadLink}>
                {props.showPath}
            </Link>
        </Breadcrumbs>
    )
};

export default Breadcrumb;