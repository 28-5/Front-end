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

const RegistrationSuccess = () =>{
    const classes = useStyles();
    return(
        <>
            <Container maxWidth="xl" className={classes.mainContainer}>
                <div>
                    <Typography align="center" variant={"h3"}>성공적으로 요청되었습니다!</Typography>
                    <Button type="button" href="/main">메인으로</Button>
                </div>
            </Container>
        </>
    )
}

export default RegistrationSuccess;