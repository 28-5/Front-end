import React from "react";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    cart_Items:{
        margin: "auto",
        width: "90%",
        height: "30%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    image_box:{
        width: "15%",
        textAlign: "center",
    },
    cartImg:{
        height: "180px",

        [theme.breakpoints.down('md')]: {
            height: "120px",
        },
        [theme.breakpoints.down('sm')]: {
            height: "100px",
        },
    },
    about:{
        height: "100%",
        width: "35%",
        textAlign:"left",
        wordBreak: "break-all",
        [theme.breakpoints.down('md')]: {
            width: "30%",
            paddingLeft: 10
        },
        [theme.breakpoints.down('sm')]: {
            width: "30%",
            paddingLeft: 40,
        },
    },
    title:{
        marginTop: 6,
        lineHeight: "30px",
        fontSize: "32px",
        fontFamily: "twayair",
        fontWeight: "800",
        color: "#202020",

        [theme.breakpoints.down('md')]: {
            marginTop: 25,
            fontSize: "18px",
            lineHeight: "15px",
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 33,
            fontSize: "15px",
            lineHeight: "15px",
        },
    },
    subtitle:{
        lineHeight: "30px",
        fontSize: "18px",
        fontFamily: "twayair",
        fontWeight: "600",
        color: "#909090",

        [theme.breakpoints.down('md')]: {
            lineHeight: "15px",
            fontSize: "14px"
        },
        [theme.breakpoints.down('sm')]: {
            lineHeight: "10px",
            fontSize: "14px",
        },
    },
    counter:{
        width: "18%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        [theme.breakpoints.down('md')]: {
            width: "15%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "15%",
        },
    },
    btn:{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: "#d9d9d9",
        fontSize: "20px",
        fontFamily: "twayair",
        fontWeight: 900,
        color: "#202020",
        cursor: "pointer",

        [theme.breakpoints.down('md')]: {
            width: "10px",
            height: "20px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "10px",
            height: "15px",
        },
    },
    count:{
        fontSize: "20px",
        fontFamily: "twayair",
        fontWeight: 900,
        color: "#202020",

        [theme.breakpoints.down('md')]: {
            fontSize: "18px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px",
        },
    },
    prices:{
        height: "100%",
        textAlign: "right",
        [theme.breakpoints.down('sm')]: {
            paddingTop: 50,
            width: "35%"
        },
    },
    amount:{
        paddingTop: "20px",
        fontSize: "26px",
        fontFamily: "twayair",
        fontWeight: 800,
        color: "#202020",
        [theme.breakpoints.down('md')]: {
            paddingTop: "10px",
            fontSize: "22px",
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: "10px",
            fontSize: "15px",
        },
    },
    save:{
        paddingTop: "5px",
        paddingLeft: 10,
        fontSize: "14px",
        fontFamily: "twayair",
        fontWeight: 400,
        color: "#1687d9",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            fontSize: "14px",
        },
    },
    remove:{
        paddingTop: "5px",
        fontSize: "14px",
        fontFamily: "twayair",
        fontWeight: 400,
        color: "#E44C4C",
        cursor: "pointer",
    },

}));


const CartItems = props => {
    const classes       = useStyles();
    return props.data.map(item =>
        <div className={classes.cart_Items} key={item.cartIdx}>
            <div className={classes.image_box}>
                <img src={"/display?fileName="+item.imageDtoList.imageURL} className={classes.cartImg} alt="product"/>
            </div>
            <div className={classes.about}>
                <h1 className={classes.title}>{item.title}</h1>
                <h3 className={classes.subtitle}>{item.price.toLocaleString('ko-KR')}</h3>
            </div>
            <div className={classes.counter}>
                <div className={classes.btn} onClick={props.onAdd.bind(null, item)}>+</div>
                <div className={classes.count}>{item.quantity}</div>
                <div className={classes.btn} onClick={props.onRemove.bind(null, item.productIdx)}>-</div>
            </div>
            <div className={classes.prices}>
                <div className={classes.amount}>{(item.price*item.quantity).toLocaleString('ko-KR')}</div>
                <div className={classes.save}><u>나중에 주문</u></div>
                <div className={classes.remove} onClick={props.removeItem.bind(null, item.productIdx)}><u>제거</u></div>
            </div>
        </div>
    )
};

export default CartItems;