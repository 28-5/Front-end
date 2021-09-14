import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
// import classes from "./ShoppingCarousel.module.css";
const useStyles = makeStyles((theme) => ({
    sliderImg:{
        width:"100%",
        height: "400px",
        objectFit: "fill",
    },
    imgTxt:{
        position:"absolute",
        textAlign:"center",
        zIndex:100,
        fontSize:"100px"
    },
    wrap:{
        position:"relative",
    }
}))


const ShoppingCarousel = () => {
    const classes = useStyles();
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true
    };

    return (
        <div>
            <Slider {...settings}>
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
            </Slider>
        </div>

        // <section>
        //     <div className={classes.container}>
        //         <div className={classes.carousel}>
        //             <input type="radio" name="slides" checked="checked" id="slide-1"/>
        //             <input type="radio" name="slides" id="slide-2"/>
        //             <input type="radio" name="slides" id="slide-3"/>
        //             <input type="radio" name="slides" id="slide-4"/>
        //             <input type="radio" name="slides" id="slide-5"/>
        //             <input type="radio" name="slides" id="slide-6"/>
        //             <ul className={classes.carousel__slides}>
        //                 <li className={classes.carousel__slide}>
        //                     <figure>
        //                         <div>
        //                             <img src="https://picsum.photos/id/1041/800/450" alt=""/>
        //                         </div>
        //                         <figcaption>
        //                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //
        //                         <span className={classes.credit}>Group 3</span>
        //                         </figcaption>
        //                     </figure>
        //                 </li>
        //                 <li className={classes.carousel__slide}>
        //                     <figure>
        //                         <div>
        //                             <img src="https://picsum.photos/id/1043/800/450" alt=""/>
        //                         </div>
        //                         <figcaption>
        //                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                             <span className={classes.credit}>Group3</span>
        //                         </figcaption>
        //                     </figure>
        //                                         </li>
        //                                         <li className={classes.carousel__slide}>
        //                                             <figure>
        //                                                 <div>
        //                                                     <img src="https://picsum.photos/id/1044/800/450" alt=""/>
        //                                                 </div>
        //                                                 <figcaption>
        //                                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                     <span className={classes.credit}>Photo: Steve Carter</span>
        //                                                 </figcaption>
        //                                             </figure>
        //                                         </li>
        //                                         <li className={classes.carousel__slide}>
        //                                             <figure>
        //                                                 <div>
        //                                                     <img src="https://picsum.photos/id/1045/800/450" alt=""/>
        //                                                 </div>
        //                                                 <figcaption>
        //                                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                     <span
        //                                                         className={classes.credit}>Photo: Aleksandra Boguslawska</span>
        //                                                 </figcaption>
        //                                             </figure>
        //                                         </li>
        //                                         <li className={classes.carousel__slide}>
        //                                             <figure>
        //                                                 <div>
        //                                                     <img src="https://picsum.photos/id/1049/800/450" alt=""/>
        //                                                 </div>
        //                                                 <figcaption>
        //                                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                     <span className={classes.credit}>Photo: Rosan Harmens</span>
        //                                                 </figcaption>
        //                                             </figure>
        //                                         </li>
        //                                         <li className={classes.carousel__slide}>
        //                                             <figure>
        //                                                 <div>
        //                                                     <img src="https://picsum.photos/id/1052/800/450" alt=""/>
        //                                                 </div>
        //                                                 <figcaption>
        //                                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                     <span className={classes.credit}>Photo: Annie Spratt</span>
        //                                                 </figcaption>
        //                                             </figure>
        //                                         </li>
        //                                     </ul>
        //                                     <ul className={classes.carousel__thumbnails}>
        //                                         <li>
        //                                             <label htmlFor="slide-1"><img
        //                                                 src="https://picsum.photos/id/1041/150/150" alt=""/></label>
        //                                         </li>
        //                                         <li>
        //                                             <label htmlFor="slide-2"><img
        //                                                 src="https://picsum.photos/id/1043/150/150" alt=""/></label>
        //                                         </li>
        //                                         <li>
        //                                             <label htmlFor="slide-3"><img
        //                                                 src="https://picsum.photos/id/1044/150/150" alt=""/></label>
        //                                         </li>
        //                                         <li>
        //                                             <label htmlFor="slide-4"><img
        //                                                 src="https://picsum.photos/id/1045/150/150" alt=""/></label>
        //                                         </li>
        //                                         <li>
        //                                             <label htmlFor="slide-5"><img
        //                                                 src="https://picsum.photos/id/1049/150/150" alt=""/></label>
        //                                         </li>
        //                                         <li>
        //                                             <label htmlFor="slide-6"><img
        //                                                 src="https://picsum.photos/id/1052/150/150" alt=""/></label>
        //                                         </li>
        //                                     </ul>
        //         </div>
        //     </div>
        // </section>
    );
};

export default ShoppingCarousel;