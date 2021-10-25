import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./RegistrationSuccess.css";

const ServiceRequestSuccess = () =>{

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return(
        <>
            <div className="card">

                <div className="messageBox">
                    <i className="checkmark">✓</i>
                </div>
                <Row>
                    <Col lg={12}>
                        <h1>성공</h1>
                        <p>성공적으로 판매요청을 하였습니다.</p>
                    </Col>
                        <Button variant="outlined" component={Link} to={"/service/request"} className="btn">다시 등록</Button>
                        <Button variant="outlined" color={"primary"} component={Link} to={"/shop"} className="btn">메인으로</Button>
                </Row>
            </div>
        </>
    )
}

export default ServiceRequestSuccess;