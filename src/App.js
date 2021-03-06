import React, {useEffect} from "react";
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
import PageNotFound from "./components/PageNotFound";
import {BoardDataUse} from "./components/Board/BoardDataUse";
import Article from "./components/Board/Article";
import ServiceRequestForm from "./components/Service/ServiceRequestForm";
import Order from "./components/Shopping/Order/Order";
import {useDispatch, useSelector} from "react-redux";
import RegistrationSuccess from "./components/Service/RegistrationSuccess";
import ModificationForm from "./components/Board/ModificationForm";
import {clearCartData, getCartData, sendCartData} from "./store/cart-actions";
import Layout from "./components/Layout/Layout";
import {getProductdata} from "./store/product-actions";
import {authActions} from "./store/auth-slice";
import axios from "axios";
import ShoppingAllProducts from "./components/Shopping/ShoppingAllProducts";
import MyPageMain from "./components/MyPage/MyPageMain";
import ModifyUserInfo from "./components/MyPage/ModifyUserInfo";
import AuthRoute from "./components/AuthRoute";
import PaymentResult from "./components/Shopping/Order/Payment/PaymentResult";
import {getTokenPrice} from "./store/token-actions";
import ServiceRequestSuccess from "./components/Service/ServiceRequestSuccess";
import UserOrderRecord from "./components/MyPage/UserOrderRecord";
import JoinSuccess from "./components/Join/JoinSuccess";
import UserRequestRecord from "./components/MyPage/UserRequestRecord";
import ShoppingProductsPerCategory from "./components/Shopping/ShoppingProductsPerCategory";
import "./App.css";

let isInitial = true;

function App() {
    const dispatch                              = useDispatch();
    const isAuth                                = useSelector(state => state.auth.isAuthenticated);
    const cart                                  = useSelector(state => state.cart);
    const [noticeList, qnaList]                 = BoardDataUse([]);

    useEffect(() => {
        if(localStorage.getItem("jwt")){
            axios.get("/member", {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    const jwtToken    =   localStorage.getItem("jwt");
                    let jwt = require("jsonwebtoken");
                    let decode = jwt.decode(jwtToken);
                    let roles = decode.role.split(",");
                    let isManager = false;
                    for(let i=0; i< roles.length; i++) {
                        if(roles[i] === "ROLE_MANAGER"){
                            isManager = true;
                        }
                    }
                    dispatch(authActions.auth({
                        idx: res.data.idx,
                        email: res.data.email,
                        name: res.data.name,
                        password: res.data.password,
                        phone: res.data.phone,
                        address: res.data.address,
                        tokenAmount: res.data.tokenAmount,
                        walletAddress: res.data.walletAddress,
                        manager: isManager,
                    }));
                })
                .catch(err => console.log(err));
        }
    }, [dispatch]);
    useEffect(() => {
        dispatch(getCartData());
        dispatch(getProductdata());
        dispatch(getTokenPrice());
    }, [dispatch]);
    useEffect(() => {
        if(isInitial){
            isInitial = false;
            return;
        };
        if(cart.changed){
            dispatch(sendCartData(cart));
        }

        if(cart.clear){
            dispatch(clearCartData());
        }
    }, [cart, dispatch]);
  return (
    <Router>
        <Layout>
          <Switch>
                  {/*Shop Main Page*/}
                  <Route exact path="/">
                      <Redirect to="/shop"/>
                  </Route>
                  <Route exact path="/shop" render={props => <ShoppingMain {...props}/>}/>
                  <Route exact path="/shop/allproducts" component={ShoppingAllProducts}/>
                  <Route exact path="/shop/category/:categoryNum" component={ShoppingProductsPerCategory}/>
                  <Route exact path={"/shop/product/:productNum"} render={props => <DetailedProduct {...props}/> } />
                  <Route exact path="/shop/order" render={props => <Order {...props}/>}/>
                  <Route exact path="/payment/result" component={PaymentResult} />

                  {/*Company*/}
                  <Route exact path="/company" render={props =><Main {...props} /> }/>

                  {/*Introduction*/}
                  <Route exact path="/introduction" component={Introduction}/>
                  <Route exact path="/introduction/team" component={Team}/>
                  <Route exact path="/introduction/business" component={Business}/>
                  <Route exact path="/introduction/manual" component={Manual}/>

                  {/*Q&A, Notice*/}
                  <Route exact path="/notices" render={props => <Notice noticeData={noticeList} {...props}/> }/>
                  <Route exact path="/notices/article/:postNum" render={props => <Article {...props}/> } />
                  <Route exact path="/notices/write" render={props => <WrtForm path="/notices" {...props} />}/>
                  <Route exact path="/notices/modify" render={props => <ModificationForm path="/notices" {...props} />}/>
                  <Route exact path="/notices/answer" render={props => <WrtForm path="/notices" {...props} />}/>
                  <Route exact path="/qnas"  render={props => <QnA qnaData={qnaList} {...props}/> } />
                  <Route exact path="/qnas/article/:postNum" render={props => <Article {...props}/> } />
                  <Route exact path="/qnas/write" render={props => <WrtForm path="/qnas"  {...props} />} />
                  <Route exact path="/qnas/modify" render={props => <ModificationForm path="/qnas"  {...props} />} />
                  <Route exact path="/qnas/answer" render={props => <WrtForm path="/qnas"  {...props} />} />
                  <Route exact path="/faq" component={FaQ}/>

                  {/*Service*/}
                  <Route exact path="/service/request" render={props => <ServiceRequestForm {...props} />}/>
                  <Route exact path="/service/seller/request" render={props => <ProductRegistrationForm {...props} />}/>
                  <Route exact path="/service/success" component={RegistrationSuccess}/>
                  <Route exact path="/service/req-success" component={ServiceRequestSuccess}/>

                  {/*Login & Join*/}
                  <Route exact path="/member/login" render={props => <Login {...props}/>} />
                  <Route exact path="/member/register" component={Join}/>
                  <Route exact path="/member/success" component={JoinSuccess}/>

                  {/*Admin*/}
                  <Route exact path="/admin" component={Dashboard}/>

                  {/*Mypage*/}
                  <AuthRoute exact authenticated={isAuth} path="/mypage" render={props => <MyPageMain/>}/>
                  <Route exact path="/mypage/:userinfo" component={ModifyUserInfo}/>
                  <Route exact path="/mypage/order/list" component={UserOrderRecord}/>
                  <Route exact path="/mypage/request/list" component={UserRequestRecord}/>

                  {/*Page Not Found Page*/}
                  <Route component={PageNotFound} />
          </Switch>
         </Layout>
    </Router>
  );
}

export default App;
