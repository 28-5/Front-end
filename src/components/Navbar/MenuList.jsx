import React from "react";
import {Link} from "react-router-dom";
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
    link:{
        textDecoration: "none",
        color: "black"
    }
}));



const MenuList = props => {
    const [isOpen, setOpen] = React.useState(false);
    const classes = useStyles();
    const listClick = () => {
        setOpen(!isOpen);
    };
    const menu_name = props.menu.map(name => {
        return Object.keys(name).toString();
    });
    const menu_addr = props.menu.map(addr => {
        return Object.values(addr).toString();
    });

    return (
        <>
            <ListItem button onClick={listClick} component={menu_name[0] === "쇼핑하기" && Link} to={menu_name[0] === "쇼핑하기" && menu_addr[0]} >
                <ListItemIcon>
                    {menu_name[0] === "소개"? <InfoIcon/>: (menu_name[0] ==="쇼핑하기"? <LocalMallIcon/>: <QuestionAnswerIcon/>)}
                </ListItemIcon>
                <ListItemText primary={<Typography className={classes.menuTxt}>{menu_name[0]}</Typography>}/>
                {isOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.menu.map(m => (
                        <ListItem button key={m} className={classes.nested} component={Link} to={Object.values(m).toString()}>
                            {Object.keys(m).toString() !== menu_name[0] && <ListItemText primary={<Typography
                                className={[classes.menuTxt, classes.subMenuTxt]}>{Object.keys(m).toString()}</Typography>}/>}
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    );
}

export default MenuList;