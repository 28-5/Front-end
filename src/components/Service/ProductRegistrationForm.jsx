import Navbar from "../Navbar/Navbar";
import LoginNavBtn from "../Login/LoginNavBtn";
import Container from "@material-ui/core/Container";
import React, {useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import "./ProductRegistrationForm.css";
import Button from "@material-ui/core/Button";
import axios from "axios";
import LoaddingSpinner from "../UI/LoaddingSpinner";
import useInput from "../hooks/use-input";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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

const ProductRegistrationForm = () =>{
    const classes                       = useStyles();
    const { value: enteredSeller ,
        valueChangeHandler: sellerChangeHandler,
        reset: resetSellerInput}        = useInput();
    const { value: enteredPhone ,
        valueChangeHandler: phoneChangeHandler,
        reset: resetPhoneInput}         = useInput();
    const { value: enteredProductType,
        nameChangeHandler: productTypeNameChangeHandler,
        reset: resetProductTypeInput}   = useInput();
    const { value: enteredBrand,
        nameChangeHandler: brandNameChangeHandler,
        reset: resetBrand}              = useInput();
    const { value: enteredRate,
        valueChangeHandler: rateChangeHandler,
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
        // console.log("image: " + image);
        axios.post("/", {
            headers: { Authorization: `${localStorage.getItem("jwt")}`, 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            data: {
                // title: enteredSeller,
                // brand:,
                // rank:,
                // quantity:,
                // price:,
                // content: content,
                // image:,
            }
        }).then(res => {
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

        }).catch(err => {
            console.log(err.response.request);
        });
    };


    return(
        <>
            <Navbar />
            <LoginNavBtn />
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
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="타이틀리스트" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>타이틀리스트</span>
                            </label>
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="캘러웨이" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>캘러웨이</span>
                            </label>
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="테일러메이드" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>테일러메이드</span>
                            </label>
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="핑" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>핑</span>
                            </label>
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="미즈노" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>미즈노</span>
                            </label>
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="클리브랜드" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>클리브랜드</span>
                            </label>
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="혼마" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>혼마</span>
                            </label>
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="PXG" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>PXG</span>
                            </label>
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="코브라킹" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>코브라킹</span>
                            </label>
                            <label className="form-checkbox-label" onClick={brandNameChangeHandler}>
                                <input name="브리지스톤" className="form-checkbox-field" type="checkbox"/>
                                <i className="form-checkbox-button"></i>
                                <span>브리지스톤</span>
                            </label>
                        </div>
                        <div className="form-element form-select">
                            <InputLabel id="demo-controlled-open-select-label" >제품 등급</InputLabel>
                            <Select labelId="demo-simple-select-label" className="rate" onChange={rateChangeHandler} >
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
                            <ImageUpload />
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