import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListIcon from '@material-ui/icons/List';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
const AccountDetail = (props) =>{
    const today                                 = new Date();
    const { pathname }                          = useLocation();
    const month                                 = today.getMonth() + 1;  // 월
    const date                                  = today.getDate()-3;  // 날짜
    const userInfo                              = useSelector(state => state.auth);

    return (
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
                                            <h4>{userInfo.name}</h4>
                                            <p className="text-secondary mb-1">{userInfo.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Col className="card mb-3">
                                <Col className="card-body">
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">성함</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            {userInfo.name}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">Email</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            {userInfo.email}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">연락처</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            {userInfo.phone}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">주소</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            {userInfo.address}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={12}>
                                            <Link to={{
                                                pathname: `${pathname}/userinfo`,
                                                state: {
                                                    data: userInfo
                                                }}}
                                                  className="btn btn-info">회원정보수정</Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Col>

                        {/*-----------------------------2번째 박스------------------------------------*/}
                        <Col md={4} className="mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <Row className="row">
                                        <Col sm={12}>
                                            <h5 className="mb-0"><ShoppingCartIcon/>
                                            <Link to={"/mypage/order/list"}>
                                                구매내역
                                            </Link></h5>
                                        <hr/>
                                        </Col>
                                    </Row>
                                    <Row className="row">
                                        <Col sm={12}>
                                            <h5 className="mb-0"><ListIcon/>
                                            <Link to={"#"}>
                                                판매신청조회
                                            </Link></h5>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row className="row">
                                        <Col sm={12}>
                                            <h5 className="mb-0"><MonetizationOnIcon/><Link to={"#"}> 토큰조회</Link></h5>
                                            <hr/>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>

                        <Col md={8}>
                            <Col className="card mb-4">
                                <Col className="card-body">
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">최근 구매 날짜</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            {month + "월 " + date + "일"}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">지갑 주소</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            {userInfo.walletAddress}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="row">
                                        <Col sm={3}>
                                            <h6 className="mb-0">토큰 보유량</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                            {userInfo.tokenAmount}
                                        </Col>
                                    </Row>
                                    <hr/>
                                </Col>
                            </Col>
                        </Col>

                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default AccountDetail;