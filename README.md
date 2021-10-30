# 리본 프로젝트 (프론트엔드)
### 리본 프로젝트는 블록체인을 활용한 중고 골프용품 쇼핑몰입니다 (이하 리본). 이용자들은 리본에 중고용품 판매 신청을 할 수 있으며 리본이 신청을 승인하면 매입과 매입금액의 10% 만큼의 토큰을 지급하고 있습니다. 또한, 구매를 위한 쇼핑몰도 구현되어 있으며 물품 구매를 위해 토큰을 사용할 수 있으며 물품을 구매한 유저들은 결제 금액의 3% 만큼 토큰으로 보상받도록 구현하였습니다.

### 시연 영상:
### 프로젝트 기간 : 2021년 9월 ~ 2021년 10월 28일

## 프로젝트 프론트엔드 주요기능
+ Redux를 통한 상태관리
+ React Material-ui & React Bootstrap
+ JWT 토큰을 활용한 회원가입 및 로그인 (정보 수정과 탈퇴)
+ 다양한 상품 리스트 (상세페이지)
+ 장바구니 (추가, 부분 추가, 제거, 부분제거, 장바구니 비우기)
+ 구매 (아임포트 카카오페이)
+ 어드민 페이지 (전체 구매 기록, 전체 매출 기록, 상품 등록 및 제거, 유저 판매 신청 관리)
+ 게시판 (리스트, 작성, 상세페이지, 수정 및 삭제, 답글)
+ 실시간 토큰 가격 출력

### 개발환경
+ Operating System: Win 10
+ IDE: IntelliJ IDEA
+ Front-end: React: 17.0.2, React-redux: 7.2.6, Material-ui: 4.12.3, React-bootstrap: 2.0.0, Bootstrap: 5.1.3, React-router-dom: 5.3


## 설치
```javascript
npm install
npm start
```
### [백엔드 페이지](https://github.com/28-5/golf)

