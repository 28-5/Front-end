import CartModal from "./CartModal";
import React, {useContext} from "react";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import CartContext from "../../store/Cart-context";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: "50%",
        height: "75%",
        borderRadius: 20,
        backgroundColor: "#fff",
        boxShadow: "0px 15px 30px #84bc44",
        // boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    header:{
      margin: "auto",
      width: "90%",
      height: "15%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    heading:{
        fontSize: 20,
        fontFamily :"twayair",
        fontWeight: 700,
        color: "#2F3841",
    },
    action:{
        fontSize: 20,
        fontFamily: "twayair",
        fontWeight: 600,
        color: "#e44c4c",
        cursor: "pointer",
        borderBottom: "1px solid #E44C4C",
    },
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
        height: "120px"
    },
    about:{
        height: "100%",
    },
    title:{
        paddingTop: "5px",
        lineHeight: "10px",
        fontSize: "32px",
        fontFamily: "twayair",
        fontWeight: "800",
        color: "#202020",
    },
    subtitle:{
        lineHeight: "10px",
        fontSize: "18px",
        fontFamily: "twayair",
        fontWeight: "600",
        color: "#909090",
    },
    counter:{
        width: "15%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
    },
    count:{
        fontSize: "20px",
        fontFamily: "twayair",
        fontWeight: 900,
        color: "#202020",
    },
    prices:{
        height: "100%",
        textAlign: "right",
    },
    amount:{
        paddingTop: "20px",
        fontSize: "26px",
        fontFamily: "twayair",
        fontWeight: 800,
        color: "#202020",
    },
    save:{
        paddingTop: "5px",
        fontSize: "14px",
        fontFamily: "twayair",
        fontWeight: 600,
        color: "#1687d9",
        cursor: "pointer",
    },
    remove:{
        paddingTop: "5px",
        fontSize: "14px",
        fontFamily: "twayair",
        fontWeight: 600,
        color: "#E44C4C",
        cursor: "pointer",
    },
    hr:{
        width: "66%",
        float: "right",
        marginRight: "5%",
    },
    checkout:{
        width: "28%",
        float: "right",
        marginRight: "5%",
    },
    total:{
        width: "100%",
        display:"flex",
        justifyContent: "space-between",
    },
    subtotal:{
        fontSize: "22px",
        fontFamily: "twayair",
        fontWeight: 700,
        color: "#202020",
    },
    items:{
        fontSize: "16px",
        fontFamily: "twayair",
        fontWeight: 500,
        color: "#909090",
        lineHeight: "10px",
    },
    total_amount:{
        fontSize: "36px",
        fontFamily: "twayair",
        fontWeight: 900,
        color: "#202020",
    },
    button:{
        marginTop: "5px",
        width: "100%",
        height: "40px",
        border:"none",
        background: "linear-gradient(to bottom right, #B8D7FF, #8EB7EB)",
        borderRadius: "20px",
        cursor: "pointer",
        fontSize: "16px",
        fontFamily: "twayair",
        fontWeight: 600,
        color: "#202020",
    },


}));

const getModalStyle = () =>  {
    const top = 50 ;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const Cart = props => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const cartItemAddHandler = item => {
        cartCtx.addItem({
            ...item, amount:1
        });
    };

    const cartItems =
            cartCtx.items.map(item =>
                <div className={classes.cart_Items}>
                    <div className={classes.image_box}>
                        <img src={props.data.img} className={classes.cartImg}/>
                    </div>
                    <div className={classes.about}>
                        <h1 className={classes.title}>{props.data.title}</h1>
                        <h3 className={classes.subtitle}>{props.data.price}</h3>
                    </div>
                    <div className={classes.counter}>
                        <div className={classes.btn}>+</div>
                        <div className={classes.count}>2</div>
                        <div className={classes.btn}>-</div>
                    </div>
                    <div className={classes.prices}>
                        <div className={classes.amount}>{item.price}</div>
                        <div className={classes.save}><u>나중에 주문하기</u></div>
                        <div className={classes.remove}><u>제거</u></div>
                    </div>
                </div>
                );
// <div className={classes.cart_Items}>
//             <div className={classes.image_box}>
//                 <img src={props.data.img} className={classes.cartImg}/>
//             </div>
//             <div className={classes.about}>
//                 <h1 className={classes.title}>{props.data.title}</h1>
//                 <h3 className={classes.subtitle}>{props.data.price}</h3>
//             </div>
//             <div className={classes.counter}>
//                 <div className={classes.btn}>+</div>
//                 <div className={classes.count}>2</div>
//                 <div className={classes.btn}>-</div>
//             </div>
//             <div className={classes.prices}>
//                 <div className={classes.amount}>$2.99</div>
//                 <div className={classes.save}><u>나중에 주문하기</u></div>
//                 <div className={classes.remove}><u>제거</u></div>
//             </div>
//         </div>;

    return(
        <>
            <CartModal isOpen={props.isOpen} onClose={props.onClose}>
                <div style={modalStyle} className={classes.paper}>
                    <div className={classes.header}>
                        <Typography variant={"h3"} className={classes.heading}>장바구니</Typography>
                        <Typography variant={"h5"} className={classes.action}>모두 지우기</Typography>
                    </div>
                    {cartItems}

                    <hr className={classes.hr}/>
                        <div className={classes.checkout}>
                            <div className={classes.total}>
                                <div>
                                    <div className={classes.subtotal}>전체 금액</div>
                                    <div className={classes.items}>2 items</div>
                                </div>
                                <div className={classes.total_amount}>$6.18</div>
                            </div>
                            <button className={classes.button}>주문하기</button>
                        </div>
                </div>
            </CartModal>
        </>
    );
};

export default Cart;