import React, {useRef, useState} from 'react';
import Container from "@material-ui/core/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import "./WrtForm.css"

const WrtForm = props => {
    const path                  =   props.path;
    const [title, setTitle]     =   useState(null);
    const [content, setContent] =   useState(null);
    const titleChangeHandler    =   event =>{
        setTitle(event.target.value);
    };
    const contentChangeHandler  =   event =>{
        setContent(event.target.value);
    };
    const formFetchHandler      =   event =>{
        event.preventDefault();
        // axios.post(path, json, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
        axios.post(path, {title:title, content:content}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => {
                window.location.replace(path);
        }).catch(err => {
            console.log(err.request);
            console.log(err.response);
            console.log(err.response.message);
        });
    };
    return (
        <div className="contact-section">
            <Container className="container">
                <Row className="row">
                    <Col lg={8}>
                        <form action="#" className="contact-form">
                            <Row className="row">
                                <Col lg={12}>
                                    <FormControl placeholder="제목" aria-label="제목" aria-describedby="basic-addon2" onChange={titleChangeHandler}/>
                                    <FormControl as="textarea" aria-label="내용" placeholder="내용" onChange={contentChangeHandler}/>
                                </Col>
                                <Col lg={12} className="text-right">
                                    <button type="button" className="formBtn" onClick={formFetchHandler}>올리기</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col lg={3} className="offset-lg-1">
                        <div className="contact-widget">
                            <div className="cw-item">
                                <h5>사무실 위치</h5>
                                <ul>
                                    <li>서울시 구로구 가산동</li>
                                    <li>우림라이온스밸리 A동 804호</li>
                                </ul>
                            </div>
                            <div className="cw-item">
                                <h5>연락처</h5>
                                <ul>
                                    <li>+82 2 123-4592</li>
                                </ul>
                            </div>
                            <div className="cw-item">
                                <h5>E-mail</h5>
                                <ul>
                                    <li>contact@reborn.com</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default WrtForm;