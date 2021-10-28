import {Link, useLocation} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Article.css";

const Article = props => {
    const location            = useLocation();
    const { data }            = location.state;
    const articleNum          = data.postNum;
    const [answer, setAnswer] = useState([]);
    let deletePath;
    let modifyPath;
    switch (props.match.url.slice(0,3)) {
        case "/no": modifyPath = props.match.url.slice(0,8);
                    deletePath = props.match.url.slice(0,8) + props.match.url.slice(16);
                    break;
        default: modifyPath    = props.match.url.slice(0,5);
                 deletePath    = props.match.url.slice(0,6) + props.match.url.slice(14);
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

    useEffect(() => {
        axios.get("/qnas/" + articleNum)
            .then(res => setAnswer(res.data.answer))
            .catch(err => console.log(err));
    }, []);
    return(
        <>
            <Container className="content">
                <Row className="row">
                    <Col>
                        <div className="card">
                            <div className="card-header">{data.postTitle}<span>{data.postDate.toString().slice(0,10)}</span></div>
                            <div className="card-body height3">
                                <ul className="chat-list">
                                    {props.match.url.slice(0,3) !== "/no" ?
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
                                    </li>:<li className="out">
                                            <div className="chat-img">
                                                <img alt="Avtar" src="https://cdn.pixabay.com/photo/2021/03/11/07/37/man-6086415_960_720.png"/>
                                            </div>
                                            <div className="chat-body">
                                                <div className="chat-message">
                                                    <h5>관리자</h5>
                                                    <p>안녕하세요. {data.postContent}</p>
                                                </div>
                                            </div>
                                        </li>}
                                    {props.match.url.slice(0,3) !== "/no" && answer.length > 0  &&
                                    <li className="out">
                                        <div className="chat-img">
                                            <img alt="Avtar" src="https://cdn.pixabay.com/photo/2021/03/11/07/37/man-6086415_960_720.png"/>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-message">
                                                <h5>{answer[0].name}의 답글 {answer[0].regDate.slice(5, 10)} </h5>
                                                <p>안녕하세요 {data.userEmail} 님</p>
                                                <p>{answer[0].content}</p>
                                            </div>
                                        </div>
                                    </li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <Button variant="outlined" color="primary" component={Link} to={{
                            pathname: modifyPath + "/modify",
                            state: {data: data}}}>
                            수정
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={deleteHandler} >
                            삭제
                        </Button>
                        <Button variant="outlined" color="primary" onClick={listBtnHandler} className="listBtn">
                            목록으로
                        </Button>
                        {props.match.url.slice(0,3) !== "/no" &&
                        <Button variant="outlined" color="primary" component={Link} to={{
                            pathname: modifyPath + "/answer",
                            state: {data: data}}}  className="replyBtn">
                            답변
                        </Button>}
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