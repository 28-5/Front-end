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
    const {
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
    const cancelHandler                 = () =>{
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
        setPrevImg(null);
        history.push("/shop");
    }
    const formFetchHandler      =   event =>{
        event.preventDefault();
        if(imageInfo === null){
            alert("????????? ??????????????????");
            return;
        }else{
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
                setPrevImg(null);
                alert("?????? ?????? ??????: " + res.data.expectedPointAmount);
                history.push("/service/req-success");

            }).catch(err => {
                console.log(err.request);
                console.log(err.response.data);
                console.log(err.response.message);
            });

        }
    };

    return(
      <>
          <section className="cart-total-page spad">
              <Container>
                  <form action="#" className="checkout-form">
                      <Row>
                          <Col lg={12}>
                              <h3>?????? ?????? ??????</h3>
                          </Col>
                          <Col lg={9}>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">??????</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={sellerChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">?????? ??????</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={addressChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">??????</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={modelChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">????????????*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <select className="form-select cart-select country-usa" onChange={productTypeNameChangeHandler}
                                              defaultValue="">
                                          <option value=""></option>
                                          <option value="1">????????????</option>
                                          <option value="2">????????????</option>
                                          <option value="3">????????????</option>
                                          <option value="4">????????????</option>
                                          <option value="5">??????</option>
                                          <option value="6">?????????</option>
                                          <option value="7">?????????</option>
                                          <option value="8">?????????</option>
                                          <option value="9">????????????</option>
                                          <option value="10">????????????</option>
                                          <option value="11">????????????</option>
                                          <option value="12">?????????</option>
                                          <option value="13">?????????</option>
                                          <option value="14">??????</option>
                                          <option value="15">??????</option>
                                          <option value="16">??????</option>
                                      </select>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">?????????*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <select className="form-select cart-select country-usa" onChange={brandChangeHandler}
                                              defaultValue="">
                                          <option value=""></option>
                                          <option value="??????????????????">??????????????????</option>
                                          <option value="????????????">????????????</option>
                                          <option value="??????????????????">??????????????????</option>
                                          <option value="???">???</option>
                                          <option value="?????????">?????????</option>
                                          <option value="???????????????">???????????????</option>
                                          <option value="??????">??????</option>
                                          <option value="PXG">PXG</option>
                                          <option value="????????????">????????????</option>
                                          <option value="???????????????">???????????????</option>
                                          <option value="??????">??????</option>
                                          <option value="?????????">?????????</option>
                                          <option value="?????????">?????????</option>
                                      </select>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">??????</p>
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
                                      <p className="in-name">??????*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={amountChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">??????*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <input required type="text" onChange={priceChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                      <p className="in-name">??????*</p>
                                  </Col>
                                  <Col lg={10}>
                                      <FormControl as="textarea" aria-label="??????" placeholder="??????"  className="formArea"
                                                   onChange={contentChangeHandler}/>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg={2}>
                                  </Col>
                                  <Col lg={10}>
                                      <ImageUpload setImgInfo={setImageInfo} setPrevImg={setPrevImg}/>
                                      {prevImg && <img src={prevImg} className={"prevImg"} alt={"imagePreview"}/>}
                                      <div className="form-actions">
                                          <button type="button" className="btn btn-danger" onClick={cancelHandler}>??????</button>
                                          <button type="button" className="btn btn-primary" onClick={formFetchHandler}>??????</button>
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