import CartModal from "./CartModal";
import React, {useContext} from "react";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import CartContext from "../../store/Cart-context";
import CartItems from "./CartItems";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: "60%",
        height: "80%",
        borderRadius: 20,
        backgroundColor: "#fff",
        boxShadow: "0px 15px 30px #84bc44",
        padding: theme.spacing(2, 4, 3),
        overflow: "auto",

        [theme.breakpoints.down('md')]: {
            width: "40%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "60%",
            height: "60%",
            top: 30,
            left: 300,
        },

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
        fontWeight: 500,
        color: "#e44c4c",
        cursor: "pointer",
        borderBottom: "1px solid #E44C4C",
        [theme.breakpoints.down('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
    },
    hr:{
        width: "66%",
        float: "right",
        marginRight: "5%",
    },
    checkout:{
        width: "36%",
        float: "right",
        marginRight: "5%",
    },
    total:{
        paddingTop:5,
        width: "100%",
        display:"flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
        [theme.breakpoints.down('sm')]: {
            height: "50px",
        },
    },
    subtotal:{
        fontSize: "22px",
        fontFamily: "twayair",
        fontWeight: 700,
        color: "#202020",
        [theme.breakpoints.down('md')]: {
            fontSize: "16px",
        },
    },
    items:{
        paddingTop:10,
        fontSize: "18px",
        fontFamily: "twayair",
        fontWeight: 500,
        color: "#909090",
        lineHeight: "10px",
        [theme.breakpoints.down('md')]: {
            fontSize: "16px",
        },
        [theme.breakpoints.down('sm')]: {
            // height: "50px",
            fontSize: "16px",
            lineHeight: 1
        },
    },
    total_amount:{
        fontSize: "36px",
        fontFamily: "twayair",
        fontWeight: 900,
        color: "#202020",
        [theme.breakpoints.down('md')]: {
            fontSize: "24px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "24px",
        },
    },
    button:{
        marginTop: "15px",
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
        [theme.breakpoints.down('md')]: {
            // height: "90px",
        },
        [theme.breakpoints.down('sm')]: {
            height: "50px",
            marginTop: 50
        },
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
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAllRemoveHandler = id =>{
        const findIndex = cartCtx.items.findIndex(item => item.id === id);
        const foundItemLength = cartCtx.items[findIndex].amount;
        for(var a = 0; a < foundItemLength ; a++){
            cartCtx.removeItem(id);
        }
    };
    const cartCleaner = () =>{
        cartCtx.cleanCart();
    };
    return(
        <>
            <CartModal isOpen={props.isOpen} onClose={props.onClose}>
                <div style={modalStyle} className={classes.paper}>
                    <div className={classes.header}>
                        <Typography variant={"h3"} className={classes.heading}>장바구니</Typography>
                        {hasItems && <Typography variant={"h5"} className={classes.action} onClick={cartCleaner}>모두 지우기</Typography>}
                    </div>
                    {<CartItems data={cartCtx} onAdd={cartItemAddHandler} onRemove={cartItemRemoveHandler} removeItem={cartItemAllRemoveHandler}/>}

                    <hr className={classes.hr}/>
                        <div className={classes.checkout}>
                            <div className={classes.total}>
                                <div>
                                    <div className={classes.subtotal}>전체 금액</div>
                                    <div className={classes.items}>전체수량: {props.numberOfItems}</div>
                                </div>
                                <div className={classes.total_amount}>{cartCtx.totalAmount.toLocaleString('ko-KR')}</div>
                            </div>
                            {hasItems && <button className={classes.button}>주문하기</button>}
                        </div>
                </div>
            </CartModal>
        </>
    );
};

export default Cart;