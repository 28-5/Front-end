import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import axios from "axios";
import {useLocation} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";

const ModificationForm = props => {
    const location              = useLocation();
    const { data }              = location.state;
    let path                  =   props.path;
    const [title, setTitle]     =   useState(data.postTitle);
    const [content, setContent] =   useState(data.postContent);
    const titleChangeHandler    =   event =>{
        setTitle(event.target.value);
    };
    const contentChangeHandler  =   event =>{
        setContent(event.target.value);
    };
    const formFetchHandler      =   event =>{
        event.preventDefault();
        const modifiedData      ={
            idx: data.postNum,
            title:title,
            content:content,
        };
        axios.put(path, modifiedData,{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
                window.location.replace(path);
            }).catch(err => {
            console.log(err.request);
            console.log(err.response);
            console.log(err.response.message);
        });
    };
    return (
        <div className="contact-section">
            <Container className="container">
                <Row className="row">
                    <Col lg={8}>
                        <form action="#" className="contact-form">
                            <Row className="row">
                                <Col lg={12}>
                                    {/*<input type="text" placeholder="제목"/>*/}
                                    <FormControl placeholder="제목" aria-label="제목" aria-describedby="basic-addon2" value={title|| ''}
                                                 onChange={titleChangeHandler}/>
                                    <FormControl as="textarea" aria-label="내용" placeholder="내용" value={content || ''}
                                                 onChange={contentChangeHandler}/>
                                </Col>
                                <Col lg={12} className="text-right">
                                    <button type="button" className="formBtn" onClick={formFetchHandler}>수정하기</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col lg={3} className="offset-lg-1">
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
        </div>

        // <Container maxWidth="lg" className={classes.mainContainer}>
        //     <LoginNavBtn paddingNum={0}/>
        //     <form>
        //         <div className={classes.root}>
        //             <div>
        //                 <TextField id="standard-full-width"  style={{ margin: 8 }} placeholder="제목" onChange={titleChangeHandler}
        //                            inputProps={{style: {paddingLeft: 14}}} value={title|| ''}
        //                            fullWidth margin="normal" InputLabelProps={{shrink: true, }}/>
        //             </div>
        //             <div>
        //                 <TextField id="outlined-full-width"  style={{ margin: 8 }} placeholder="내용" onChange={contentChangeHandler}
        //                            fullWidth margin="normal" InputLabelProps={{shrink: true,}} variant="outlined" multiline rows={20}
        //                            value={content || ''}/>
        //             </div>
        //         </div>
        //         <div className={classes.formBtnDiv}>
        //             <Button variant="outlined" color="primary" className={classes.formBtn} onClick={formFetchHandler}>
        //                 수정하기
        //             </Button>
        //         </div>
        //     </form>
        // </Container>
    );
}

export default ModificationForm;