import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import "./JoinSuccess.css";

const JoinSuccess = () =>{
    return(
        <>
            <Container className="cardSuccess">
                <div className="messageBox">
                    <i className="checkmark">✓</i>
                </div>
                <Row>
                    <Col lg={12}>
                        <h1>환영합니다!</h1>
                        <p>가입을 진심으로 축하드립니다.</p>
                    </Col>
                    <Button variant="outlined" color={"primary"} component={Link} to={"/shop"} className="btn">메인으로</Button>
                </Row>
            </Container>
        </>
    )
}

export default JoinSuccess;