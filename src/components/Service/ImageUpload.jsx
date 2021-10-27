import Button from "@material-ui/core/Button";
import React, {useRef, useState} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    mainContainer:{
        paddingLeft:"260px",
        paddingTop: "0px",
        height:"100%",
    },
    imgBtn:{
        paddingTop:20,
        float:"right"
    },
    input:{
        float: "left",
        fontFamily: "twayair",
        fontSize: "20px",
    },
    btnText:{
        fontFamily: "twayair",
        fontSize: "15px",
        color: "#fff"
    }
});

const ImageUpload = props => {
    const classes                       =   useStyles();
    const imgInput                      =   useRef();
    const [imgName, setImgName]         =   useState(null);
    const [loading, setLoadding]        =   useState(false);
    const imageFileHandler              =   event =>{
        setImgName(event.target.files[0]);
        const reader      = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () =>{
        props.setPrevImg(reader.result);
        }
    };
    const imageUploadHandler            =   async (event) =>{
        event.preventDefault();
        setLoadding(true);
        alert("업로드 되었습니다")
        const formData    = new FormData();

        formData.append("uploadFiles", imgName);
        axios.post("/img", formData, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': "multipart/form-data"})
            .then(res => {
            console.log("Image upload success");
            props.setImgInfo(res.data);
            })
            .catch(err =>{
            console.log(err.request);
            console.log(err.response.data);
            console.log(err.response.message);
        });
        setLoadding(false);
    };
    return(
        <>
            {/*<input accept="image/*" ref={imgInput} className={classes.input} id="contained-button-file" multiple type="file" onChange={imageFileHandler}/>*/}
            <input accept="image/*" ref={imgInput} className={classes.input} id="contained-button-file" type="file" onChange={imageFileHandler}/>
            {imgName && <label htmlFor="contained-button-file" className={classes.imgBtn}>
                <Button variant="contained" color="primary" component="span" className={classes.uploadBtn} onClick={imageUploadHandler}>
                    <span className={classes.btnText}>사진첨부</span>
                </Button>
            </label>}
        </>
    );
};

export default ImageUpload;