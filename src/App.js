import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";
import Dashboard from "./components/Admin/Dashboard";
import ShoppingMain from "./components/Shopping/ShoppingMain";
import DetailedProduct from "./components/Shopping/Product/DetailedProduct";
import Introduction from "./components/Introduction/Introduction";
import Team from "./components/Introduction/Team";
import Business from "./components/Introduction/Business";
import Manual from "./components/Introduction/Manual";
import ProductRegistrationForm from "./components/Service/ProductRegistrationForm";
import Notice from "./components/Board/Notice";
import QnA from "./components/Board/QnA";
import FaQ from "./components/Board/FaQ";
import WrtForm from "./components/Board/WrtForm";
import JoinSuccess from "./components/Join/JoinSuccess";
import PageNotFound from "./components/PageNotFound";
import MyPageMain from "./components/MyPage/MyPageMain";
import {BoardDataUse} from "./components/Board/BoardDataUse";
import Article from "./components/Board/Article";
import ServiceRequestForm from "./components/Service/ServiceRequestForm";
import Order from "./components/Shopping/Order/Order";
import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import RegistrationSuccess from "./components/Service/RegistrationSuccess";
import ModificationForm from "./components/Board/ModificationForm";
import {getCartData, sendCartData} from "./store/cart-actions";
import Layout from "./components/Layout/Layout";
import {getProductdata} from "./store/product-actions";
import Test from "./components/Test";
import {authActions} from "./store/auth-slice";

let isInitial = true;

function App() {
    const dispatch                              = useDispatch();
    const cart                                  = useSelector(state => state.cart);
    const [userEmail, setUserEmail]             = useState(false);
    const [cartIsShown, setCartIsShown]         = useState(false);
    const [noticeList, qnaList]                 = BoardDataUse([]);

    const showCartHandler = ()=>{
        setCartIsShown(true);
    };
    const hideCartHandler = ()=>{
        setCartIsShown(false);
    };

    useEffect(() => {
        if(localStorage.getItem("jwt")){
            dispatch(authActions.auth());
            console.log("auth");
        }else{
            console.log("no auth");
        }
    }, [dispatch]);
    useEffect(() => {
        dispatch(getCartData());
        dispatch(getProductdata());
    }, [dispatch]);
    useEffect(() => {
        if(isInitial){
            isInitial = false;
            return
        };
        if(cart.changed){
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);


  return (
    <Router>
          <Switch>
              <Layout>
              {/*
                1. 상품등록 및 리스트 가져오는거 백엔드 체크.
              */}
                  <Route exact path="/test"component={Test} />
                  {/*Shop Main Page*/}
                  <Route exact path="/">
                      <Redirect to="/shop"/>
                  </Route>
                  <Route exact path="/shop" render={props => <ShoppingMain {...props}/>}/>
                  <Route exact path={"/shop/product/:productNum"} render={
                      props => <DetailedProduct {...props}/> } />
                  <Route exact path="/shop/order" render={props => <Order {...props}/>}/>
                  {/*Company*/}
                  <Route exact path="/company" render={props =><Main {...props} /> }/>

                  {/*Introduction*/}
                  <Route exact path="/introduction" component={Introduction}/>
                  <Route exact path="/introduction/team" component={Team}/>
                  <Route exact path="/introduction/business" component={Business}/>
                  <Route exact path="/introduction/manual" component={Manual}/>

                  {/*board*/}
                  <Route exact path="/notices" render={props => <Notice noticeData={noticeList} {...props}/> }/>
                  <Route exact path="/notices/article/:postNum" render={props => <Article {...props}/> } />
                  <Route exact path="/notices/write" render={props => <WrtForm path="/notices" {...props} />}/>
                  <Route exact path="/notices/modify" render={props => <ModificationForm path="/notices" {...props} />}/>
                  <Route exact path="/qnas"  render={props => <QnA qnaData={qnaList} {...props}/> } />
                  <Route exact path="/qnas/article/:postNum" render={props => <Article {...props}/> } />
                  <Route exact path="/qnas/write" render={props => <WrtForm path="/qnas"  {...props} />} />
                  <Route exact path="/qnas/modify" render={props => <ModificationForm path="/qnas"  {...props} />} />
                  <Route exact path="/faq" component={FaQ}/>

                  {/*service*/}
                  <Route exact path="/service/request" render={props => <ServiceRequestForm {...props} />}/>
                  <Route exact path="/service/seller/request" render={props => <ProductRegistrationForm {...props} />}/>
                  <Route exact path="/service/success" component={RegistrationSuccess}/>

                  {/*Login & Join*/}
                  <Route exact path="/member/login" render={props => <Login setEmail={setUserEmail} {...props}/>} />
                  <Route exact path="/member/register" component={Join}/>
                  <Route exact path="/welcome" component={JoinSuccess}/>
                  <Route exact path="/admin" component={Dashboard}/>

                  {/*Mypage*/}
                  <Route exact path="/mypage" component={MyPageMain}/>

              {/*Page Not Found Page*/}
              <Route path="/*" component={PageNotFound} />
         </Layout>
          </Switch>
    </Router>
  );
}

export default App;
