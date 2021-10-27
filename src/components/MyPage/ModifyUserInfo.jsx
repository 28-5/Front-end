import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import {useLocation} from "react-router-dom";
import "./MyPageMain.css";
import useInput from "../hooks/use-input";
import axios from "axios";

const ModifyUserInfo = props =>{
    const location                  = useLocation();
    const { data }                  = location.state;

    const { value: enteredPhoneNum,
        valueChangeHandler: phoneNumChangeHandler,
        reset: resetPhoneNum}       = useInput();
    const { value: enteredAddr,
        valueChangeHandler: addrChangeHandler,
        reset: resetAddr}           = useInput();
    const { value: enteredPass,
        valueChangeHandler: passChangeHandler,
        reset: resetPass}           = useInput();
    const { value: enteredConfirmedPass,
        valueChangeHandler: passConfirmChangeHandler,
        reset: resetConfirmPass}    = useInput();
    const infoChangeHandler         = (event)=>{
        event.preventDefault();
        if(enteredPass === '' || enteredConfirmedPass === ''){
            alert("비밀번호를 입력해주세요");
            return;
        }else{
            const changedInfo = {
                idx : data.idx,
                email: data.email,
                address: data.address,
                phone: enteredPhoneNum,
                password: enteredPass,
                name: data.name,
            };
            axios.put("/member", changedInfo,{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    resetPhoneNum();
                    resetAddr();
                    resetPass();
                    resetConfirmPass();
                    alert("변경되었습니다. 재로그인 부탁드립니다.");
                    window.location.replace("/mypage");
                }).catch(err => {
                console.log(err.request);
                console.log(err.response);
                console.log(err.response.message);
            });
        }
    };

    const accountDeleteHandler = () => {
        if(window.confirm("정말로 탈퇴하시겠습니까?")){
            axios.delete("/member", {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    resetPhoneNum();
                    resetAddr();
                    resetPass();
                    resetConfirmPass();
                    window.location.replace("/mypage");
                }).catch(err => {
                console.log(err.request);
                console.log(err.response);
                console.log(err.response.message);
            });
        }
    };
    return(
        <>
            <Container>
                <Row className="main-body">
                    <h3>마이페이지</h3>
                    <Row className="gutters-sm">
                        {/*-----------------------------1번째 박스------------------------------------*/}
                        <Col md={4} className="mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                            alt="Admin"
                                            className="rounded-circle" width="150"/>
                                        <div className="mt-3">
                                            <h4>{data.name}</h4>
                                            <p className="text-secondary mb-1">{data.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Col className="card mb-5">
                                <Col className="card-body">
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">성함</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            {data.name}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">Email</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            {data.email}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">연락처</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            <input type="text" value={enteredPhoneNum} onChange={phoneNumChangeHandler}
                                                placeholder={data.phone}/>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">주소</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            <input type="text" value={enteredAddr} onChange={addrChangeHandler}
                                                   placeholder={data.address}/>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">비밀번호*</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            <input type="password" required value={enteredPass} onChange={passChangeHandler}
                                                   placeholder={"비밀번호를 입력해주세요"} className={"inputPass"}/>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">비밀번호확인*</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            <input type="password" required value={enteredConfirmedPass} onChange={passConfirmChangeHandler}
                                                   className={"inputPass"}/>
                                        </Col>
                                    </Row>
                                    <hr/>

                                    <Row className="row">
                                        <Col sm={12}>
                                            <span onClick={accountDeleteHandler}>
                                                <button type="button" class="btn btn-link deleteBtn">회원탈퇴</button>를 원하시나요?
                                            </span>
                                            <button type="button" className="btn btn-success btn-info" onClick={infoChangeHandler}>정보수정</button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Col>

                        {/*-----------------------------2번째 박스------------------------------------*/}
                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default ModifyUserInfo;