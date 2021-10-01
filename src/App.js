import React, {useState} from "react";
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
import ProductRegistrationForm from "./components/Shopping/Product_Registration/ProductRegistrationForm";
import Notice from "./components/Board/Notice";
import QnA from "./components/Board/QnA";
import FaQ from "./components/Board/FaQ";
import WrtForm from "./components/Board/WrtForm";
import {BoardDataUse} from "./components/Board/BoardDataUse";
import "./App.css";
import Footer from "./components/Main/Footer";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const [noticeList, qnaList]       = BoardDataUse([]);

    const showCartHandler = ()=>{
        setCartIsShown(true);
    };
    const hideCartHandler = ()=>{
        setCartIsShown(false);
    };
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/main" component={Main}/>
          <Route path="/introduction" exact component={Introduction}/>
          <Route path="/introduction/team" component={Team}/>
          <Route path="/introduction/business" component={Business}/>
          <Route path="/introduction/manual" component={Manual}/>

          <Route path="/service/request" exact component={ProductRegistrationForm}/>
          <Route path="/notice" component={Notice} noticeData={noticeList}/>
          <Route path="/notice/write" render={props => <WrtForm path="/notice" {...props} />}/>
          <Route path="/qna" exact component={QnA} qnaData={qnaList}/>
          <Route path="/qna/write" render={props => <WrtForm path="/qna" {...props} />} />
          <Route path="/faq" component={FaQ}/>

          <Route path="/member/login" component={Login}/>
          <Route path="/member/register" component={Join}/>
          <CartProvider>
              <Route exact path="/shop" component={ShoppingMain}/>
              <Route path={"/shop/product/:productNum"} render={
                  props => <DetailedProduct showCart={showCartHandler} closeCart={hideCartHandler}
                                            isShown={cartIsShown} setCart={setCartIsShown} {...props}/> } />
          </CartProvider>
          <Route path="/admin" component={Dashboard}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
