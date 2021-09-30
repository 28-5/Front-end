import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from "./MenuList";
import Typography from '@material-ui/core/Typography';
import {Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(127, 200, 49, 1)',
            outline: '1px solid slategrey'
        }
    },
    root: {
        display: 'flex',
    },
    title:{
        fontSize: "30px",
        fontWeight:"bold",
        paddingTop: "21px",
        paddingBottom: "21px",
        color: "#84bc44",
        textDecoration:"none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        scrollbarWidth: "10px",
        msOverflowStyle: "none",
        scrollBehavior: "smooth",
        paddingTop: 0,
        [theme.breakpoints.down('xs')]: {
            display:"none",

        },
    },
    listTxt:{
        fontFamily: "twayair",
        color:"black"
    },
    list:{
        padding: "20px 0px"
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        display:"flex",
        alignContent:"center"
    },

    link:{
        color:"black"
    }
}));


export default function Navbar() {
    const classes = useStyles();

    const menu1 = [
        {소개: "/introduction"},
        {회사: "/introduction"},
        {팀: "/introduction/team"},
        {사업: "/introduction/business"},
        {토큰메뉴얼: "/introduction/manual"},
    ];
    const menu2 = [
        {쇼핑하기: "/shop"}
        ];
    const menu3 = [
        {판매등록: "/service/request"},
        {서비스신청: "/service/request"},
        ];
    const menu4 = [
        {"공지 및 문의": "/notice"},
        {공지사항: "/notice"},
        {QnA: "/qna"},
        {질문등록: "/qna/write"},
        {자주묻는질문: "/faq"},
    ];


    return (
        <div className={classes.root}>
            <CssBaseline />

                <PersonIcon/>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
            <Typography variant={"h1"} className={classes.title} align={"center"}><Link to="/" className={classes.title}>REBORN</Link></Typography>
                <Divider />
                <List className={classes.list}>
                    <MenuList menu={menu1} />
                </List>
                <List className={classes.list}>
                    <MenuList menu={menu4}/>
                </List>
                <List className={classes.list}>
                    <MenuList menu={menu2}/>
                </List>
                <List className={classes.list}>
                    <MenuList menu={menu3}/>
                </List>
                <Divider />

                <List>
                <Link to="/admin" className={classes.link}>
                    <ListItem button key={"관리자모드"}>
                        <ListItemText primary={<Typography className={classes.listTxt}>관리자 페이지</Typography>} />
                    </ListItem>
                </Link>
                </List>
            </Drawer>
        </div>
    );
}