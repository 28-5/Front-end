import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    carouselSlider:{
        top: -20,
        zIndex: -1
    },
    wrap:{
        position:"relative",
    },
    sliderImg:{
        width:"100%",
        height: "400px",
        objectFit: "fill",

        [theme.breakpoints.down('md')]: {
            height: "300px",
        },
        [theme.breakpoints.down('sm')]: {
            height: "200px",
        },
    },
    imgTxt:{
        position:"absolute",
        textAlign:"center",
        fontSize:"100px"
    },
    arrowIcon:{
      fontSize: 40,
        color: "grey"
    },
    nextArrow:{
        position:"relative",
        bottom: "11.1rem",
        float:"right"
    },

    prevArrow:{
        position:"relative",
        top: "11.1rem",
        zIndex: "1"
        // float:"left"
    }

}))


const ShoppingCarousel = () => {
    const classes = useStyles();

    const NextArrow = (props) => {
        return (
        <span className={classes.nextArrow} onClick={props.onClick}>
            <ArrowForwardIosIcon className={classes.arrowIcon}/>
        </span>
    );
}
    const PrevArrow = (props) => {
        return (
            <span className={classes.prevArrow} onClick={props.onClick}>
            <ArrowBackIosIcon className={classes.arrowIcon}/>
        </span>
        );
    }

    const settings = {
        dots: true,
        slidesToShow: 1,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 5,
        autoplay: true,
        nextArrow: <NextArrow type="next"/>,
        prevArrow: <PrevArrow type="prev"/>,
    };

    return (
            <Slider {...settings} className={classes.carouselSlider}>
                <div className={classes.wrap}>
                    <img src="img/carousel/img1.jpg" className={classes.sliderImg}/>
                    <div className={classes.imgTxt}>
                        <Typography>hiii</Typography>
                    </div>
                </div>
                <div>
                    <img src="img/carousel/img2.jpg" className={classes.sliderImg}/>
                </div>
                <div>
                    <img src="img/carousel/img3.jpg" className={classes.sliderImg}/>
                </div>
                <div>
                    <img src="img/carousel/img4.jpg" className={classes.sliderImg}/>
                </div>
                <div>
                    <img src="img/carousel/img5.jpg" className={classes.sliderImg}/>
                </div>
            </Slider>

    );
};

export default ShoppingCarousel;