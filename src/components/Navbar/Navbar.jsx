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
import {Link} from "@material-ui/core";
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
        fontSize: "50px",
        fontWeight:"bold",
        paddingTop: "35px",
        paddingBottom: "60px",
        color: "#6c844c",
        textDecoration:"none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        // overflow:"hidden",
        // paddingTop: "100px",
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
}));


export default function Navbar() {
    const classes = useStyles();

    const menu1 = ["소개", "팀 소개", "사업 소개", "토큰 메뉴얼"];
    const menu2 = ["쇼핑하기", "친환경 골프공", "로스트볼", "리피니쉬"];
    const menu3 = ["Q&A", "공지사항", "자주묻는질문", "질문등록"];
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
            <Typography variant={"h1"} className={classes.title} align={"center"}><Link href="/" className={classes.title}>REBORN</Link></Typography>
                <Divider />
                <List className={classes.list}>
                    <MenuList menu={menu1}/>
                </List>
                <List className={classes.list}>
                    <MenuList menu={menu2}/>
                </List>
                <List className={classes.list}>
                    <MenuList menu={menu3}/>
                </List>
                <Divider />
                <List>
                    <ListItem button key={"관리자모드"}>
                        <ListItemText primary={<Typography className={classes.listTxt}>관리자 페이지</Typography>} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}