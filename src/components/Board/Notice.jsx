import BoardListForm from "./BoardListForm";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    formBtn:{
        float:"right",
        marginRight: 25,
    },
    registerBtnDiv:{
        paddingBottom: 80

    },
}));

const Notice = props =>{
    const classes               =   useStyles();
    const isAuth                =   useSelector(state => state.auth.isAuthenticated);
    return(
        <>
            <BoardListForm data={props.noticeData} path={"/notices"}/>
            <div className={classes.registerBtnDiv}>
                {isAuth &&<Button variant="outlined" color="primary" component={Link} to={"/notices/write"} className={classes.formBtn} >
                    질문등록
                </Button>}
            </div>
        </>
    );
};

export default  Notice;