import BoardListForm from "./BoardListForm";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formBtn:{
        float:"right",
        marginRight: 25,
    },
    registerBtnDiv:{
        paddingBottom: 80

    },
}));

const QnA = props =>{
    const classes               =   useStyles();

    return(
        <>
            <BoardListForm/>
            <div className={classes.registerBtnDiv}>
                <Button variant="outlined" color="primary" className={classes.formBtn} >
                    질문등록
                </Button>
            </div>
        </>
    );
};

export default  QnA;