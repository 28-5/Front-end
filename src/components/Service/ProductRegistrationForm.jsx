import Container from "@material-ui/core/Container";
import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import "./ProductRegistrationForm.css";
import axios from "axios";
import useInput from "../hooks/use-input";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import ImageUpload from "./ImageUpload";
const useStyles = makeStyles({
    mainContainer:{
        paddingLeft:"260px",
        paddingTop: "0px",
        height:"100%",
    },
    input:{
        // display: 'none',
    },
    imgBtn:{
        paddingTop:20,
        float:"right"
    },
});

const ProductRegistrationForm = (props) =>{
    const classes                       = useStyles();
    const history                       = useHistory();
    const [imageInfo, setImageInfo]     = useState(null);
    const {valueChangeHandler: sellerChangeHandler,
        reset: resetSellerInput}        = useInput();
    const {valueChangeHandler: phoneChangeHandler,
        reset: resetPhoneInput}         = useInput();
    const {nameChangeHandler: productTypeNameChangeHandler,
        reset: resetProductTypeInput}   = useInput();
    const { value: enteredBrand,
        valueChangeHandler: brandChangeHandler,
        reset: resetBrand}              = useInput();
    const {valueChangeHandler: rateChangeHandler,
        reset: resetRate}               = useInput();
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

    const formFetchHandler      =   event =>{
        event.preventDefault();
        let productData = {
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
        ///categories/8/products
        axios.post(`/categories/${enteredContent}/products`, productData, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
            // axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
            // props.history.push(path);
            resetSellerInput();
            resetPhoneInput();
            resetProductTypeInput();
            resetBrand();
            resetRate();
            resetAmount();
            resetPrice();
            resetTitle();
            resetContent();
            setImageInfo(null);
            console.log("성공");
            // props.history.push("/service/success");
            history.push("/service/success");

        }).catch(err => {
            console.log(err.request);
            console.log(err.response.data);
            console.log(err.response.message);
        });
    };

    return(
        <>
            <Container maxWidth="xl" className={classes.mainContainer}>
                <form className="form-card">
                    <fieldset className="form-fieldset">
                        <legend className="form-legend">판매 물품 등록</legend>
                        <div className="form-element form-input">
                            <input id="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9" className="form-element-field"
                                   placeholder="판매자" type="input" required onChange={sellerChangeHandler}/>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label"
                                   htmlFor="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9">판매자</label>
                        </div>
                        <div className="form-element form-input">
                            <input id="field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz" className="form-element-field"
                                   placeholder=" " type="tel" required onChange={phoneChangeHandler}/>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label"
                                   htmlFor="field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz">연락처</label>
                            <small className="form-element-hint">연락 받으실 연락처</small>
                        </div>
                        <div className="form-checkbox form-checkbox-inline">
                            <div className="form-checkbox-legend">어떤 물건인가요?</div>
                            <label className="form-checkbox-label" onClick={productTypeNameChangeHandler}>
                                <input name="골프공" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>골프공</span>
                            </label>
                            <label className="form-checkbox-label" onClick={productTypeNameChangeHandler}>
                                <input name="골프채" className="form-checkbox-field" type="checkbox" onClick={productTypeNameChangeHandler}/>
                                <i className="form-checkbox-button"></i>
                                <span>골프채</span>
                            </label>
                            <label className="form-checkbox-label" onClick={productTypeNameChangeHandler}>
                                <input name="장갑" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>장갑</span>
                            </label>
                            <label className="form-checkbox-label" onClick={productTypeNameChangeHandler}>
                                <input name="가방" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>가방</span>
                            </label>
                            <label className="form-checkbox-label" onClick={productTypeNameChangeHandler}>
                                <input name="기타" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>기타</span>
                            </label>
                        </div>
                        <div className="form-checkbox form-checkbox-inline">
                            <div className="form-checkbox-legend">어떤 브랜드인가요?</div>
                            <Select labelId="demo-simple-select-label" className="rate" onClick={brandChangeHandler} defaultValue="" >
                                <MenuItem value="타이틀리스트">타이틀리스트</MenuItem>
                                <MenuItem value="캘러웨이">캘러웨이</MenuItem>
                                <MenuItem value="테일러메이드">테일러메이드</MenuItem>
                                <MenuItem value="핑">핑</MenuItem>
                                <MenuItem value="미즈노">미즈노</MenuItem>
                                <MenuItem value="클리브랜드">클리브랜드</MenuItem>
                                <MenuItem value="혼마">혼마</MenuItem>
                                <MenuItem value="PXG">PXG</MenuItem>
                                <MenuItem value="코브라킹">코브라킹</MenuItem>
                                <MenuItem value="브리지스톤">브리지스톤</MenuItem>
                            </Select>
                        </div>
                        <div className="form-element form-select">
                            <InputLabel id="demo-controlled-open-select-label" >제품 등급</InputLabel>
                            <Select labelId="demo-simple-select-label" className="rate" onClick={rateChangeHandler} defaultValue="" >
                                <MenuItem value="A+">A+</MenuItem>
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="B+">B+</MenuItem>
                            </Select>
                        </div>
                        <div className="form-element form-input">
                            <input id="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9" className="form-element-field" onChange={amountChangeHandler}
                                   placeholder="수량" type="number" required/>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label"
                                   htmlFor="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9">수량</label>
                        </div>
                        <div className="form-element form-input">
                            <input id="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9" className="form-element-field" onChange={priceChangeHandler}
                                   placeholder="수량" type="number" required/>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label"
                                   htmlFor="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9">가격</label>
                        </div>
                        <div className="form-element form-input">
                            <input id="field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz" className="form-element-field" onChange={titleChangeHandler}
                                   placeholder=" " type="text" required/>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label"
                                   htmlFor="field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz">게시글 제목</label>
                            <small className="form-element-hint">쇼핑사이트에 등록될 제목</small>
                        </div>
                        <div className="form-element form-textarea">
                            <textarea id="field-3naeph-0f3yuw-x153ph-dzmahy-qhkmgm" className="form-element-field" rows={10} onChange={contentChangeHandler}
                                      placeholder=" " required></textarea>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label" htmlFor="field-3naeph-0f3yuw-x153ph-dzmahy-qhkmgm">
                                상품내용
                            </label>
                            <ImageUpload setImgInfo={setImageInfo}/>
                        </div>
                    </fieldset>
                    <div className="form-actions">
                        <button className="form-btn" onClick={formFetchHandler}>전송</button>
                        <button className="form-btn-cancel -nooutline" type="reset">취소</button>
                    </div>
                </form>
            </Container>
        </>
    );
};

export default ProductRegistrationForm;