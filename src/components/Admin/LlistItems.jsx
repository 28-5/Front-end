import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./ListItems.css";

export const mainListItems = (

    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <Link to={"/service/seller/request"}><ListItemText>상품등록</ListItemText></Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <HashLink smooth to='/admin/#productControl' ><ListItemText>상품관리</ListItemText></HashLink>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <HashLink smooth to='/admin/#userRequest' ><ListItemText>판매신청현황</ListItemText></HashLink>
        </ListItem>
    </div>
);