## 프로젝트 구조
```
📦 
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ img
│  │  ├─ ads
│  │  │  ├─ ads1.jpg
│  │  │  ├─ ads2.jpg
│  │  │  ├─ ads3.jpg
│  │  │  ├─ ads4.jpg
│  │  │  └─ orderAd.jpg
│  │  ├─ carousel
│  │  │  ├─ img1.jpg
│  │  │  ├─ img2.jpg
│  │  │  ├─ img3.jpg
│  │  │  ├─ img4.jpg
│  │  │  └─ img5.jpg
│  │  ├─ favicon.png
│  │  ├─ icons
│  │  │  ├─ bag.png
│  │  │  ├─ chat.png
│  │  │  ├─ coin.png
│  │  │  ├─ delivery.png
│  │  │  ├─ f-delivery.png
│  │  │  ├─ man.png
│  │  │  ├─ sales.png
│  │  │  ├─ search.png
│  │  │  ├─ voucher.png
│  │  │  └─ zoom-plus.png
│  │  ├─ kakaopay.jpg
│  │  ├─ logo
│  │  │  └─ logo.png
│  │  ├─ mainImg1.jpg
│  │  ├─ mainImg2.jpg
│  │  ├─ partners.jpg
│  │  ├─ productImg
│  │  │  ├─ 1.png
│  │  │  ├─ 2.png
│  │  │  ├─ 3.png
│  │  │  ├─ 4.png
│  │  │  ├─ 5.png
│  │  │  ├─ 6.png
│  │  │  ├─ 7.png
│  │  │  ├─ 8.png
│  │  │  ├─ 유명 브랜드.png
│  │  │  ├─ 초급자연습용 컬러.png
│  │  │  ├─ 초급자연습용 토탈 브랜드 볼.png
│  │  │  ├─ 캘러웨이.png
│  │  │  ├─ 타이틀리스트 컬러볼.png
│  │  │  ├─ 타이틀리스트.png
│  │  │  ├─ 테일러메이드 컬러.png
│  │  │  └─ 테일러메이드.png
│  │  ├─ products
│  │  │  ├─ ball_callewayball.jpg
│  │  │  ├─ ball_phyzball.jpg
│  │  │  ├─ ball_titlelistball1.jpg
│  │  │  ├─ ball_volvikball.jpg
│  │  │  ├─ club_brideJ819.jpg
│  │  │  ├─ club_misnomp4.jpg
│  │  │  ├─ club_mp20.jpg
│  │  │  ├─ club_pingG425.jpeg
│  │  │  ├─ club_titlelistt100.jpg
│  │  │  ├─ hat_cleavelandhat2.jpg
│  │  │  ├─ hat_clevelandhat1.jpg
│  │  │  ├─ hat_titleliasthat2.jpg
│  │  │  ├─ hat_titlelisthat1.jpg
│  │  │  └─ wear_nikewear.jpg
│  │  ├─ reborn1.svg
│  │  ├─ reborn2.jpg
│  │  └─ team
│  │     └─ team.jpg
│  └─ index.html
└─ src
   ├─ App.css
   ├─ App.js
   ├─ components
   │  ├─ Admin
   │  │  ├─ Chart.jsx
   │  │  ├─ Dashboard.jsx
   │  │  ├─ Deposits.jsx
   │  │  ├─ ListItems.css
   │  │  ├─ LlistItems.jsx
   │  │  ├─ Orders.jsx
   │  │  ├─ ProductControl.jsx
   │  │  ├─ RequestReviewModal.css
   │  │  ├─ RequestReviewModal.jsx
   │  │  ├─ ServiceRequestControl.jsx
   │  │  ├─ SideMenu.jsx
   │  │  └─ Title.jsx
   │  ├─ AuthRoute.js
   │  ├─ Board
   │  │  ├─ Article.css
   │  │  ├─ Article.jsx
   │  │  ├─ BoardDataUse.jsx
   │  │  ├─ BoardListForm.jsx
   │  │  ├─ FaQ.jsx
   │  │  ├─ ModificationForm.jsx
   │  │  ├─ Notice.jsx
   │  │  ├─ QnA.jsx
   │  │  ├─ WrtForm.css
   │  │  └─ WrtForm.jsx
   │  ├─ Introduction
   │  │  ├─ Business.jsx
   │  │  ├─ Introduction.jsx
   │  │  ├─ Manual.jsx
   │  │  └─ Team.jsx
   │  ├─ Join
   │  │  ├─ Address.jsx
   │  │  ├─ AddressModal.jsx
   │  │  ├─ Join.jsx
   │  │  ├─ JoinSuccess.css
   │  │  └─ JoinSuccess.jsx
   │  ├─ Layout
   │  │  ├─ Footer.css
   │  │  ├─ Footer.jsx
   │  │  ├─ Layout.jsx
   │  │  ├─ MenuList.jsx
   │  │  ├─ ShoppingNavbar.css
   │  │  └─ ShoppingNavbar.jsx
   │  ├─ Login
   │  │  └─ Login.jsx
   │  ├─ Main
   │  │  ├─ Main.jsx
   │  │  ├─ MainBody.jsx
   │  │  ├─ MainTop.jsx
   │  │  └─ Partners.jsx
   │  ├─ MyPage
   │  │  ├─ AccountDetail.jsx
   │  │  ├─ MemberInfoChange.jsx
   │  │  ├─ ModifyUserInfo.jsx
   │  │  ├─ MyPageMain.css
   │  │  ├─ MyPageMain.jsx
   │  │  ├─ UserOrderRecord.jsx
   │  │  └─ UserRequestRecord.jsx
   │  ├─ PageNotFound.jsx
   │  ├─ PageNotFound.module.css
   │  ├─ Service
   │  │  ├─ ImageUpload.jsx
   │  │  ├─ ProductRegistrationForm.css
   │  │  ├─ ProductRegistrationForm.jsx
   │  │  ├─ RegistrationSuccess.css
   │  │  ├─ RegistrationSuccess.jsx
   │  │  ├─ ServiceRequestForm.jsx
   │  │  └─ ServiceRequestSuccess.jsx
   │  ├─ Shopping
   │  │  ├─ Cart
   │  │  │  ├─ Cart.jsx
   │  │  │  ├─ CartItems.jsx
   │  │  │  └─ CartModal.jsx
   │  │  ├─ Order
   │  │  │  ├─ AddressForm.jsx
   │  │  │  ├─ Order.css
   │  │  │  ├─ Order.jsx
   │  │  │  ├─ OrderList.jsx
   │  │  │  ├─ OrderSummary.css
   │  │  │  ├─ OrderSummary.jsx
   │  │  │  ├─ Payment
   │  │  │  │  ├─ IamPortPay.jsx
   │  │  │  │  ├─ PaymentResult.jsx
   │  │  │  │  ├─ constants.js
   │  │  │  │  └─ utils.js
   │  │  │  └─ PaymentForm.jsx
   │  │  ├─ Product
   │  │  │  ├─ AmountSelect.jsx
   │  │  │  ├─ Breadcrumb.jsx
   │  │  │  ├─ DetailedProduct.jsx
   │  │  │  ├─ DetailedProductContent.jsx
   │  │  │  ├─ ProductCardList.css
   │  │  │  ├─ ProductCardList.jsx
   │  │  │  ├─ ProductCardListPerCategory.jsx
   │  │  │  └─ ProductData.jsx
   │  │  ├─ ShoppingAds.css
   │  │  ├─ ShoppingAds.jsx
   │  │  ├─ ShoppingAllProducts.jsx
   │  │  ├─ ShoppingCarousel.css
   │  │  ├─ ShoppingCarousel.jsx
   │  │  ├─ ShoppingMain.jsx
   │  │  └─ ShoppingProductsPerCategory.jsx
   │  ├─ UI
   │  │  ├─ LoaddingSpinner.jsx
   │  │  ├─ Notification.jsx
   │  │  └─ Notification.module.css
   │  └─ hooks
   │     └─ use-input.jsx
   ├─ font
   │  ├─ Montserrat-Regular.ttf
   │  ├─ Montserrat-SemiBold.ttf
   │  └─ tway_air.ttf
   ├─ index.css
   ├─ index.js
   └─ store
      ├─ auth-slice.js
      ├─ cart-actions.js
      ├─ cart-slice.js
      ├─ index.js
      ├─ order-slice.js
      ├─ product-actions.js
      ├─ product-slice.js
      ├─ token-actions.js
      ├─ token-slice.js
      └─ ui-slice.js
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

## 코드
#### index.js

```javascript
ReactDOM.render(
  <Provider store={store}> // Redux provider
    <App />
  </Provider>,
  document.getElementById('root')
);
```


#### app.js

```javascript
let isInitial = true; // 카트 최초 로딩을 위한 변수

