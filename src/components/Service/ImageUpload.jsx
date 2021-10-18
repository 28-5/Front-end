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
    input:{
        // display: 'none',
    },
    imgBtn:{
        paddingTop:20,
        float:"right"
    },
});

const ImageUpload = props => {
    const classes                       =   useStyles();
    const imgInput                      =   useRef();
    const [imgName, setImgName]         =   useState(null);
    const [loading, setLoadding]        =   useState(false);

    const imageFileHandler              =   event =>{
        setImgName(event.target.files[0]);
    };
    const imageUploadHandler            =   async (event) =>{
        event.preventDefault();
        setLoadding(true);
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
                <Button variant="contained" color="primary" component="span" onClick={imageUploadHandler}>
                    사진첨부
                </Button>
            </label>}
        </>
    );
};

export default ImageUpload;