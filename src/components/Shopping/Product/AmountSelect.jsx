import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: 10,
        width: "100%",
        float:"right"
    },
    selectLabel:{
        color: "#222222",
        fontSize: "20px",
        fontFamily: "twayair",
        fontWeight: 400,
    },
}));

const AmountSelect = props =>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        props.setAmount(event.target.value);
        console.log(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return(
        <div>
            <FormControl className={classes.formControl} required >
                <InputLabel id="demo-controlled-open-select-label" className={classes.selectLabel}>원하시는 만큼의 수량을 선택해주세요</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={props.minimumAmount}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

export default AmountSelect;