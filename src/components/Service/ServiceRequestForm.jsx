import React, {useState} from "react";
import useInput from "../hooks/use-input";
import axios from "axios";
import ImageUpload from "./ImageUpload";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import "./ProductRegistrationForm.css";
import {useHistory} from "react-router-dom";


const ServiceRequestForm = () => {
    const history                       = useHistory();
    const [imageInfo, setImageInfo]     = useState(null);
    const [prevImg, setPrevImg]         = useState(null);
    const {enteredSeller,
        valueChangeHandler: sellerChangeHandler,
        reset: resetSellerInput}        = useInput();
    const {value: enteredAddress,
        valueChangeHandler: addressChangeHandler,
        reset: resetAddress}        = useInput();
    const {value: enteredCategory,
        valueChangeHandler: productTypeNameChangeHandler,
        reset: resetProductTypeInput}   = useInput();
    const { value: enteredBrand,
        valueChangeHandler: brandChangeHandler,
        reset: resetBrand}              = useInput();
    const {value: enteredModel,
        valueChangeHandler: modelChangeHandler,
        reset: resetModel}         = useInput();
    const {value: enteredRate,
        nameChangeHandler: productRateChangeHandler,
        reset: resetProductRate}   = useInput();
    const { value: enteredAmount,
        valueChangeHandler: amountChangeHandler,
        reset: resetAmount}             = useInput();
    const { value: enteredPrice,
        valueChangeHandler: priceChangeHandler,
        reset: resetPrice}              = useInput();
    const {value: eneteredContent,
        valueChangeHandler: contentChangeHandler,
        reset: resetContent}            = useInput();

    const formFetchHandler      =   event =>{
        event.preventDefault();
        // console.log("image: " + image);
        const requestData = {
            brand: enteredBrand,
            name: enteredModel,
            state:enteredRate,
            price: enteredPrice,
            quantity:enteredAmount,
            details: eneteredContent,
            address: enteredAddress,
            imageDtoList:[
                {
                    imgName: imageInfo[0].imgName,
                    uuid: imageInfo[0].uuid,
                    path: imageInfo[0].path,
                }
            ],
        };
        axios.post("/purchased-products?categoryIdx=" + parseInt(enteredCategory), requestData,{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
            resetSellerInput();
            resetAddress();
            resetProductTypeInput();
            resetBrand();
            resetModel();
            resetProductRate();
            resetAmount();
            resetPrice();
            resetContent();
            setImageInfo(null);
            console.log("성공");
            console.log(res.data);
            alert("토큰 적립: " + res.data.expectedPointAmount);
            history.push("/service/req-success");

        }).catch(err => {
            console.log(err.request);
            console.log(err.response.data);
            console.log(err.response.message);
        });
    };

    return(
      <>
          <section className="cart-total-page spad">
              <Container>
                  <form action="#" className="checkout-form">
                      <Row>
                          <Col lg={12}>
                              <h3>물품 픽업 신청</h3>
                          </Col>
                          <Col lg={9}>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">성함</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={sellerChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">픽업 주소</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={addressChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">모델</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={modelChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">카테고리*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <select className="form-select cart-select country-usa" onChange={productTypeNameChangeHandler}
                                              defaultValue="">
                                          <option value=""></option>
                                          <option value="1">골프클럽</option>
                                          <option value="2">골프용품</option>
                                          <option value="3">골프웨어</option>
                                          <option value="4">드라이버</option>
                                          <option value="5">우드</option>
                                          <option value="6">아이언</option>
                                          <option value="7">풀세트</option>
                                          <option value="8">골프공</option>
                                          <option value="9">골프가방</option>
                                          <option value="10">골프장갑</option>
                                          <option value="11">골프모자</option>
                                          <option value="12">골프화</option>
                                          <option value="13">아우터</option>
                                          <option value="14">상의</option>
                                          <option value="15">하의</option>
                                          <option value="16">양말</option>
                                      </select>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">브랜드*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <select className="form-select cart-select country-usa" onChange={brandChangeHandler}
                                              defaultValue="">
                                          <option value=""></option>
                                          <option value="타이틀리스트">타이틀리스트</option>
                                          <option value="캘러웨이">캘러웨이</option>
                                          <option value="테일러메이드">테일러메이드</option>
                                          <option value="핑">핑</option>
                                          <option value="미즈노">미즈노</option>
                                          <option value="클리브랜드">클리브랜드</option>
                                          <option value="혼마">혼마</option>
                                          <option value="PXG">PXG</option>
                                          <option value="코브라킹">코브라킹</option>
                                          <option value="브리지스톤">브리지스톤</option>
                                          <option value="볼빅">볼빅</option>
                                          <option value="파이즈">파이즈</option>
                                          <option value="나이키">나이키</option>
                                      </select>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">상태</p>
                                  </Col>
                                  <Col lg={10}>
                                      <select className="form-select cart-select country-usa" onChange={productRateChangeHandler}
                                              defaultValue="">
                                          <option value=""></option>
                                          <option value="A+">A+</option>
                                          <option value="A">A</option>
                                          <option value="B">B+</option>
                                      </select>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">수량*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={amountChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">가격*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={priceChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">내용*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <FormControl as="textarea" aria-label="내용" placeholder="내용"  className="formArea"
                                                   onChange={contentChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                  </Col>
                                  <Col lg={10}>
                                      <ImageUpload setImgInfo={setImageInfo} setPrevImg={setPrevImg}/>
                                      <img src={prevImg} className={prevImg && "prevImg"}/>
                                      <div className="form-actions">
                                          <button type="button" className="btn btn-danger">취소</button>
                                          <button type="button" className="btn btn-primary" onClick={formFetchHandler}>전송</button>
                                      </div>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                  </form>
              </Container>
          </section>
      </>
    );
};

export default ServiceRequestForm;