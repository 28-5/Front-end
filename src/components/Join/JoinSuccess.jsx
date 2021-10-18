import Container from "@material-ui/core/Container";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
    mainContainer:{
        paddingLeft:"260px",
        paddingTop: "0px",
        height:"100%",
    },
});

const JoinSuccess = () =>{
    const classes = useStyles();
    return(
        <>
            <Container maxWidth="xl" className={classes.mainContainer}>
                <div>
                    <Typography align="center" variant={"h3"}>환영합니다!</Typography>
                    <Button type="button" href="/shop">메인으로</Button>
                </div>
            </Container>
        </>
    )
}

export default JoinSuccess;