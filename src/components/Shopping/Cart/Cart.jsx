import CartModal from "./CartModal";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const getModalStyle = () =>  {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const rand = () => {
    return Math.round(Math.random() * 20) - 10;
}


const Cart = props => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const cartItems = <ul>
        <li>{props.data.title}</li>
        <li>{props.data.price}</li>
    </ul>;

    return(
        <>
            <CartModal isOpen={props.isOpen} onClose={props.onClose} data={cartItems}>
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">장바구니</h2>
                    <p id="simple-modal-description">
                        {cartItems}
                    </p>
                </div>
            </CartModal>
        </>
    );
};

export default Cart;