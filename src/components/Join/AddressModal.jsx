import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Address from "./Address";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "1000px"
    },

}));


const AddressModal = props => {
    const classes = useStyles();

    return(
        <>
            <Modal aria-labelledby="modal-title" aria-describedby="modal-content" className={classes.modal}
                open={props.modalOpen} onClose={props.closeModal} closeAfterTransition BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500,}}>
                <Address getAddress={props.getAddress}/>
            </Modal>
        </>
    )
};

export default AddressModal;