import ReactDOM from 'react-dom';
import Modal from '@material-ui/core/Modal';


const CartModal = props => {

    return (
        <>
            {ReactDOM.createPortal(<Modal open={props.isOpen} onClose={props.onClose}
                                          aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">

                        {props.children}
            </Modal>, document.getElementById("overlay-root"))}
        </>
    );
}

export default CartModal;