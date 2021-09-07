import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import Typography from '@material-ui/core/Typography';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InfoIcon from '@material-ui/icons/Info';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    menuTxt:{
        fontFamily: "twayair",
    },
    subMenuTxt:{
        color:"grey"

    },
}));



const MenuList = props => {
    const [isOpen, setOpen] = React.useState(false);
    const classes = useStyles();
    const listClick = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <ListItem button onClick={listClick}>
                <ListItemIcon>
                    {props.menu[0] === "소개"? <InfoIcon/>: (props.menu[0]==="쇼핑하기"? <LocalMallIcon/>: <QuestionAnswerIcon/>)}

                </ListItemIcon>
                <ListItemText primary={<Typography className={classes.menuTxt}>{props.menu[0]}</Typography>}/>
                {isOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.menu.map(m => (
                        <ListItem button key={m} className={classes.nested}>
                            {m !== props.menu[0] && <ListItemText primary={<Typography className={[classes.menuTxt, classes.subMenuTxt]}>{m}</Typography>}/>}
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    );
}

export default MenuList;