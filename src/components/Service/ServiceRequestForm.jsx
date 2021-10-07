import Navbar from "../Navbar/Navbar";
import LoginNavBtn from "../Login/LoginNavBtn";
import Container from "@material-ui/core/Container";
import React, {useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import "./ServiceRequestForm.css";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import useInput from "../hooks/use-input";
import axios from "axios";
import ImageUpload from "./ImageUpload";
const useStyles = makeStyles({
    mainContainer:{
        paddingLeft:"260px",
        paddingTop: "0px",
        height:"100%",
    },

});


const ServiceRequestForm = () => {
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
    const { value: enteredPickup,
        valueChangeHandler: pickupChangeHandler,
        reset: resetPickup}             = useInput();
    const { value: entereDay,
        valueChangeHandler: dayChangeHandler,
        reset: resetday}                = useInput();
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
            resetPickup();
            resetProductTypeInput();
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
                      <legend className="form-legend">물품 픽업 신청</legend>
                      <div className="form-element form-input">
                          <input id="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9" className="form-element-field"
                                 placeholder="성함을 입력해주세요" type="input" required onChange={sellerChangeHandler}/>
                          <div className="form-element-bar"></div>
                          <label className="form-element-label"
                                 htmlFor="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9">성함</label>
                      </div>
                      <div className="form-element form-input">
                          <input id="field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz" className="form-element-field"
                                 placeholder=" " type="email" required onChange={phoneChangeHandler}/>
                          <div className="form-element-bar"></div>
                          <label className="form-element-label"
                                 htmlFor="field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz">연락처</label>
                          <small className="form-element-hint">연락 받으실 연락처</small>
                      </div>
                      <div className="form-checkbox form-checkbox-inline">
                          <div className="form-checkbox-legend">어떤 물건들인가요?</div>
                          <label className="form-checkbox-label" onClick={productTypeNameChangeHandler}>
                              <input name="rap" className="form-checkbox-field" type="checkbox"/>
                              <i className="form-checkbox-button"></i>
                              <span>골프공</span>
                          </label>
                          <label className="form-checkbox-label">
                              <input name="pop" className="form-checkbox-field" type="checkbox"/>
                              <i className="form-checkbox-button"></i>
                              <span>골프채</span>
                          </label>
                          <label className="form-checkbox-label">
                              <input name="rock" className="form-checkbox-field" type="checkbox"/>
                              <i className="form-checkbox-button"></i>
                              <span>장갑</span>
                          </label>
                          <label className="form-checkbox-label">
                              <input name="metal" className="form-checkbox-field" type="checkbox"/>
                              <i className="form-checkbox-button"></i>
                              <span>가방</span>
                          </label>
                          <label className="form-checkbox-label">
                              <input name="r_b" className="form-checkbox-field" type="checkbox"/>
                              <i className="form-checkbox-button"></i>
                              <span>기타</span>
                          </label>
                      </div>
                      <div className="form-element form-select">
                          <InputLabel id="demo-controlled-open-select-label">원하시는 픽업 방법을 선택해주세요</InputLabel>
                          <Select labelId="demo-simple-select-label" className="rate" value={enteredPickup} onChange={pickupChangeHandler} >
                              <MenuItem value="1">리본 픽업 서비스 (3,000)</MenuItem>
                              <MenuItem value="2">택배(2,500)</MenuItem>
                              <MenuItem value="3">지점 방문</MenuItem>
                          </Select>
                      </div>
                      <div className="form-radio form-radio-block">
                          <div className="form-radio-legend">리본 픽업 - 희망 날짜</div>
                          <label className="form-radio-label">
                              <input name="eat" className="form-radio-field" type="radio" value="월" onClick={dayChangeHandler}/>
                              <i className="form-radio-button"></i>
                              <span>월</span>
                          </label>
                          <label className="form-radio-label">
                              <input name="eat" className="form-radio-field" type="radio" value="수" onClick={dayChangeHandler}/>
                              <i className="form-radio-button"></i>
                              <span>수</span>
                          </label>
                          <label className="form-radio-label">
                              <input name="eat" className="form-radio-field" type="radio" value="금" onClick={dayChangeHandler}/>
                              <i className="form-radio-button"></i>
                              <span>금</span>
                          </label>
                          <label className="form-radio-label">
                              <input name="eat" className="form-radio-field" type="radio" value="일" onClick={dayChangeHandler}/>
                              <i className="form-radio-button"></i>
                              <span>일</span>
                          </label>
                      </div>
                      <div className="form-element form-textarea">
                            <textarea id="field-3naeph-0f3yuw-x153ph-dzmahy-qhkmgm" className="form-element-field" onChange={contentChangeHandler}
                                      placeholder=" "></textarea>
                          <div className="form-element-bar"></div>
                          <label className="form-element-label" htmlFor="field-3naeph-0f3yuw-x153ph-dzmahy-qhkmgm">
                              전달사항
                          </label>
                          <ImageUpload/>

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

export default ServiceRequestForm;