function App() {
    const dispatch                              = useDispatch();
    const isAuth                                = useSelector(state => state.auth.isAuthenticated); // 로그인 세션 유지
    const cart                                  = useSelector(state => state.cart);  //카트 관련 리덕스
    const [noticeList, qnaList]                 = BoardDataUse([]);  // 게시판 데이터

    useEffect(() => {
        if(localStorage.getItem("jwt")){
            axios.get("/member", {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    const jwtToken    =   localStorage.getItem("jwt"); //로그인 정보를 바탕으로 관리자 여부 확인함
                    let jwt = require("jsonwebtoken");
                    let decode = jwt.decode(jwtToken);
                    let roles = decode.role.split(",");
                    let isManager = false;
                    for(let i=0; i< roles.length; i++) {
                        if(roles[i] === "ROLE_MANAGER"){
                            isManager = true;
                        }
                    }
                    dispatch(authActions.auth({  // 세션유지를 위한 정보를 넘겨줌
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
    useEffect(() => { // 카트 정보, 상품 정보, 토큰 가격 불러옴
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
            dispatch(sendCartData(cart)); // 카트가 업데이트
        }

        if(cart.clear){
            dispatch(clearCartData()); // 카트 
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
```
##### app.js에서는 프로젝트의 모든 router를 관리하고 있으며 redux를 통해 최초 렌더시 필요한 정보를 불러오거나 로그인 세션을 유지하도록하고 있습니다. 로그인세션은 useEffect를 통해 관리하고 있으며 로그인시 jwt토큰을 localStorage에 저장하고 있는데 저장된 데이터를 바탕으로 관리자인지 일반 유저인지 구분하고 있습니다. 관리자 등급으로 확인되면 프로필 아이콘을 클릭하였을때 관리자 페이지를 접근할 수 있도록 하였습니다. 두번째 useEffect를 카트, 상품, 토큰 데이터를 불러오고 있습니다. 카트 데이터의 경우 isInitial를 true로 해줌으로써 app.js가 처음에 렌더되었을 때 무조건 업데이트된 카트 정보를 한번 가져오도록 구현하였습니다. 이후 cartChanged에 변화가 있을 때 마다 변화된 카트 데이터를 업데이트 해주도록 redux를 통해 구현하였습니다.

### store/index.js
```javascript
const store = configureStore({
    reducer: {
        ui: uiSlice.reducer, // ui
        cart: cartSlice.reducer, // 카트 
        auth: authSlice.reducer, // 로그인 세션
        product: productSlice.reducer, //상품
        token: tokenSlice.reducer, // 토큰
        order: orderSlice.reducer, // 주문
    },
});
```
### store/auth-slice.js
```javascript
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        idx: null,
        email: null,
        name: null,
        password: null,
        phone: null,
        address: null,
        tokenAmount: 0,
        walletAddress: null,
        admin: false,

    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            localStorage.setItem("jwt", action.payload.token);
            console.log("auth");
            console.log(action.payload.admin);
            state.admin = action.payload.admin;
        },
        logout(state) {
            localStorage.removeItem("jwt"); // 로그아웃하는 경우 localStorage의 jwt 토큰 제거
            state.isAuthenticated = false;
            state.idx = null;
            state.email = null;
            state.name = null;
            state.password = null;
            state.phone = null;
            state.address = null;
            state.tokenAmount = 0;
            state.walletAddress = null;
            state.admin = false;
            window.location.replace("/");
        },
        auth(state, action) {
            state.isAuthenticated = true;
            state.idx = action.payload.idx;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.password = action.payload.password;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
            state.tokenAmount = action.payload.tokenAmount;
            state.walletAddress = action.payload.walletAddress;
            state.admin = action.payload.manager;
        },
    },
});
```

### store/cart-actions.js
```javascript
export const getCartData = () => {  //카트 데이터 불러오기
    return async dispatch => {
        const getData = async() => {
            const response = axios.get("/carts");

            if(!response){
                throw new Error("카트 정보를 읽어올 수가 없습니다!");
            }
            const data = (await response).data.cartDtos;
            return data;
        };
        try{
            const cartData = await getData();
            dispatch(cartActions.replaceCart({
                items: cartData || [],
            }));
        }catch(error){
            dispatch(uiActions.showNotification({
                status:"error",
                title: "에러!",
                message:"카트 정보를 읽어오는데 실패하였습니다!"
            }));
            console.log(error);
        }
    }
};

export const sendCartData = cart => { // 카트 데이 업데이트
    return async dispatch => {
        dispatch(uiActions.showNotification({
            status:"Pending",
            title: "담는중...",
            message:"카트에 담는중!"
        }));
        dispatch(uiActions.notificationVisible(true));
    const sendRequest = async () => {
        const getData = async() => {
            const response = axios.get("/carts");

            if(!response){
                throw new Error("카트 정보를 읽어올 수가 없습니다!");
            }
            const data = (await response).data.cartDtos;
            return data;
        };
        const cartData = await getData();


        const existingItem = cartData.find(i => {
            return i.productIdx === cart.items[cart.items.length-1].productIdx;
        });
        if(!existingItem){
            const response = await axios.post("/carts", {
                productIdx: cart.items[cart.items.length-1].productIdx,
                quantity: cart.items[cart.items.length-1].quantity,
            });
            if(!response){
                throw new Error("카트에 담다가 손이 미끄러졌습니다!");
            }

        }else{
            const response = await axios.put("/carts/"+existingItem.cartIdx+"?quentity="+cart.items[cart.items.length-1].quantity);
            if(!response){
                throw new Error("카트에 담다가 손이 미끄러졌습니다!");
            }
        }
    }
    try{
        await sendRequest();
        dispatch(uiActions.showNotification({
            status:"Success",
            title: "담기 성공!",
            message:"카트에 성공적으로 담았습니다!!"
        }));
        dispatch(uiActions.notificationVisible(true));
    }catch(error){
        dispatch(uiActions.showNotification({
            status:"Error",
            title: "어이쿠!",
            message:"카트에 담다가 손이 미끄러졌습니다!!"
        }));
        dispatch(uiActions.notificationVisible(true));
    }
    };
}


export const clearCartData = cart => { // 카트 비우기
    return async dispatch => {
        dispatch(uiActions.showNotification({
            status:"Pending",
            title: "비우는중...",
            message:"카트를 비우고 있습니다."
        }));
        dispatch(uiActions.notificationVisible(true));
        const clearRequest = async () => {
            const getData = async() => {
                const response = axios.get("/carts");

                if(!response){
                    throw new Error("카트 정보를 읽어올 수가 없습니다!");
                }
                const data = (await response).data.cartDtos;
                return data;
            };
            const cartData = await getData();
            let idxList    = [];

            if(cartData.length < 1){
                return;
            }else{
                for(let a = 0; a < cartData.length; a++){
                    idxList.push(cartData[a].cartIdx);
                }
                for(let a = 0; a < idxList.length; a++){
                    const response = await axios.delete("/carts/"+idxList[a]);
                    if(!response){
                        throw new Error("카트를 비우다가 미끄러졌습니다!");
                    }
                }
            }
        }
        try{
            await clearRequest();
            dispatch(uiActions.showNotification({
                status:"Success",
                title: "비우기 성공!",
                message:"카트를 성공적으로 비웠습니다!!"
            }));
            dispatch(uiActions.notificationVisible(true));
        }catch(error){
            dispatch(uiActions.showNotification({
                status:"Error",
                title: "어이쿠!",
                message:"카트를 비우다가 실수했습니다!!"
            }));
            dispatch(uiActions.notificationVisible(true));
        }
    };
}
```

### store/cart-slice.js 
```javascript
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice:0,
        changed: false,
        clear: false,
    },
    reducers: {
        replaceCart(state, action){ // 최초 카트 렌더시 사용됨
            state.items             = action.payload.items;
            for(let a = 0; a < action.payload.items.length; a++){
                state.totalPrice        += action.payload.items[a].totalPrice;
                state.totalQuantity     += action.payload.items[a].quantity;
            }
        },
        addItem(state, action){ // 장바구니 담기
            const newItem           = action.payload;
            const existingItem      = state.items.find(item => item.productIdx === newItem.productIdx);
            state.totalQuantity    += action.payload.quantity;
            if(!existingItem){
                state.items.push({
                    productIdx: newItem.productIdx,
                    title: newItem.title,
                    img: newItem.img,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                });
                state.totalPrice += newItem.price;
            }else{
                existingItem.quantity = existingItem.quantity + newItem.quantity;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                state.totalPrice += existingItem.price;
            }
            state.changed       = true;
        },
        addOneItem(state, action){ // 장바구니에 담겨져있는 상품의 수량을 +를 통한 업데이트를 위한 기능
            const newItem           = action.payload;
            const existingItem      = state.items.find(item => item.productIdx === newItem.productIdx);
            state.totalQuantity++;
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            state.totalPrice += existingItem.price;
            state.changed           = true;
        },
        removeItem(state, action){ // 장바구니에 담겨져있는 상품의 수량을 -를 통한 업데이트를 위한 기능
            const id            = action.payload;
            const existingItem  = state.items.find(item => item.productIdx === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.productIdx !== id);
                state.totalPrice -= existingItem.price;
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                state.totalPrice -= existingItem.price;
            }
            state.changed       = true;
        },
        cleanCart(state){ // 카트 초기화
            state.items = [];
            state.totalQuantity= 0;
            state.totalPrice = 0;
            state.clear = true;
        }
        //a next reducer comes here
    },
});
```

### store/order-slice.js
```javascript
const orderSlice = createSlice({
    name: "order",
    initialState: {
        finalPrice: 0,
    },
    reducers: {
        updateFinalPrice(state, action){
            state.finalPrice = action.payload;
        },
    },
});

```

### store/product-actions.js 
```javascript
export const getProductdata = () =>{
    return async dispatch => {
        //1, 2, 3번은 상위 카테고리임.
        //data 배열의 0~2번은 상위카테고리이기 때문에 거기에 해당하는 제품들이 다시 3~16번에 나타남.
        const getData = async () =>{
            let data = [];
            for (let a = 1; a < 17 ; a++){
                const response = axios.get("/categories/"+a+"/products");
                if(!response){
                    throw new Error("Could not get product data!");
                }

                data.push((await response).data.dtoList);
            }
            return data;
        };
        try{
            const productData = await getData();
            dispatch(productActions.updateProductList({
                items: productData || null
            }));
        }catch(error){
            console.log(error.request);
            console.log(error.response);
            console.log(error.response.message);
        }
    }
};
```

### store/product-slice.js 
```javascript
const productSlice = createSlice({
    name: "product",
    initialState: {
        items: [],
    },
    reducers: {
        updateProductList(state, action){
            state.items         = action.payload.items;
        },
        //a next reducer comes here
    },
});
```

### store/token-actions.js 
```javascript
export const getTokenPrice = () =>{
    return async dispatch => {
        const getData = async () =>{
            const response = axios.get("/point");
            if(!response){
                throw new Error("Could not get product data!");
            }
            const data = (await response).data;
            return data;
        };
        try{
            const price = await getData();
            dispatch(tokenPriceActions.updateTokenPrice(price));
        }catch(error){
            console.log(error.request);
            console.log(error.response);
        }
    }
};
```

### store/token-slice.js 
```javascript
const tokenSlice = createSlice({
    name: "token",
    initialState: {
        tokenPrice: 0,
    },
    reducers: {
        updateTokenPrice(state, action){
            state.tokenPrice = action.payload;
        },
    },
});
```

### store/ui-slice.js 
```javascript
const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isCartVisible: false,
        notification: null,
        notificationVisible: false,
    },
    reducers: {
        toggle(state){
            state.isCartVisible = !state.isCartVisible;
        },
        toggleOff(state){
          state.isCartVisible = false;
        },
        showNotification(state, action){
          state.notification = {
            status: action.payload.status,
            title: action.payload.title,
            message: action.payload.message,
          };
        },
        notificationVisible(state, action){
          state.notificationVisible = action.payload;
        },
    },
});

```

### .js
```javascript

```

### .js
```javascript

```
