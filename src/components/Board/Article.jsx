import {Link, useLocation} from 'react-router-dom';
import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Article.css";

const Article = props => {
    const location = useLocation();
    const { data } = location.state;
    let deletePath;
    let modifyPath;
    switch (props.match.url.slice(0,3)) {
        case "/no": modifyPath = props.match.url.slice(0,8);
                    deletePath = props.match.url.slice(0,8) + props.match.url.slice(16);
                    break;
        default: modifyPath = props.match.url.slice(0,5);
                 deletePath = props.match.url.slice(0,6) + props.match.url.slice(14);
                 break;
    }
    const deleteHandler = () => {
        axios.delete(deletePath,{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
                console.log("글 삭제 성공");
                window.location.replace(modifyPath);
            }).catch(err => {
            console.log(err.request);
            console.log(err.response);
            console.log(err.response.message);
        });
    };
    const listBtnHandler = () => {
        window.location.replace(modifyPath);
    };
    return(
        <>
            <Container className="content">
                <Row className="row">
                    <Col>
                        <div className="card">
                            <div className="card-header">{data.postTitle}<span>{data.postDate.toString().slice(0,10)}</span></div>
                            <div className="card-body height3">
                                <ul className="chat-list">
                                    <li className="in">
                                        <div className="chat-img">
                                            <img alt="Avtar" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"/>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-message">
                                                <h5>{data.userEmail}</h5>
                                                <p>{data.postContent}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="out">
                                        <div className="chat-img">
                                            <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-message">
                                                <h5>Admin</h5>
                                                <p>안녕하세요 {data.userEmail} 님</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Button variant="outlined" color="primary" component={Link} to={{
                            pathname: modifyPath + "/modify",
                            state: {
                                data: data
                            }}}
                             >
                            수정
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={deleteHandler} >
                            삭제
                        </Button>
                        <button type="button" className="btn btn-light listBtn" onClick={listBtnHandler}>목록으로</button>
                    </Col>
                    <Col lg={2} className="offset-lg-1">
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

        </>

    );
}

export default Article;