import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    footer:{
        borderTop: "0.01px solid #E2E2E2",
        textAlign:"center",
        margin: "0px 15px",
        backgroundColor: "#fff",
        marginTop: 80,
        paddingTop: 20,

     },
    footerUl:{
      padding: 0,
      margin: 0,
    },
    footerLi:{
      listStyle: "none",
      display: "inline-block",
      margin: "0px 15px",
    },
    footer_menu:{
      marginTop: 20,
      paddingBottom: 20,
    },
    footerLink:{
      fontSize: 15,
      fontFamily :"twayair",
      color: "#7a7a7a",
      textTransform: "uppercase",
      transition: "all 0.5s",
      "&:hover":{
        color:"#3a8bcd"
      },
    },


}));

const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.footer}>
            <div className={classes.logo}>
                <img src="img/logo/logo.png" alt=""/>
            </div>
            <div className={classes.footer_menu}>
                <ul className={classes.footerUl}>
                    <li className={classes.footerLi}><Link to="/main" className={classes.footerLink}>메인</Link></li>
                    <li className={classes.footerLi}><Link to="/introduction" className={classes.footerLink}>회사소개</Link></li>
                    <li className={classes.footerLi}><Link to="#" className={classes.footerLink}>이용약관</Link></li>
                    <li className={classes.footerLi}><Link to="#" className={classes.footerLink}>개인정보처리방침</Link></li>
                    <li className={classes.footerLi}><Link to="#" className={classes.footerLink}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;