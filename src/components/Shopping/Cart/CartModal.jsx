import React from 'react';
import Modal from '@material-ui/core/Modal';


const CartModal = props => {

    return (
        <div>
            <Modal open={props.isOpen} onClose={props.onClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                        {props.children}
            </Modal>
        </div>
    );
}

export default CartModal;