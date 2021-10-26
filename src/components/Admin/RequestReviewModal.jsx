import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./RequestReviewModal.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import axios from "axios";
import useInput from "../hooks/use-input";

const RequestRevieweModal = props => {
    console.log("show me idx " + props.data.idx);
    const { value: enteredPrice,
        valueChangeHandler: priceChangeHandler,
        reset: resetPrice}              = useInput();
    const negotiationBtn                = (event, idx) =>{
      event.preventDefault();
        if(window.confirm("제안하시겠습니까?")){
            axios.put("/purchased-products/"+idx+"/step", {cost: enteredPrice},
                {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    alert(props.enteredPrice + " 에 제안하였습니다.");
                    resetPrice();
                    window.location.replace("/admin");
                })
                .catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
        }
    };
    return(
        <Modal show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false} centered={true}
                className="modal">
            <Modal.Header closeButton>
                <Modal.Title>협상</Modal.Title>
            </Modal.Header>
            <Modal.Body className="inputBody">
                <Row>
                    <Col lg={3}>
                        <p className="in-name">신청번호</p>
                    </Col>
                    <Col lg={9}>
                        <input required type="text" readOnly value={props.data.idx}/>
                    </Col>
                    <Col lg={3}>
                        <p className="in-name">가격</p>
                    </Col>
                    <Col lg={9}>
                        <input required type="text" placeholder={props.data.price} value={enteredPrice} onChange={priceChangeHandler}/>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                     취소
                </Button>
                <Button variant="primary" onClick={negotiationBtn}>제안</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default RequestRevieweModal;