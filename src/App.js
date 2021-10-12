import React, {useCallback, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
import Footer from "./components/Main/Footer";
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

function App() {
    const isAuth                                = useSelector(state => state.auth.isAuthenticated);
    const [userEmail, setUserEmail]             = useState(false);
    const [cartIsShown, setCartIsShown]         = useState(false);
    const [noticeList, qnaList]                 = BoardDataUse([]);

    const showCartHandler = ()=>{
        setCartIsShown(true);
    };
    const hideCartHandler = ()=>{
        setCartIsShown(false);
    };

  return (
    <Router>
          <Switch>
              {/*
                1. 상품등록 및 리스트 가져오는거 백엔드 체크.
                2. 게시물 유저 정보가 없음.
                3. Q/A 21번 글 이후로 못 가져옴.
                4. 공지는 여전히 안 됨.
                5. db에서 권한 4로 바꾼 경우 로그인 안 됨.
                6.
              
              */}
              {/*Main*/}
              <Route exact path="/" render={props =><Main {...props} /> }/>}
              <Route exact path="/main" render={props =><Main {...props} /> }/>}

              {/*Introduction*/}
              <Route exact path="/introduction" component={Introduction}/>
              <Route exact path="/introduction/team" component={Team}/>
              <Route exact path="/introduction/business" component={Business}/>
              <Route exact path="/introduction/manual" component={Manual}/>

              {/*board*/}
              <Route exact path="/notice" render={props => <Notice noticeData={noticeList} {...props}/> }/>
              <Route exact path="/notice/write" render={props => <WrtForm path="/notice" {...props} />}/>
              <Route exact path="/notice/modify" render={props => <ModificationForm path="/notice" {...props} />}/>
              <Route exact path="/qna"  render={props => <QnA qnaData={qnaList} {...props}/> } />
              <Route exact path="/qna/article/:postNum" render={props => <Article {...props}/> } />
              <Route exact path="/qna/write" render={props => <WrtForm path="/qna"  {...props} />} />
              <Route exact path="/qna/modify" render={props => <ModificationForm path="/qna"  {...props} />} />
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

              {/*Shop Page*/}
              <Route exact path="/shop" render={props => <ShoppingMain {...props}/>}/>
              <Route exact path={"/shop/product/:productNum"} render={
                      props => <DetailedProduct showCart={showCartHandler} closeCart={hideCartHandler}
                                                isShown={cartIsShown} setCart={setCartIsShown} {...props}/> } />
              <Route exact path="/shop/order" render={props => <Order {...props}/>}/>

              {/*Page Not Found Page*/}
              <Route path="/*" component={PageNotFound} />
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;
