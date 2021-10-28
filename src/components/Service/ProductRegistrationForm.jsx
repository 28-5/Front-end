import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import useInput from "../hooks/use-input";
import ImageUpload from "./ImageUpload";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";
import "./ProductRegistrationForm.css";

const ProductRegistrationForm = (props) =>{
    const history                       = useHistory();
    const [imageInfo, setImageInfo]     = useState(null);
    const [prevImg, setPrevImg]         = useState(null);
    const {value: enteredCategory,
        valueChangeHandler: productTypeNameChangeHandler,
        reset: resetProductTypeInput}   = useInput();
    const { value: enteredBrand,
        valueChangeHandler: brandChangeHandler,
        reset: resetBrand}              = useInput();
    const { value: enteredAmount,
        valueChangeHandler: amountChangeHandler,
        reset: resetAmount}             = useInput();
    const { value: enteredPrice,
        valueChangeHandler: priceChangeHandler,
        reset: resetPrice}              = useInput();
    const { value: enteredTitle,
        valueChangeHandler: titleChangeHandler,
        reset: resetTitle}              = useInput();
    const { value: enteredContent,
        valueChangeHandler: contentChangeHandler,
        reset: resetContent}            = useInput();
    const cancelHandler                 = () =>{
        resetProductTypeInput();
        resetBrand();
        resetAmount();
        resetPrice();
        resetContent();
        setImageInfo(null);
        setPrevImg(null);
        history.push("/admin");
    }
    const formFetchHandler      =   event =>{
        event.preventDefault();
        if(imageInfo === null){
            alert("사진을 첨부해주세요");
            return;
        }else{
            if(enteredCategory === '' || enteredBrand === '' || enteredAmount === '' || enteredPrice === '' ||
                enteredTitle === '' || enteredContent === ''){
                alert("빠진 내용이 있습니다.");
                return;
            }else{
                let productData = {
                    categoryIdx: parseInt(enteredCategory),
                    title: enteredTitle,
                    brand:enteredBrand,
                    quantity:enteredAmount,
                    price:enteredPrice,
                    content: enteredContent,
                    imageDtoList:[
                        {
                            imgName: imageInfo[0].imgName,
                            uuid: imageInfo[0].uuid,
                            path: imageInfo[0].path,
                        }
                    ],
                };
                axios.post(`/categories/${enteredCategory}/products`, productData, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                    .then(res => {
                    resetProductTypeInput();
                    resetBrand();
                    resetAmount();
                    resetPrice();
                    resetTitle();
                    resetContent();
                    setImageInfo(null);
                    console.log("성공");
                    history.push("/service/success");

                }).catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
            }
        }
    };

    return(
        <>
            <section className="cart-total-page spad">
                <Container>
                    <form action="#" className="checkout-form">
                        <Row>
                            <Col lg={12}>
                                <h3>상품등록</h3>
                            </Col>
                            <Col lg={9}>
                                <Row>
                                    <Col lg={2}>
                                        <p className="in-name">제목*</p>
                                    </Col>
                                    <Col lg={10}>
                                        <input required type="text" onChange={titleChangeHandler}/>
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
                                        <p className="in-name">재고*</p>
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
                                        {prevImg && <img src={prevImg} className={prevImg && "prevImg"} alt={"imagePreview"}/>}
                                        <div className="form-actions">
                                            <button type="button" className="btn btn-danger" onClick={cancelHandler}>취소</button>
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

export default ProductRegistrationForm;