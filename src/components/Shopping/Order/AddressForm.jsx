import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useSelector} from "react-redux";
const AddressForm = (props) => {
    const isAuth                                          = useSelector(state => state.auth.isAuthenticated);
    const userInfo                                        = useSelector(state => state.auth);
    const [usedToken, setUsedToken]                       = useState(0);
    const usedTokenHandler = (event) =>{
        setUsedToken(event.target.value);
    };

    const tokenUseBtnHandler = () =>{
        props.setUsedToken(usedToken);
    };

    return (
        <>
        <Col lg={12}>
            <h3>구매자</h3>
        </Col>
    <Col lg={9}>
        <Row>
            <Col lg={2}>
                <p className="in-name">주문자*</p>
            </Col>
            <Col lg={4}>
                {isAuth ? <input type="text" required value={userInfo.name}/>:
                    <input type="text" onChange={props.buyerChangeHandler}/>}

            </Col>
            <Col lg={2}>
                <p className="in-name">연락처*</p>
            </Col>
            <Col lg={4}>
                {isAuth ? <input type="text" required value={userInfo.phone}/>:
                <input type="text" onChange={props.contactChangeHandler}/>}
            </Col>
        </Row>
        <Row>
            <Col lg={2}>
                <p className="in-name">주소*</p>
            </Col>
            <Col lg={10}>
                {isAuth ? <input type="text" required value={userInfo.address}/>:
                <input type="text" onChange={props.addressChangeHandler}/>}
            </Col>
        </Row>
        <Row>
            <Col lg={12} className="text-right">
                <div className="form-check">
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        <input className="form-check-input diffBox" type="checkbox" value=""
                               id="flexCheckChecked" onClick={props.sameInfoBtnHandler}/>
                        구매자와 받는 사람의 정보가 같나요?
                    </label>
                </div>
            </Col>
            {/*--------------------수령인--------------------------*/}
        </Row>
        <Row>
            <h3>수령인</h3>
            <Col lg={2}>
                <p className="in-name">수령인*</p>
            </Col>
            <Col lg={4}>
                {props.isBtnClicked===true ? isAuth && <input disabled type="text" value={userInfo.name}/>:
                    <input type="text" value={props.receiver} onChange={props.receiverChangeHandler}/>}
            </Col>
            <Col lg={2}>
                <p className="in-name">연락처*</p>
            </Col>
            <Col lg={4}>
                {props.isBtnClicked===true ? isAuth && <input disabled type="text" value={userInfo.phone}/>:
                    <input type="text" value={props.receiveContact} onChange={props.receiverContactChangeHandler}/>}
            </Col>
        </Row>
        <Row>
            <Col lg={2}>
                <p className="in-name">주소*</p>
            </Col>
            <Col lg={10}>
                {props.isBtnClicked===true ? isAuth && <input disabled type="text" value={userInfo.address}/>:
                    <input type="text" value={props.receiverAddr} onChange={props.receiverAddressChangeHandler}/>}
            </Col>
        </Row>
        <Row>
            <Col lg={2}>
                <p className="in-name">메모사항</p>
            </Col>
            <Col lg={10}>
                <input type="text" value={props.memo} onChange={props.memoChangeHandler}/>
            </Col>
        </Row>
        {isAuth &&
        <Row>
            <h3>리본 토큰</h3>
            <Col lg={2}>
                <p className="in-name">지갑주소</p>
            </Col>
            <Col lg={10}>
                <input type="text" value={userInfo.walletAddress} readOnly/>
            </Col>
            <Col lg={2}>
                <p className="in-name">보유량</p>
            </Col>
            <Col lg={10}>
                <input type="text" value={userInfo.tokenAmount} readOnly/>
            </Col>
            <Col lg={2}>
                <p className="in-name">토큰</p>
            </Col>
            <Col lg={8}>
                <input type="text" value={usedToken} onChange={usedTokenHandler}/>
            </Col>
            <Col lg={2}>
                <button type="button" className="btn btn-light" onClick={tokenUseBtnHandler}>사용</button>
            </Col>
        </Row>}

    </Col>
    </>
    );
};

export default AddressForm;