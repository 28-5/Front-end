import React, {useCallback, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";
import Dashboard from "./components/Admin/Dashboard";
import ShoppingMain from "./components/Shopping/ShoppingMain";
import DetailedProduct from "./components/Shopping/Product/DetailedProduct";
import CartProvider from "./store/CartProvider";
import Introduction from "./components/Introduction/Introduction";
import Team from "./components/Introduction/Team";
import Business from "./components/Introduction/Business";
import Manual from "./components/Introduction/Manual";
import ProductRegistrationForm from "./components/Service/ProductRegistrationForm";
import Notice from "./components/Board/Notice";
import QnA from "./components/Board/QnA";
import FaQ from "./components/Board/FaQ";
import WrtForm from "./components/Board/WrtForm";
import "./App.css";
import Footer from "./components/Main/Footer";
import JoinSuccess from "./components/Join/JoinSuccess";
import PageNotFound from "./components/PageNotFound";
import LoggedInMain from "./components/Main/LoggedInMain";
import MyPageMain from "./components/MyPage/MyPageMain";
import axios from "axios";
import {BoardDataUse} from "./components/Board/BoardDataUse";
import Article from "./components/Board/Article";
import ServiceRequestForm from "./components/Service/ServiceRequestForm";

function App() {
    const [userEmail, setUserEmail]             = useState(false);
    const [hasToken, setHasToken]             = useState(false);
    const [cartIsShown, setCartIsShown]         = useState(false);
    const [noticeList, qnaList]                 = BoardDataUse([]);

    const showCartHandler = ()=>{
        setCartIsShown(true);
    };
    const hideCartHandler = ()=>{
        setCartIsShown(false);
    };

    useEffect(() => {
        if (hasToken !== false) {
            setHasToken(true);
        }
    }, [ hasToken]);




    console.log(noticeList);
  return (
    <Router>
        <CartProvider>
          <Switch>

              {hasToken === true? <Route exact path="/" render={props =><LoggedInMain tokenHandler={setHasToken} userEmail={userEmail} {...props}/> }/>
                                 : <Route exact path="/" component={Main}/>}
              {hasToken === true? <Route exact path="/main" render={props =><LoggedInMain tokenHandler={setHasToken} userEmail={userEmail} {...props} /> }/>
                                 : <Route exact path="/main" component={Main}/>}

              {/*Introduction*/}
              <Route exact path="/introduction" component={Introduction}/>
              <Route exact path="/introduction/team" component={Team}/>
              <Route exact path="/introduction/business" component={Business}/>
              <Route exact path="/introduction/manual" component={Manual}/>

              {/*board*/}
              <Route exact path="/notice" render={props => <Notice noticeData={noticeList} {...props}/> }/>
              <Route exact path="/notice/write" render={props => <WrtForm path="/notice" {...props} />}/>
              <Route exact path="/qna"  render={props => <QnA qnaData={qnaList} {...props}/> } />
              <Route exact path="/qna/article/:postNum" render={props => <Article/> } />
              <Route exact path="/qna/write" render={props => <WrtForm path="/qna"  {...props} />} />
              <Route exact path="/faq" component={FaQ}/>

              {/*service*/}
              <Route exact path="/service/request" component={ServiceRequestForm}/>
              <Route exact path="/service/seller/request" component={ProductRegistrationForm}/>

              {/*Login & Join*/}
              <Route exact path="/member/login" render={props => <Login hasToken={setHasToken} setEmail={setUserEmail} {...props}/>} />
              <Route exact path="/member/register" component={Join}/>
              <Route exact path="/welcome" component={JoinSuccess}/>
              <Route exact path="/admin" component={Dashboard}/>

              {/*Mypage*/}
              <Route exact path="/mypage" component={MyPageMain}/>

              {/*Shop Page*/}
              <Route exact path="/shop" component={ShoppingMain}/>
              <Route exact path={"/shop/product/:productNum"} render={
                      props => <DetailedProduct showCart={showCartHandler} closeCart={hideCartHandler}
                                                isShown={cartIsShown} setCart={setCartIsShown} {...props}/> } />
              {/*Page Not Found Page*/}
              <Route path="/*" component={PageNotFound} />
          </Switch>
        </CartProvider>
        <Footer />
    </Router>
  );
}

export default App;
