import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({

}));

const CartModal = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Modal open={props.isOpen} onClose={props.onClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                        {props.children}
            </Modal>
        </div>
    );
}

export default CartModal;