# 리본 프로젝트 (프론트엔드)
#### 리본 프로젝트는 블록체인을 활용한 중고 골프용품 쇼핑몰입니다 (이하 리본). 이용자들은 리본에 중고용품 판매 신청을 할 수 있으며 리본이 신청을 승인하면 매입과 매입금액의 10% 만큼의 토큰을 지급하고 있습니다. 또한, 구매를 위한 쇼핑몰도 구현되어 있으며 물품 구매를 위해 토큰을 사용할 수 있으며 물품을 구매한 유저들은 결제 금액의 3% 만큼 토큰으로 보상받도록 구현하였습니다.

### 시연 영상: [리본 시연 영상](https://user-images.githubusercontent.com/85688551/139671735-608884c8-b3d7-462c-9d7d-4ccee540a69a.mp4)
### 발표자료: [리본.pdf](https://github.com/28-5/Front-end/files/7452928/_.pdf)
### 프로젝트 기간 : 2021년 9월 ~ 2021년 10월 28일

## 프로젝트 프론트엔드 주요기능
+ Redux를 통한 상태관리
+ React Material-ui & React Bootstrap
+ Custom hooks
+ RESTful API
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
├─ public
│  │    
│  └─ index.html
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

export const sendCartData = cart => { // 카트 데이터 업데이트
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
    reducers: { // 구매 페이지에서 사용하기 위한 reducer
        updateFinalPrice(state, action){
            state.finalPrice = action.payload;
        },
    },
});

```

### store/product-actions.js 
```javascript
export const getProductdata = () =>{ // DB에 저장되어 있는 상품 정보를 가져옴
    return async dispatch => {
        //1, 2, 3번은 상위 카테고리임.
        //data 배열의 0~2번은 상위카테고리이기 때문에 거기에 해당하는 제품들이 다시 3~15번에 나타남.
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
    },
});
```

### store/token-actions.js 
```javascript
export const getTokenPrice = () =>{ //백엔드에서 Bithumb API를 이용하여 토큰 시세 정보를 가져오도록 구현하였고, 백엔드에서 프런트로 그 시세 데이터만 넘겨주고 있음.
    return async dispatch => {
        const getData = async () =>{
            const response = axios.get("/point");
            if(!response){
                throw new Error("Could not get token data!");
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
const uiSlice = createSlice({  // 장바구니와 연동하기위한 ui
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
#### 기본적으로 프로젝트 전반에서 사용되는 데이터들을 효율적으로 관리하게 Redux를 사용하였습니다. Redux를 이용하여 로그인 세션이라던지 카트, 상품, 구매 데이터 등 여러 데이터들을 전역적으로 사용할 수 있었습니다. 프로젝트 초기에는 프로젝트 사이즈가 크지 않아 단순히 props로 넘겨주었지만 사이즈가 점점 커짐에따라 컴포넌트는간에 props로 넘겨주는게 매우 비효율적일 뿐만 아니라 코드가 매우 길어졌습니다. 처음에는 Context API를 사용하다가 프로젝트 중후반에 Redux를 학습하여 Context API로 구현한 것들을 모두 교체하였습니다.

### Admin/Dashboard.jsx
```javascript
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                REBORN
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [orderData, setOrderData] = useState(null);
    const [requestData, setRequestData]          = useState(null);
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    useEffect(() => { // 유저 구매목록 조회
        axios.get("/orders/user")
            .then(res => {
                setOrderData(res.data);
            })
            .catch(err => console.log(err));
        axios.get("/purchased-products") // 유저 판매 신청 기록 조회
            .then(res => {
                setRequestData(res.data.dtoList);
            })
            .catch(err => console.log(err));
    }, [open])
    return (
        <div className={classes.root}>
            <CssBaseline />
            <SideMenu/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3} className={classes.gridContainer}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Deposits orderData={orderData}/> // 전체 매출량
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Orders setOrderData={setOrderData} orderData={orderData}/> // 전체 주문 관리
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <ProductControl/> // 상품관리
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <ServiceRequestControl requestData={requestData}/>  // 전체 판매 요청 관리
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
```

### Admin/Orders.jsx 
```javascript
export default function Orders(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>최근 주문</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>날짜</TableCell>
                        <TableCell>주문번호</TableCell>
                        <TableCell>구매자</TableCell>
                        <TableCell>배송정보</TableCell>
                        <TableCell>결제금액</TableCell>
                        <TableCell>토큰지급</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.orderData !== null? props.orderData.dtoList.map((row) => ( //Dashboard에서 받아온 props.orderData가 null이 아닌 경우에만 테이블 출력
                        <TableRow key={row.idx}>
                            <TableCell>{row.regDate.slice(0, 10)}</TableCell>
                            <TableCell>{row.orderNumber}</TableCell>
                            <TableCell>{row.userName}</TableCell>
                            <TableCell>{row.recipientAddress}</TableCell>
                            <TableCell>{row.totalPrice.toLocaleString('ko-KR')} 원</TableCell>
                            <TableCell>{row.tokenAmount}</TableCell>
                        </TableRow>
                    )) : <TableRow><td><LoaddingSpinner/></td></TableRow>}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more orders
                </Link>
            </div>
        </React.Fragment>
    );
}
```
### Admin/ProductControl.jsx
```javascript
const ProductControl = props => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const allItems        =   [];
    const allItemsRedeux  =   useSelector(state => state.product.items); //리덕스를 통해 상품 전체 목록을 가져옴.
    if(allItemsRedeux.length > 1){ // 상품 배열의 0, 1, 2, 만 넣는 이유는 이 번호가 최상위 카테고리를 나타내는 번호라서 3개 배열만 가져오면 전체 상품을 가져올 수 있음.
        for (let a = 0 ; a < 3 ; a++){
            allItemsRedeux[a].forEach(item => {
                allItems.push({IDX: item.idx, Title: item.title, Brand: item.brand, Quantity: item.quantity});
            });
        }
    }
    const rows = allItems;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteBtnHandler = idx => { // 상품 
        console.log(idx);
        axios.delete("/products/"+idx, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
                alert("삭제하였습니다.");
                window.location.replace("/admin");
            })
            .catch(err => {
                console.log(err.request);
                console.log(err.response.data);
                console.log(err.response.message);
            });
    }
    return (
        <>
            <h3 id={"productControl"}>상품 관리</h3>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        className={classes.tableRow}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.length >0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={Math.random()} className={classes.tableCell}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} className={classes.tableCell}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })
                                        }
                                        <TableCell className={classes.tableBtnCell}>
                                            <Button variant="danger" onClick={() => {deleteBtnHandler(row.IDX)}} className={classes.requestBtn}>
                                                삭제
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            }) : <TableRow><td> Loading... </td></TableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
};
```
### Admin/ServiceRequestControl.jsx 
```javascript
const columns = [
    { id: 'idx', label: 'IDX', minWidth: 80,  align: 'center' },
    { id: 'regDate', label: '신청일', minWidth: 100,  align: 'center', format: (value) => value.slice(0, 10)},
    { id: 'catagory', label: '카테고리', minWidth: 100,  align: 'center' },
    { id: 'brand', label: '브랜드', minWidth: 150, align: 'center' },
    { id: 'quantity', label: '수량', minWidth: 80, align: 'center' },
    { id: 'price', label: '희망금액', minWidth: 120, align: 'center', format: (value) => value.toLocaleString('ko-KR') +" 원"},
    { id: 'proposalPrice', label: '협상금액', minWidth: 120, align: 'center', format: (value) => value === 0? '.': value.toLocaleString('ko-KR') +" 원"},
    { id: 'acceptedPrice', label: '합의금액', minWidth: 120, align: 'center', format: (value) => value === null? '.': value.toLocaleString('ko-KR') +" 원"},
    { id: 'acceptedTokenAmount', label: '토큰보상', minWidth: 120, align: 'center', format: (value) => value === null ? '.' : value},
    { id: 'name', label: '제목', minWidth: 150,  align: 'center' },
    { id: 'details', label: '내용', minWidth: 150,  align: 'center' },
    { id: 'address', label: '주소', minWidth: 150,  align: 'center' },
    { id: 'imageDtoList', label: '이미지', minWidth: 120, align: 'center' },
    { id: 'step', label: '상태', minWidth: 120, align: 'center' },
];

const ServiceRequestControl = props => {
    const classes                                = useStyles();
    const [requestNum, setRequestNum]            = useState();
    const [requestPrice, setRequestPrice]        = useState();
    const [page, setPage]                        = useState(0);
    const [rowsPerPage, setRowsPerPage]          = useState(10);
    const [show, setShow]                        = useState(false);
    const handleClose                            = () => setShow(false);
    const handleChangePage                       = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const negoBtnHandler = (id, price) => { // 
        setShow(true);
        setRequestNum(id);
        setRequestPrice(price);
    };
    const approvalBtn      = (idx, price) => { // 승인 버튼. Reservation -> Proposal -> Acceptance -> Finish 단계로 구성되어 있는데 Reservation 단계에서 토큰이 이동하난 Acceptance 
                                              //로 바로 넘어갈 수 있또록 .then 속에 다시 한번 axio를 사용. 
        if(window.confirm("승인하시겠습니까?")){
            axios.put("/purchased-products/"+idx+"/step", {cost: price},{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    axios.put("/purchased-products/"+idx+"/step", {cost: price},{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                        .then(res => {
                            alert("승인하였습니다.");
                            window.location.replace("/admin");
                        })
                        .catch(err => {
                            console.log(err.request);
                            console.log(err.response.data);
                            console.log(err.response.message);
                        });
                })
                .catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
        }
    };
    const deleteBtnHandler = idx => { // 거부 
        if(window.confirm("진행하시겠습니까")){
            axios.delete("/purchased-products/"+idx, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    alert("삭제하였습니다.");
                    window.location.replace("/admin");
                })
                .catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
        }
    };
    return (
        <>
            <h3 id={"userRequest"}>유저 판매 신청 리스트</h3>
            {props.requestData && <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table" className={classes.container}>
                        <TableHead>
                            <TableRow className={classes.tableRow}>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        className={classes.tableRow}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.requestData!== null ? props.requestData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={Math.random()*10} >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} className={classes.tableCell}>
                                                    {column.format ? column.format(value) : column.id.includes("image")?
                                                        value.map(image => <img src={"/display?fileName="+image.imageURL} className={classes.productImg}
                                                                                key={Math.random()*10} alt={"productImg"}/>) :value}
                                                </TableCell>
                                            );
                                        })
                                        }
                                        {row.step === "FINISH" || row.step ==="CANCELED" ? null :
                                        <>
                                            {row.step === "RESERVATION"  &&
                                            <TableCell className={classes.tableBtnCell}> //제안 버튼을 누르면 모달창을 띄워서 원하는 협상가격을 입력할 
                                                <Button variant="secondary" className={classes.requestBtn}  onClick={() => {negoBtnHandler(row.idx, row.price)}}>제안</Button>
                                                {show === true && <RequestRevieweModal show={show} onHide={handleClose} handleClose={handleClose}
                                                                   requestNum={requestNum} requestPrice={requestPrice}/>}
                                            </TableCell>}

                                            {row.step !== "PROPOSAL"  &&
                                            <TableCell className={classes.tableBtnCell}>
                                                <Button variant="primary" className={classes.requestBtn}  onClick={() => {approvalBtn(row.idx, row.price)}}>승인</Button>
                                            </TableCell>}
                                            <TableCell className={classes.tableBtnCell}>
                                                <Button variant="danger" className={classes.requestBtn} onClick={() => {deleteBtnHandler(row.idx)}}>거절</Button>
                                            </TableCell>
                                        </>
                                            }
                                    </TableRow>
                                );
                            }) : <TableRow> Loading... </TableRow> }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={props.requestData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>}
        </>
    )
};
```
### Admin/RequestReviewModal.jsx 
```javascript
const RequestRevieweModal = props => { //협상을 제안하게 되면 판매 신청 status가 Reservation에서 Proposal로 변경됨
    const { value: enteredPrice,
        valueChangeHandler: priceChangeHandler,
        reset: resetPrice}              = useInput();
    const negotiationBtn                = (event) =>{
      event.preventDefault();
        if(window.confirm("제안하시겠습니까?")){
            axios.put("/purchased-products/"+props.requestNum+"/step", {cost: enteredPrice},
                {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                .then(res => {
                    alert(enteredPrice + " 에 제안하였습니다.");
                    resetPrice();
                    window.location.replace("/admin");
                })
                .catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
        }
    };
    return(
        <Modal show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false} centered={true}
                className="modal">
            <Modal.Header closeButton>
                <Modal.Title>협상</Modal.Title>
            </Modal.Header>
            <Modal.Body className="inputBody">
                <Row>
                    <Col lg={3}>
                        <p className="in-name">신청번호</p>
                    </Col>
                    <Col lg={9}>
                        <input required type="text" readOnly value={props.requestNum}/>
                    </Col>
                    <Col lg={3}>
                        <p className="in-name">가격</p>
                    </Col>
                    <Col lg={9}>
                        <input required type="text" placeholder={props.requestPrice.toLocaleString('ko-KR') +" 원"} value={enteredPrice} onChange={priceChangeHandler}/>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                     취소
                </Button>
                <Button variant="primary" onClick={negotiationBtn}>제안</Button>
            </Modal.Footer>
        </Modal>
    )
};
```
#### Admin 페이지는 로그인시 Role에 따라 매니저와 일반 유저를 구분하며 일반 유저인 경우 메뉴가 보이지 않도록 구현해두었습니다. 컴포넌트들은 상품등록, 삭제, 유저 판매 신청 관리, 전체 매출 조회 등 서비스 관리를 손쉽게 할 수 있도록 구현하였습니다. 기본적으로 데이터를 추가하게 되면 백엔드를 통해 DB에 저장되고 있으며 삭제시 DB에서 삭제가 되지 않고 삭제여부를 나타내는 DB값을 변경시켜 문제 발생시 증거로 사용할 수 있도록 구현하였습니다.

### Board/BoardDataUse.jsx
```javascript
export const BoardDataUse = () =>{ // Q&A와 공지사항 
    const [noticeListData, setNoticeListData] = useState([]);
    const [qnaListData, setQnaListData]       = useState([]);
    const [error, setError]                   = useState(null);

    const boardDataAxiosHandler= useCallback(async () => {
        setError(null);

        try{
            const responseNotice  = await axios.get("/notices");
            const responseQnA     = await axios.get("/qnas");
            if(responseNotice.status !== 200 || responseQnA.status !== 200){
                throw new Error("Something went wrong!");
            }
            const noticeList = responseNotice.data.dtoList.map(list => {
                return{
                    postNum: list.idx,
                    postTitle: list.title,
                    postContent: list.content,
                    userEmail: list.email,
                    userName: list.name,
                    postDate: list.regDate,
                    views: list.views,
                };
            });
            const qnaList = responseQnA.data.dtoList.map(list => {
                return{
                    postNum: list.idx,
                    postTitle: list.title,
                    postContent: list.content,
                    userEmail: list.email,
                    userName: list.name,
                    postDate: list.regDate,
                    postAnswer: list.answer,
                    views: list.views,
                };
            });
            setNoticeListData(noticeList);
            setQnaListData(qnaList);
        }catch (error) {
            setError(error.message);
            console.log(error);
        }
    }, []);

    useEffect( ()=>{
        boardDataAxiosHandler();
    }, [boardDataAxiosHandler]);

    return [noticeListData, qnaListData];
};
```
### Board/BoardListForm.jsx 
```javascript
const columns = [
    { id: 'postNum', label: '번호', maxWidth: 30 },
    { id: 'postTitle', label: '제목', minWidth: 300 },
    {
        id: 'userName',
        label: '작성자',
        maxWidth: 50,
        align: 'right',
    },
    {
        id: 'postDate',
        label: '작성일자',
        maxWidth: 50,
        align: 'right',
        format: (value) => value.slice(0,10),
    },
    {
        id: 'views',
        label: '조회수',
        maxWidth: 50,
        align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
    },

];


const BoardListForm = props => {
    const classes                       = useStyles();
    const [page, setPage]               = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const boardData                     = props.data.sort((a, b) => {
                                                return b.postNum - a.postNum;
                                            });;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Container maxWidth="xl" className={classes.mainContainer}>
                <Col lg={12}>
                    <h3 className={classes.title}>{(props.path.slice(1, -1)).toUpperCase()}</h3>
                </Col>
                {boardData ===undefined? <LoaddingSpinner/>:
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} className={classes.tableColumns}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                                <TableBody>
                                    {boardData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.postDate}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align} className={classes.tableRows}>
                                                            {column.label==="제목"?
                                                            <Link to={{ pathname: props.path +"/article/"+row.postNum, // 상세 게시물
                                                                    state: {
                                                                    data: row
                                                                    }}}
                                                                  className={classes.boardLink}>
                                                                {value}
                                                            </Link>:
                                                            column.label==="작성일자"? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={boardData.length} rowsPerPage={rowsPerPage} page={page}
                                     onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
                </Paper>
                }
            </Container>
        </>
    );
}
```
### Board/Article.jsx 
```javascript
const Article = props => { // 게시물 내용 출력
    const location            = useLocation();
    const { data }            = location.state;
    const articleNum          = data.postNum;
    const [answer, setAnswer] = useState([]);
    let deletePath;
    let modifyPath;
    switch (props.match.url.slice(0,3)) { // 들어온 곳이 qna인지 공지사항인지 여부에 따라 slice 위치를 약간씩만 변경해주어 한 컴포넌트로 두 게시판의 수정과 삭제 가능
        case "/no": modifyPath = props.match.url.slice(0,8);
                    deletePath = props.match.url.slice(0,8) + props.match.url.slice(16);
                    break;
        default: modifyPath    = props.match.url.slice(0,5);
                 deletePath    = props.match.url.slice(0,6) + props.match.url.slice(14);
                    break;
    }
    const deleteHandler = () => { // 게시물 삭제
        axios.delete(deletePath,{Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
            .then(res => {
                console.log("글 삭제 성공");
                window.location.replace(modifyPath);
            }).catch(err => {
            console.log(err.request);
            console.log(err.response);
            console.log(err.response.message);
        });
    };
    const listBtnHandler = () => {
        window.location.replace(modifyPath);
    };

    useEffect(() => { // 게시물의 답변 가져오기
        axios.get("/qnas/" + articleNum)
            .then(res => setAnswer(res.data.answer))
            .catch(err => console.log(err));
    }, []);
    return(
        <>
            <Container className="content">
                <Row className="row">
                    <Col>
                        <div className="card">
                            <div className="card-header">{data.postTitle}<span>{data.postDate.toString().slice(0,10)}</span></div>
                            <div className="card-body height3">
                                <ul className="chat-list">
                                    {props.match.url.slice(0,3) !== "/no" ?
                                    <li className="in">
                                        <div className="chat-img">
                                            <img alt="Avtar" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"/>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-message">
                                                <h5>{data.userEmail}</h5>
                                                <p>{data.postContent}</p>
                                            </div>
                                        </div>
                                    </li>:<li className="out">
                                            <div className="chat-img">
                                                <img alt="Avtar" src="https://cdn.pixabay.com/photo/2021/03/11/07/37/man-6086415_960_720.png"/>
                                            </div>
                                            <div className="chat-body">
                                                <div className="chat-message">
                                                    <h5>관리자</h5>
                                                    <p>안녕하세요. {data.postContent}</p>
                                                </div>
                                            </div>
                                        </li>}
                                    {props.match.url.slice(0,3) !== "/no" && answer.length > 0  &&
                                    <li className="out">
                                        <div className="chat-img">
                                            <img alt="Avtar" src="https://cdn.pixabay.com/photo/2021/03/11/07/37/man-6086415_960_720.png"/>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-message">
                                                <h5>{answer[0].name}의 답글 {answer[0].regDate.slice(5, 10)} </h5>
                                                <p>안녕하세요 {data.userEmail} 님</p>
                                                <p>{answer[0].content}</p>
                                            </div>
                                        </div>
                                    </li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <Button variant="outlined" color="primary" component={Link} to={{
                            pathname: modifyPath + "/modify",
                            state: {data: data}}}>
                            수정
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={deleteHandler} >
                            삭제
                        </Button>
                        <Button variant="outlined" color="primary" onClick={listBtnHandler} className="listBtn">
                            목록으로
                        </Button>
                        {props.match.url.slice(0,3) !== "/no" &&
                        <Button variant="outlined" color="primary" component={Link} to={{
                            pathname: modifyPath + "/answer",
                            state: {data: data}}}  className="replyBtn">
                            답변
                        </Button>}
                    </Col>
                    <Col lg={2} className="offset-lg-1">
                        <div className="contact-widget">
                            <div className="cw-item">
                                <h5>사무실 위치</h5>
                                <ul>
                                    <li>서울시 구로구 가산동</li>
                                    <li>우림라이온스밸리 A동 804호</li>
                                </ul>
                            </div>
                            <div className="cw-item">
                                <h5>연락처</h5>
                                <ul>
                                    <li>+82 2 123-4592</li>
                                </ul>
                            </div>
                            <div className="cw-item">
                                <h5>E-mail</h5>
                                <ul>
                                    <li>contact@reborn.com</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>

    );
}
```
### Board/WrtForm.jsx 
```javascript
const WrtForm = props => { // 글작성 폼
    const path                  =   props.path;
    const [title, setTitle]     =   useState(null);
    const [content, setContent] =   useState(null);
    const location              =   useLocation();
    let   data ;
    if(location.state !== undefined){
        data =   location.state.data;
    }
    const titleChangeHandler    =   event =>{
        setTitle(event.target.value);
    };
    const contentChangeHandler  =   event =>{
        setContent(event.target.value);
    };
    const formFetchHandler      =   event =>{
        event.preventDefault();
        if(location.pathname.includes("/answer")){ // 글 작성 폼이 답변을 위한 폼인 경우 아래 코드가 실행됨.
            console.log(path);
            console.log(data.postNum);
            axios.post(path, {pidx: data.postNum, title:title, content:content}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
                .then(res => {
                    window.location.replace(path);
                }).catch(err => {
                console.log(err.request);
                console.log(err.response);
                console.log(err.response.message);
            });
        }else{ // 답변이 아닌 단순 글 작성이면 아래 코드 
            axios.post(path, {title:title, content:content}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
                .then(res => {
                    window.location.replace(path);
                }).catch(err => {
                console.log(err.request);
                console.log(err.response);
                console.log(err.response.message);
            });
        }
    };
    useEffect(() => {
        window.scrollTo(0,100);
    }, [])
    return (
        <div className="contact-section">
            <Container className="container">
                <Row className="row">
                    <Col lg={8}>
                        <form action="#" className="contact-form">
                            <Row className="row">
                                <Col lg={12}>
                                    <FormControl placeholder="제목" aria-label="제목" aria-describedby="basic-addon2" onChange={titleChangeHandler}/>
                                    <FormControl as="textarea" aria-label="내용" placeholder="내용" onChange={contentChangeHandler}/>
                                </Col>
                                <Col lg={12} className="text-right">
                                    <button type="button" className="formBtn" onClick={formFetchHandler}>올리기</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col lg={3} className="offset-lg-1">
                        <div className="contact-widget">
                            <div className="cw-item">
                                <h5>사무실 위치</h5>
                                <ul>
                                    <li>서울시 구로구 가산동</li>
                                    <li>우림라이온스밸리 A동 804호</li>
                                </ul>
                            </div>
                            <div className="cw-item">
                                <h5>연락처</h5>
                                <ul>
                                    <li>+82 2 123-4592</li>
                                </ul>
                            </div>
                            <div className="cw-item">
                                <h5>E-mail</h5>
                                <ul>
                                    <li>contact@reborn.com</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
```
#### 위의 코드들은 게시판을 위한 컴포넌트들 입니다. 게시판은 Q&A와 공지사항으로 두 종류가 있으며 데이터만 다르고 레이아웃은 같기에 컴포넌트 재사용률을 높이고자 노력하였습니다. 우선 BoardDataUse를 통해서 두 게시판의 데이터들을 모두 가져와서 App.js에서 [noticeList, qnaList] 로 저장하였습니다. 저장한 데이터들은 qna게시판이 선택되면 QnA 컴포넌트에 qnaList를 전달해주었고, 공지사항이 선택되면 Notice 컴포넌트에 noticeList를 전달해주었습니다. 각 컴포넌트들이 실행되면 전달된 데이터를 BoardListForm를 호출하면서 전달해줍니다. BoardListForm는 게시판 데이터를 화면에 출력해주고 글 선택을 통해 글 상세페이지로 이동할 수 있도록 하는 역할을 해줍니다. 각 게시물은 Link를 통해 해당 게시물의 정보를 state를 통해 넘겨주고 있습니다. 게시물을 선택하게 되면 Article 컴포넌트가 호출되고 Link를 통해 전달된 데이터를 사용할 수 있게 useLocation으로 받아주었습니다.

#### 다시한번, 공지사항과 QNA는 데이터만 다르고 나머지는 거의 비슷하기에 불필요한 코드 중복을 피하고자 컴포넌트 생성을 최소화 하였습니다. 두 게시판을 관리할 수 있도록 공지사항의 게시물인지 QNA의 게시물인지의 따라 location을 이용하여 수정과 삭제를 위한 path를 약간만 수정하여 사용할 수 있도록 switch와 slice를 사용하였습니다. WrtForm 또한 위의 같은 이유로 비슷한 로직으로 작성하여 만들었습니다.


### Join/Join.jsx
```javascript
const Join = ({history}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [IsModalOpen, setModalOpen] = useState(false);
    const [userEmail, setUserEmail]   = useState(null);
    const [userPass, setUserPass]   = useState(null);
    const [userName, setUserName]   = useState(null);
    const [userPhoneNum, setUserPhoneNum]   = useState(null);
    const [userAddress, setUserAddress] = useState('주소');

    const handleClose = () => {
        setOpen(false);
    };
    const modalOpenHandler = () => {
        setModalOpen(true);
    };

    const modalCloseHandler = () => {
        setModalOpen(false);
    };
    const signupEmailHandler = event =>{
        setUserEmail(event.target.value);
    };
    const signupPassHandler = event =>{
        setUserPass(event.target.value);
    };
    const signupNameHandler = event =>{
        setUserName(event.target.value);
    };
    const signupPhoneNumHandler = event =>{
        setUserPhoneNum(event.target.value);
    };

    const signupAddressHandler = props =>{
        setUserAddress(props);
    };



    const fetchJoinInfo = (event) =>{ //회원가입 
        event.preventDefault();
        if(userEmail === null || userPass === null || userName === null || userPhoneNum === null || userAddress === null){
            alert("제대로 입력되지 않은 부분이 있습니다!");
            return;
        }else{
            axios.post("/member/", {
                email : userEmail,
                password: userPass,
                name: userName,
                phone: userPhoneNum,
                address: userAddress,
            }).then(res => {
                console.log("Join success! + res.data: " + res.data);
                history.push("/member/success");
            }).catch(err => {
               alert("가입에 실패하였습니다. 다시 시도 해주세요");
            });
        }
    };

    useEffect(() => {
        window.scrollTo(0,100);
    }, []);
    return (
        <section className={classes.section}>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="primary" />
            </Backdrop>
            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.joinBox}>
                <form onSubmit={fetchJoinInfo}>
                    <Grid item xs={12} >
                        <Input type="email" name="userEmail" placeholder="이메일" onChange={signupEmailHandler}
                               startAdornment={( <InputAdornment position="start">
                                   <EmailIcon />
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPass" placeholder="비밀번호" onChange={signupPassHandler}
                               startAdornment={( <InputAdornment position="start">
                                   <LockIcon />
                               </InputAdornment>)}
                               className={classes.passInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPassCheck" placeholder="비밀번호 확인"
                               startAdornment={( <InputAdornment position="start">
                                   <LockIcon />
                               </InputAdornment>)}
                               className={classes.passInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="text" name="userName" placeholder="이름" onChange={signupNameHandler}
                               startAdornment={( <InputAdornment position="start">
                                   <AssignmentIndIcon />
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="tel" name="userPhone" placeholder="휴대폰번호" onChange={signupPhoneNumHandler}
                               startAdornment={( <InputAdornment position="start">
                                   <PhoneIphoneIcon />
                               </InputAdornment>)}
                               className={classes.joinInput}/>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="text" name="userAddr" placeholder={userAddress}
                               startAdornment={( <InputAdornment position="start">
                                   <HomeIcon />
                               </InputAdornment>)}
                               disabled={true}
                               className={classes.addressInput}/>
                        <Button color="secondary" variant="outlined" className={classes.addressBtn} onClick={modalOpenHandler}>주소찾기</Button> // 다음 주소 API
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" className={classes.joinBtn} >회원가입</Button>
                    </Grid>
                </form>
            </Grid>
            {IsModalOpen && <AddressModal modalOpen={IsModalOpen} closeModal={modalCloseHandler} getAddress={signupAddressHandler}/>}
        </section>
    );
};
```
#### 회원가입에 필요한 input들은 몇개 되지 않아 간편하게 useState를 통해 상태관리를 하였습니다. 하지만 양식을 작성하는 다른 페이지들에서는 수 많은 input들이 있고 비슷한 로직들이 반복되기에 custom hooks를 만들어 사용하였습니다. 회원가입시 필요한 주소검색은 다음 주소 API를 활용하였습니다. 회원가입이 성공하면 success 페이지로 이동하게 됩니다.

### Login/Login.jsx
```javascript
const Login = props => {
    const classes               = useStyles();
    const dispatch              = useDispatch();
    const [userEmail, setUserEmail]   = useState(null);
    const [userPass, setUserPass]   = useState(null);
    const loginEmailHandler = event =>{
        setUserEmail(event.target.value);
    };
    const loginPassHandler = event =>{
        setUserPass(event.target.value);
    };

    const loginHandler = (event) =>{
        event.preventDefault();
        const loginData = {
            email : userEmail,
            password: userPass,
        };
        axios.post("/member/login", loginData) //로그인 post
            .then(res => {
                localStorage.setItem("jwt", res.data); // 백엔드로부터 jwt 토큰을 받아 저장.
                const jwtToken    =   res.data;
                let jwt = require("jsonwebtoken");
                let decode = jwt.decode(jwtToken);
                let roles = decode.role.split(",");
                let isManager = false;
                for(let i=0; i< roles.length; i++) { // 매니저 여부 확인
                    if(roles[i] === "ROLE_MANAGER"){
                        console.log(roles[i]);
                        isManager = true;
                    }
                }
                dispatch(authActions.login({ // 리덕스를 이용하여 auth 값 입력.
                    token: jwtToken,
                    admin: isManager,
                }));
                window.location.replace("/shop");
            }).catch(err => {
                console.log("Login Failed");
        });
    }

    return (
        <section className={classes.section}>
            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.loginBox}>
                <form>
                <Grid item xs={12} >
                    <Input type="email" name="userEmail" placeholder="이메일" onChange={loginEmailHandler}
                           startAdornment={( <InputAdornment position="start">
                                                <EmailIcon className={classes.icon}/>
                                            </InputAdornment>)}
                           className={classes.loginInput}/>
                </Grid>
                <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                    <Input type="password" name="userPass" placeholder="비밀번호" onChange={loginPassHandler}
                           startAdornment={( <InputAdornment position="start">
                               <LockIcon className={classes.icon}/>
                           </InputAdornment>)}
                           className={classes.passInput}/>
                </Grid>
                <Grid item xs={12} className={classes.inputGrid}>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" className={classes.loginBtn} onClick={loginHandler}>로그인</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" href="/member/register" className={clsx(classes.joinBtn)}>회원가입</Button>
                </Grid>
                </form>
            </Grid>
        </section>
    );
}
```
#### 로그인시 post를 통하여 성공하면 백엔드로부터 그 유저의 jwt 토큰을 받아옵니다. 받아온 토큰을 우선 localStorage에 저장하고, 이 토큰을 이용하여 유저등급을 조회하여 매니저 등급이 있는지 확인을 합니다. 단순 유저이면 isManager는 false를 유지하며 관리자 등급이 있으면 true 값으로 바뀌게 되면 리덕스를 통해 auth 값을 넣어줄때 admin에 true가 들어가게 됩니다. admin이 true가 되면 메뉴에 보이지 않던 '관리자' 메뉴가 활성화 됩니다.

### hooks/use-input.jsx 
```javascript
const useInput = validateValue => {
    const [enteredValue, setEnteredValue]           =   useState('');
    const [checkboxItem, setCheckboxItem]           =   useState([]);
    const [isTouched, setIsTouched]                 =   useState(false);
    const [validation, setValidation]               =   useState(true);

    const deleteCheckboxValue                       =   value =>{
        setCheckboxItem(prevValue => {
            return prevValue.filter( (item, index) =>{
                return item !== value;
            })
        });
    };

    const valueChangeHandler                        =   event =>{
        setEnteredValue(event.target.value);
    };
    const nameChangeHandler                         =    event =>{
        const selectedItem  =   event.target.name;
        if(event.target.checked){
            setCheckboxItem(prevVal => {
                return [
                    ...prevVal,
                    selectedItem,
                ]
            });
        }else{
            deleteCheckboxValue(event.target.name);
        }
    };

    const reset                                     =   () =>{
        setEnteredValue('');
        setValidation(true);
        setIsTouched(false);
    };

    return{
        value: enteredValue,
        chkValue: checkboxItem,
        validation,
        valueChangeHandler,
        nameChangeHandler,
        reset
    };
};
```
#### useState를 이용한 input이 빈번하게 사용되고 있기에 custom hooks를 이용하여 불필요한 중복 코드 작성을 최소화 하였습니다. 만든 custom hooks들은 input을 많이 사용하는 폼들, 예를들어 ProductRegistrationForm, ServiceRequestForm 등에서 활용하였습니다.

### Service/ProductRegistrationForm.jsx 
```javascript
const ProductRegistrationForm = (props) =>{
    const history                       = useHistory();
    const [imageInfo, setImageInfo]     = useState(null); // 이미지 정보
    const [prevImg, setPrevImg]         = useState(null); // 이미지 미리보기 
    const {value: enteredCategory,                        // 카테고리 정보
        valueChangeHandler: productTypeNameChangeHandler,
        reset: resetProductTypeInput}   = useInput();
    const { value: enteredBrand,                          // 브랜드 정보
        valueChangeHandler: brandChangeHandler,
        reset: resetBrand}              = useInput();
    const { value: enteredAmount,                         // 수량
        valueChangeHandler: amountChangeHandler,
        reset: resetAmount}             = useInput();
    const { value: enteredPrice,                          // 가격
        valueChangeHandler: priceChangeHandler,
        reset: resetPrice}              = useInput();
    const { value: enteredTitle,                          // 제목
        valueChangeHandler: titleChangeHandler,
        reset: resetTitle}              = useInput();
    const { value: enteredContent,                        // 내용
        valueChangeHandler: contentChangeHandler,
        reset: resetContent}            = useInput();
    const cancelHandler                 = () =>{          // 등록 취소
        resetProductTypeInput();
        resetBrand();
        resetAmount();
        resetPrice();
        resetContent();
        setImageInfo(null);
        setPrevImg(null);
        history.push("/admin");
    }
    const formFetchHandler      =   event =>{             // 등록
        event.preventDefault();
        if(imageInfo === null){                           // 이미지 첨부가 안 됬을 경우 return
            alert("사진을 첨부해주세요");
            return;
        }else{
            if(enteredCategory === '' || enteredBrand === '' || enteredAmount === '' || enteredPrice === '' ||
                enteredTitle === '' || enteredContent === ''){
                alert("빠진 내용이 있습니다.");
                return;
            }else{
                let productData = {
                    categoryIdx: parseInt(enteredCategory),
                    title: enteredTitle,
                    brand:enteredBrand,
                    quantity:enteredAmount,
                    price:enteredPrice,
                    content: enteredContent,
                    imageDtoList:[
                        {
                            imgName: imageInfo[0].imgName,
                            uuid: imageInfo[0].uuid,
                            path: imageInfo[0].path,
                        }
                    ],
                };
                axios.post(`/categories/${enteredContent}/products`, productData, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': 'application/json; charset=UTF-8'})
                    .then(res => {
                    resetProductTypeInput();
                    resetBrand();
                    resetAmount();
                    resetPrice();
                    resetTitle();
                    resetContent();
                    setImageInfo(null);
                    console.log("성공");
                    history.push("/service/success");

                }).catch(err => {
                    console.log(err.request);
                    console.log(err.response.data);
                    console.log(err.response.message);
                });
            }
        }
    };

    return(
        <>
            <section className="cart-total-page spad">
                <Container>
                    <form action="#" className="checkout-form">
                        <Row>
                            <Col lg={12}>
                                <h3>상품등록</h3>
                            </Col>
                            <Col lg={9}>
                                <Row>
                                    <Col lg={2}>
                                        <p className="in-name">제목*</p>
                                    </Col>
                                    <Col lg={10}>
                                        <input required type="text" onChange={titleChangeHandler}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={2}>
                                        <p className="in-name">브랜드*</p>
                                    </Col>
                                    <Col lg={10}>
                                        <select className="form-select cart-select country-usa" onChange={brandChangeHandler}
                                                defaultValue="">
                                            <option value=""></option>
                                            <option value="타이틀리스트">타이틀리스트</option>
                                            <option value="캘러웨이">캘러웨이</option>
                                            <option value="테일러메이드">테일러메이드</option>
                                            <option value="핑">핑</option>
                                            <option value="미즈노">미즈노</option>
                                            <option value="클리브랜드">클리브랜드</option>
                                            <option value="혼마">혼마</option>
                                            <option value="PXG">PXG</option>
                                            <option value="코브라킹">코브라킹</option>
                                            <option value="브리지스톤">브리지스톤</option>
                                            <option value="볼빅">볼빅</option>
                                            <option value="파이즈">파이즈</option>
                                            <option value="나이키">나이키</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={2}>
                                        <p className="in-name">카테고리*</p>
                                    </Col>
                                    <Col lg={10}>
                                        <select className="form-select cart-select country-usa" onChange={productTypeNameChangeHandler}
                                                defaultValue="">
                                            <option value=""></option>
                                            <option value="1">골프클럽</option>
                                            <option value="2">골프용품</option>
                                            <option value="3">골프웨어</option>
                                            <option value="4">드라이버</option>
                                            <option value="5">우드</option>
                                            <option value="6">아이언</option>
                                            <option value="7">풀세트</option>
                                            <option value="8">골프공</option>
                                            <option value="9">골프가방</option>
                                            <option value="10">골프장갑</option>
                                            <option value="11">골프모자</option>
                                            <option value="12">골프화</option>
                                            <option value="13">아우터</option>
                                            <option value="14">상의</option>
                                            <option value="15">하의</option>
                                            <option value="16">양말</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={2}>
                                        <p className="in-name">재고*</p>
                                    </Col>
                                    <Col lg={10}>
                                        <input required type="text" onChange={amountChangeHandler}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={2}>
                                        <p className="in-name">가격*</p>
                                    </Col>
                                    <Col lg={10}>
                                        <input required type="text" onChange={priceChangeHandler}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={2}>
                                        <p className="in-name">내용*</p>
                                    </Col>
                                    <Col lg={10}>
                                        <FormControl as="textarea" aria-label="내용" placeholder="내용"  className="formArea"
                                                     onChange={contentChangeHandler}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={2}>
                                    </Col>
                                    <Col lg={10}>
                                        <ImageUpload setImgInfo={setImageInfo} setPrevImg={setPrevImg}/>
                                        {prevImg && <img src={prevImg} className={prevImg && "prevImg"} alt={"imagePreview"}/>}
                                        <div className="form-actions">
                                            <button type="button" className="btn btn-danger" onClick={cancelHandler}>취소</button>
                                            <button type="button" className="btn btn-primary" onClick={formFetchHandler}>전송</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </section>
        </>
    );
};
```
#### 위의 코드는 상품 등록을 위한 컴포넌트 입니다. 이와 매우 비슷한 구조로 ServiceRequestForm 컴포넌트를 만들었습니다. 이 컴포넌트에서는 custom hooks를 이용해서 상품 등록에 필요한 정보를 입력을 합니다. 상품 등록에 필요한 이미지가 첨부되지 않으면 alert로 메시지를 보여주며 return 합니다. 모든것들이 작성되고 이미지가 첨부되었다면 전송 버튼을 통해 상품 등록을 진행하고 있습니다.

### Service/ImageUpload.jsx 
```javascript
const ImageUpload = props => { // 이미지 업로드 컴포넌트
    const classes                       =   useStyles();
    const imgInput                      =   useRef();
    const [imgName, setImgName]         =   useState(null);
    const [loading, setLoadding]        =   useState(false);
    const imageFileHandler              =   event =>{ // 이미지 전송을 위한 이미지 정보 저장과 미리보기를 위한 정보를 저장함
        setImgName(event.target.files[0]);
        const reader      = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () =>{
        props.setPrevImg(reader.result);
        }
    };
    const imageUploadHandler            =   async (event) =>{ // 이미지 업로드
        event.preventDefault();
        setLoadding(true);
        alert("업로드 되었습니다")
        const formData    = new FormData();

        formData.append("uploadFiles", imgName);
        axios.post("/img", formData, {Authorization: `Bearer ${localStorage.getItem("jwt")}`, 'Content-Type': "multipart/form-data"})
            .then(res => {
            console.log("Image upload success");
            props.setImgInfo(res.data);
            })
            .catch(err =>{
            console.log(err.request);
            console.log(err.response.data);
            console.log(err.response.message);
        });
        setLoadding(false);
    };
    return(
        <>
            {/*<input accept="image/*" ref={imgInput} className={classes.input} id="contained-button-file" multiple type="file" onChange={imageFileHandler}/>*/}
            <input accept="image/*" ref={imgInput} className={classes.input} id="contained-button-file" type="file" onChange={imageFileHandler}/>
            {imgName && <label htmlFor="contained-button-file" className={classes.imgBtn}>
                <Button variant="contained" color="primary" component="span" className={classes.uploadBtn} onClick={imageUploadHandler}>
                    <span className={classes.btnText}>사진첨부</span>
                </Button>
            </label>}
        </>
    );
};
```
#### 이미지 업로드를 위한 컴포넌트 입니다. input을 통해 사진첨부를 누르게 되면 업로드 창이 뜨게 되고 사진을 업로드 할 수 있습니다. 업로드 시 imageUploadHandler로 우선 이미지 업로드에 필요한 정보를 setImageName을 통해 저장하고 있으며 미리보기에 필요한 정보또한 ProductRegistrationForm과 ServiceRequestForm에서 건내준 props.setPreImg를 통해 저장해주고 있습니다. 이미지를 첨부가되면 Button이 활성화되고 사진첨부를 누르면 imageUploadHandler를 통해 서버에 사진을 전송합니다.

### Shopping/ShoppingMain.jsx 
```javascript
const ShoppingMain = (props) => {
    const allItems        =   []; // 전체 카테고리 출력을 위해 리덕스에 담겨져 있는 상품의 0, 1, 2번 배열을 담습니다.
    const allItemsRedeux  =   useSelector(state => state.product.items); // 리덕스에 담겨져 있는 모든 상품 정보를 가져옵니다.

    if(allItemsRedeux.length > 0){
        for (let a = 0 ; a < 3 ; a++){
            allItemsRedeux[a].forEach(item => {
                allItems.push(item);
            });
        }
    }
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return(
        <>
            <ShoppingCarousel /> // 메인 상단의 Carousel
            <ShoppingAds/>       // 메인 중간의 프로모션 
            <ProductCardList data={allItems} categorizedData={allItemsRedeux}/> // 상품 출력
        </>
    );
};

```
### Shopping/Product/ProductCardList.jsx 
```javascript
const ProductCardList = (props) => {
    const { pathname }               = useLocation();
    const history                    = useHistory();
    const [selectedMenu, selectMenu] = useState(0);
    let productData                  = props.data;
    const subMenuHandler             = event =>{  // 상품 리스트 위에 있는 메뉴를 선택하면 그 메뉴 값을 받고 url을 이동합니다.
        selectMenu(event.target.value);
        history.push(`${pathname}?category=${selectedMenu}`);
        };

    switch (selectedMenu) {
        case 0: productData = props.data; // 모든 상품을 보여줍니다.
                break;
        case 1: productData = props.categorizedData[0]; // 골프클럽에 해당하는 모든 아이템을 보여줍니다.
                break;
        case 2: productData = props.categorizedData[1]; // 골프용품에 해당하는 모든 아이템을 보여줍니다.
                break;
        case 3: productData = props.categorizedData[2]; // 골프웨어에 해당하는 모든 아이템을 보여줍니다.
                break;
        default: productData = props.data;
    }
return (
        <>
            <section className="latest-products spad">
                <Container>
                    <div className="product-filter">
                        <Row>
                            <Col lg={12} className="text-center">
                                <div className="section-title">
                                    {pathname === "/shop/allproducts" ? <h2>전체 상품</h2> : <h2>베스트 상품</h2>}
                                </div>
                                <ul className="product-controls">
                                    <li value={0} onClick={subMenuHandler}>전체</li>
                                    <li value={1} onClick={subMenuHandler}>골프클럽</li>
                                    <li value={2} onClick={subMenuHandler}>골프용품</li>
                                    <li value={3} onClick={subMenuHandler}>골프웨어</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <Row className="row" id="product-list">

                        {productData.map(item => (
                            <Col lg={3} sm={6} className="mix all dresses bags" key={item.idx}>
                                <div className="single-product-item">
                                    <figure>
                                        <Link to={{ // 제품 상세페이지 
                                            pathname: "/shop/product/" + item.idx,
                                            state: {
                                                data: item
                                            }}}>
                                            <img src={"/display?fileName="+item.imageDtoList[0].imageURL} alt=""/>
                                        </Link>
                                        {pathname === "/shop" && <div className="p-status popular">BEST</div>}
                                    </figure>
                                    <div className="product-text">
                                        <h6>{item.title}</h6>
                                        <p>{item.price.toLocaleString('ko-KR')}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </section>
        </>
    );
};
```
#### 위 컴포넌트으 메인에서 상품 전체를 출력해주는 컴포넌트 입니다. 상품 리스트 위에는 전체, 골프클럽, 골프용품, 골프웨어 메뉴들이 있고 메뉴를 클릭하면 그 카테고리에 해당하는 아이템만 보여주도록 구현하였습니다. 메뉴를 선택하면 selectMenu를 통해 그 메뉴 value 값이 변경되며 변경된 값은 switch문을 통해 선택된 메뉴에 해당하는 데이터를 넣을 수 있도록 관리해주고 있습니다. 또한 각 상품을 클릭 시 그 상품에 해당하는 상세페이지로 이동하게 됩니다.

### Shopping/Cart/Cart.jsx 
```javascript
const getModalStyle = () =>  { // 모달 위치
    const top = 50 ;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const Cart = props => {
    const classes                               = useStyles();
    const dispatch                              = useDispatch();
    const numberOfCartItems                     = useSelector(state => state.cart.totalQuantity); // 장바구니에 표시되는 상품 개수
    const totalPrice                            = useSelector(state => state.cart.totalPrice); // 전체가격
    const cartItemData                          = useSelector(state => state.cart.items); // 장바구니 아이템 불러오기
    const hasItems                              = useSelector(state => state.cart.items.length > 0); // 장바구니 비어있는지 확인
    const [modalStyle]                          = React.useState(getModalStyle);

    const cartItemAddHandler = item => { // 장바구니 수량 1개 추가
        dispatch(cartActions.addOneItem({
            productIdx: item.productIdx,
            title: item.title,
            price: item.price,
        }));

    };
    const cartItemRemoveHandler = id => { // 장바구니 수량 1개 제거
        dispatch(cartActions.removeItem(id));
    };
    const cartItemAllRemoveHandler = id =>{ // 장바구니 해당 아이템 전체 제거
        const findIndex = cartItemData.findIndex(item => {
            return item.productIdx === id;
        });
        if(findIndex !== -1){
            const foundItemLength = cartItemData[findIndex].quantity;
            for(let a = 0; a < foundItemLength ; a++){
                cartItemRemoveHandler(id);
            }
        }
    };
    const cartCleaner = () =>{ // 장바구니 
        dispatch(cartActions.cleanCart());
    };
    return(
        <>
            <CartModal isOpen={props.isOpen} onClose={props.onClose}>
                <div style={modalStyle} className={classes.paper}>
                    <div className={classes.header}>
                        <Typography variant={"h3"} className={classes.heading}>장바구니</Typography>
                        {hasItems && <Typography variant={"h5"} className={classes.action} onClick={cartCleaner}>모두 지우기</Typography>}
                    </div>
                    {<CartItems data={cartItemData} onAdd={cartItemAddHandler} onRemove={cartItemRemoveHandler} removeItem={cartItemAllRemoveHandler}/>}

                    <hr className={classes.hr}/>
                        <div className={classes.checkout}>
                            <div className={classes.total}>
                                <div>
                                    <div className={classes.subtotal}>전체 금액</div>
                                    <div className={classes.items}>전체수량: {numberOfCartItems}</div>
                                </div>
                                <div className={classes.total_amount}>{totalPrice.toLocaleString('ko-KR')}</div>
                            </div>
                            {hasItems && <Button className={classes.button} component={Link} to={"/shop/order"}>주문하기</Button>}
                        </div>
                </div>
            </CartModal>
        </>
    );
};
```
### Shopping/Cart/CartItems.jsx 
```javascript
const CartItems = props => {
    const classes       = useStyles();
    return props.data.map(item =>
        <div className={classes.cart_Items} key={item.cartIdx+1}>
            <div className={classes.image_box}>
                <img src={item.imageDtoList === undefined? "/display?fileName="+item.img : "/display?fileName="+item.imageDtoList.imageURL} className={classes.cartImg} alt="product"/>
            </div>
            <div className={classes.about}>
                <h1 className={classes.title}>{item.title}</h1>
                <h3 className={classes.subtitle}>{item.price.toLocaleString('ko-KR')}</h3>
            </div>
            <div className={classes.counter}>
                <div className={classes.btn} onClick={props.onAdd.bind(null, item)}>+</div>
                <div className={classes.count}>{item.quantity}</div>
                <div className={classes.btn} onClick={props.onRemove.bind(null, item.productIdx)}>-</div>
            </div>
            <div className={classes.prices}>
                <div className={classes.amount}>{(item.price*item.quantity).toLocaleString('ko-KR')}</div>
                <div className={classes.save}><u>나중에 주문</u></div>
                <div className={classes.remove} onClick={props.removeItem.bind(null, item.productIdx)}><u>제거</u></div>
            </div>
        </div>

    )
};
```
### Shopping/Cart/CartModal.jsx 
```javascript
const CartModal = props => {

    return (
        <>
            {ReactDOM.createPortal(<Modal open={props.isOpen} onClose={props.onClose}
                                          aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">

                        {props.children}
            </Modal>, document.getElementById("overlay-root"))}
        </>
    );
}
```
#### 장바구니 기능은 Redux를 적극 활용하였습니다. 구매페이지에서 수량을 선택하고 장바구니 담기를 선택하게 되면 장바구니에 해당 아이템이 담겨집니다. 제품이미지, 이름, 수량, 가격으로 표시되며 + -를 통해 수량 조절을 할 수 있습니다. 우선 +로 수량을 늘릴 경우 redux를 통해 addOneItemr를 호출하고 해당 아이템의 번호인 productIdx와 제품 이름과 수량을 넘겨줍니다. -로 수량 1개를 줄이는 경우 줄여지는 아이템 번호를 removeItem의 매개변수로 넘겨주고 있으며 장바구니에 담겨져 있는 items를 find를 통해 매개변수로 넘겨준 id가 있는지 보고 있으면 해당하는 index 값을 반환해줍니다. 장바구니에 해당 아이템이 1개만 있다면 반환해준 인덱스 번호로 filter를 통해 해당하는 인덱스 아이템을 빼고 새롭게 배열을 만들어 items로 넣어주고 있습니다 (쉽게 말해 제거). 해당하는 아이템이 2개 이상인 경우 수량과 전체 아이템 개수를 줄여주고 있습니다. 해당 아이템 전체 제거를 하는 cartItemAllRemoveHandler는 위의 로직을 이용하여 for문으로 처리해주고 있습니다. 장바구니 전체 비우기는 장바구니의 초기값을 다시 넣어줌으로써 비워주도록 하였습니다. 
수량 조절에 따라 하단의 전체 가격과 Navbar에 있는 장바구니 개수가 바뀝니다. 장바구니의 상태가 변할때 마다 메시지를 출력해주는 ui-slice가 있습니다 (코드는 상단에 있음). 장바구니에 성공적으로 추가되면 '담기 성공'등의 메시지가 출력이 되고, 어떠한 오류로 담을 수가 없을 경우 '담기 실패'가 뜹니다. 메시지를 출력해줌으로써 유저가 장바구니에 물건이 담기고있는지 알 수 있도록 직관적으로 구현하였습니다.

### Shopping/Order/Order.jsx 
```javascript
function getSteps() {
    return ['구매정보 입력', '결제', '구매완료'];
}

const Order = () => {
    const dispatch                         = useDispatch();
    const isAuth                           = useSelector(state => state.auth.isAuthenticated);
    const [activeStep, setActiveStep]      = useState(0);
    const [usedToken, setUsedToken]        = useState(0);
    const [paymentSuccessData, setPaymentSuccessData] = useState(); // 카카오페이 결제 성공 데이터
    const steps                            = getSteps(); // 주문 단계
    let   isFormValid                      = false;
    const [isBtnClicked, setIsBtnClicked]  = useState(false); // 구매자와 수령인 정보가 동일한지 
    const [orderList, setOrderList]        = useState(null); // 장바구니 정보
    
    const { value: enteredBuyer, valueChangeHandler: buyerChangeHandler, // 구매자
        reset: resetBuyerInput}            = useInput();
    const { value: enteredReceiver, valueChangeHandler: receiverChangeHandler, // 수령인
        reset: resetreceiverInput}         = useInput();
    const { value: enteredContact, valueChangeHandler: contactChangeHandler, // 구매자 연락처
        reset: resetContactInput}          = useInput();
    const { value: enteredReceiverContact,                                  // 수령인 연락처
        valueChangeHandler: receiverContactChangeHandler,
        reset: resetReceiverContactInput}  = useInput();
    const { value: enteredAddress, valueChangeHandler: addressChangeHandler, // 구매자 주소
        reset: resetAddressInput}          = useInput();
    const { value: enteredReceiverAddress,                                  // 수령인 주소
        valueChangeHandler: receiverAddressChangeHandler,
        reset: resetReceiverAddressInput}  = useInput();
    const { value: enteredMemo, valueChangeHandler: memoChangeHandler,     // 전달사항
        reset: resetMemoInput}             = useInput();
    const { value: selectedMethod, valueChangeHandler: methodChangeHandler, // 결제방법
        reset: resetMethod}                   = useInput();
    const { value: wireName, valueChangeHandler: wireNameChangeHandler,    // 무통장 입금 성명
        reset: resetWireName}                   = useInput();

    const sameInfoBtnHandler = (event) =>{                                // 구매자와 수령인 정보가 같을 경우 해당 버튼 클릭
        setIsBtnClicked(!isBtnClicked)
    };

    const getStepContent = (step) => {                                   // 주문 단계에 따라 해당하는 폼을 보여줌
        switch (step) {
            case 0: // 구매정보 입력
                return <AddressForm buyerChangeHandler={buyerChangeHandler} receiverChangeHandler={receiverChangeHandler}
                                    contactChangeHandler={contactChangeHandler} receiverContactChangeHandler={receiverContactChangeHandler}
                                    addressChangeHandler={addressChangeHandler} receiverAddressChangeHandler={receiverAddressChangeHandler}
                                    memoChangeHandler={memoChangeHandler} buyer={enteredBuyer} receiver={enteredReceiver}
                                    addr={enteredAddress} contact={enteredContact} receiveContact={enteredReceiverContact}
                                    receiverAddr={enteredReceiverAddress} memo={enteredMemo} setUsedToken={setUsedToken}
                                    usedToken={usedToken} isBtnClicked={isBtnClicked} sameInfoBtnHandler={sameInfoBtnHandler}/>;
            case 1: // 결제
                return <PaymentForm selectedMethod={selectedMethod} methodChangeHandler={methodChangeHandler} usedToken={usedToken}
                                    wireName={wireName} wireNameChangeHandler={wireNameChangeHandler} enteredMemo={enteredMemo}
                                    buyer={enteredBuyer} addr={enteredAddress} contact={enteredContact} setActiveStep={setActiveStep}
                                    orderList={orderList} setPaymentSuccessData={setPaymentSuccessData} resetMethod={resetMethod}/>;
            case 2: // 주문완료
                return <OrderSummary review={paymentSuccessData} setUsedToken={setUsedToken} selectedMethod={selectedMethod}
                                     resetBuyerInput={resetBuyerInput} resetreceiverInput={resetreceiverInput}
                                     resetContactInput={resetContactInput} resetReceiverContactInput={resetReceiverContactInput}
                                     resetAddressInput={resetAddressInput} resetReceiverAddressInput={resetReceiverAddressInput}
                                     resetMemoInput={resetMemoInput} resetWireName={resetWireName}/>;
            case 3: window.location.replace("/shop"); 
                    break;
            default:
                throw new Error('Unknown step');
        }
    }
    if(isAuth){ // 로그인이 되어있는 경우 
        if(isBtnClicked){ // 구매자 정보와 수령인 정보가 같음
            isFormValid = true;
        }else{
            if(enteredBuyer !=='' && enteredContact !=='' && enteredAddress !==''
                && enteredReceiver !=='' && enteredReceiverContact !== '' && enteredReceiverAddress !== ''){
                isFormValid = true;
            }
        }
    }else{ // 로그인이 안 되어 있는 경우
        if(isBtnClicked){ // 구매자 정보와 수령인 정보가 같음
            if(enteredBuyer !=='' && enteredContact !=='' && enteredAddress !==''){
                isFormValid = true;
            }
        }else{
            if(enteredBuyer !=='' && enteredContact !=='' && enteredAddress !==''
                && enteredReceiver !=='' && enteredReceiverContact !== '' && enteredReceiverAddress !== ''){
                isFormValid = true;
            }
        }
    }

    const handleNext = () => {
        if(!isFormValid){
            return;
        }else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep < 0) {
            setActiveStep(0);
            return;
        }else{
            setActiveStep((prevActiveStep) => prevActiveStep - 1)
        }
    };
    useEffect(() => {
        const getOrderData = () => { // 카트에 담긴 정보를 
            axios.get("/carts")
                .then(res => setOrderList(res.data.cartDtos))
                .catch(err => console.log(err));
        }
        getOrderData();
    }, []);

    dispatch(uiActions.toggleOff());
    return (
        <>
            <section className="page-add">
                <Container>
                    <Row>
                        <Col lg={4} >
                            <div className="page-breadcrumb">
                                <h2>주문하기</h2>
                            </div>
                        </Col>
                        <Col lg={8} >
                            <Stepper alternativeLabel activeStep={activeStep}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="cart-total-page spad">
                <Container>
                    <form action="#" className="checkout-form">
                        <Row className="row">
                            {getStepContent(activeStep)} // 단계에 맞는 폼을 보여줌
                            {activeStep !==2 && <OrderList orderList={orderList} usedToken={usedToken}/>} // 주문완료 페이지가 아닌 경우에만 우측에 구매정보를 보여줌.
                        </Row>
                    </form>
                    <Row>
                        <div className="payment-method">
                        <button type="button" onClick={handleNext}>
                            {activeStep === 0 ? "결제선택" : activeStep === 1 ? "주문완료" : "구매완료"}
                        </button>
                            {activeStep > 0 && <button id='backward' onClick={handleBack}>이전</button>}
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};
```
### Shopping/Order/AddressForm.jsx 
```javascript
const AddressForm = (props) => {
    const isAuth                                          = useSelector(state => state.auth.isAuthenticated); // 로그인 여부
    const userInfo                                        = useSelector(state => state.auth);                 // 유저 정보
    const tokenPrice                                      = useSelector(state => state.token.tokenPrice);     // 토큰 시세
    const totalPrice                                      = useSelector(state => state.cart.totalPrice);      // 장바구니 물건 총합
    const [usedToken, setUsedToken]                       = useState(0);                                      // 유저가 구매를 위해 사용한 토큰량
    const [isBtnClicked, setIsBtnClicked]                 = useState(false);                                  // 구매자와 수령인 정보가 같은 경우
    const userOrderTokenPrice                             = (tokenPrice * usedToken);                         // 토큰 시세 * 유저가 사용한 수량
    const usedTokenHandler = (event) =>{
        setUsedToken(event.target.value);
    };

    const tokenUseBtnHandler = () =>{
        if(userInfo.tokenAmount <= 0){
            alert("사용할 수 있는 토큰이 없습니다");
            setUsedToken(0);
            return;
        }else{
            if(usedToken > userInfo.tokenAmount){
                alert("보유하신 양보다 더 큰 값을 입력하였습니다.")
                setUsedToken(0);
                return;
            }
            else{
                if(userOrderTokenPrice > totalPrice){
                    alert("토큰 사용이 구매 금액을 넘어설 수 없습니다.");
                    setUsedToken(0);
                }
                else{
                    if(usedToken < 0.01){
                        alert("토큰 최소 사용금액은 0.01 입니다");
                        setUsedToken(0);
                        return;
                    }
                    else{
                        props.setUsedToken(usedToken);
                        setIsBtnClicked(true);

                        setTimeout(() => {
                            setIsBtnClicked(false);
                        }, 4000);
                    }
                }
            }
        }
    };

    return (
        <>
        <Col lg={12}>
            <h3>구매자</h3>
        </Col>
    <Col lg={9}>
        <Row>
            <Col lg={2}>
                <p className="in-name">주문자*</p>
            </Col>
            <Col lg={4}>
                {isAuth ? <input type="text" required readOnly value={userInfo.name}/>:
                    <input type="text" onChange={props.buyerChangeHandler}/>}

            </Col>
            <Col lg={2}>
                <p className="in-name">연락처*</p>
            </Col>
            <Col lg={4}>
                {isAuth ? <input type="text" required readOnly value={userInfo.phone}/>:
                <input type="text" onChange={props.contactChangeHandler}/>}
            </Col>
        </Row>
        <Row>
            <Col lg={2}>
                <p className="in-name">주소*</p>
            </Col>
            <Col lg={10}>
                {isAuth ? <input type="text" required readOnly value={userInfo.address}/>:
                <input type="text" onChange={props.addressChangeHandler}/>}
            </Col>
        </Row>
        <Row>
            <Col lg={12} className="text-right">
                <div className="form-check">
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        <input className="form-check-input diffBox" type="checkbox" value=""
                               id="flexCheckChecked" onClick={props.sameInfoBtnHandler}/>
                        구매자와 받는 사람의 정보가 같나요?
                    </label>
                </div>
            </Col>
            {/*--------------------수령인--------------------------*/}
        </Row>
        <Row>
            <h3>수령인</h3>
            <Col lg={2}>
                <p className="in-name">수령인*</p>
            </Col>
            <Col lg={4}>
                {props.isBtnClicked===true ? isAuth && <input disabled type="text" readOnly value={userInfo.name}/>:
                    <input type="text" value={props.receiver} onChange={props.receiverChangeHandler}/>}
            </Col>
            <Col lg={2}>
                <p className="in-name">연락처*</p>
            </Col>
            <Col lg={4}>
                {props.isBtnClicked===true ? isAuth && <input disabled type="text" readOnly value={userInfo.phone}/>:
                    <input type="text" value={props.receiveContact} onChange={props.receiverContactChangeHandler}/>}
            </Col>
        </Row>
        <Row>
            <Col lg={2}>
                <p className="in-name">주소*</p>
            </Col>
            <Col lg={10}>
                {props.isBtnClicked===true ? isAuth && <input disabled type="text" readOnly value={userInfo.address}/>:
                    <input type="text" value={props.receiverAddr} onChange={props.receiverAddressChangeHandler}/>}
            </Col>
        </Row>
        <Row>
            <Col lg={2}>
                <p className="in-name">메모사항</p>
            </Col>
            <Col lg={10}>
                <input type="text" value={props.memo} onChange={props.memoChangeHandler}/>
            </Col>
        </Row>
        {isAuth &&
        <Row>
            <h3>리본 토큰</h3>
            <Col lg={2}>
                <p className="in-name">지갑주소</p>
            </Col>
            <Col lg={10}>
                <input type="text" value={userInfo.walletAddress} readOnly/>
            </Col>
            <Col lg={2}>
                <p className="in-name">보유량</p>
            </Col>
            <Col lg={10}>
                <input type="text" value={userInfo.tokenAmount} readOnly/>
            </Col>
            <Col lg={2}>
                <p className="in-name">토큰<br/>(최소 0.01)</p>
            </Col>
            <Col lg={8}>
                <input type="text" value={usedToken} id={"tokenInput"} onChange={usedTokenHandler}/>
                {isBtnClicked && <span className="in-name" id={"usedMessage"}>사용되었습니다</span>}
            </Col>
            <Col lg={2}>
                <button type="button" className="btn btn-light" onClick={tokenUseBtnHandler}>사용</button>
            </Col>
        </Row>}

    </Col>
    </>
    );
};
```
### Shopping/Order/PaymentForm.jsx 
```javascript
const PaymentForm = (props) => {
    useEffect(() => {
        window.scrollTo(0,200);
    }, [])
    return(
        <>
            <Col lg={12}>
                <h3>결제</h3>
            </Col>
            <Col lg={9}>
                <Row>
                    <ButtonGroup aria-label="Basic example" className="btnGroup">
                        <Button variant="outline-primary" value="무통장" onClick={props.methodChangeHandler}>무통장입금</Button>
                        <Button variant="outline-primary" value="카드" onClick={props.methodChangeHandler}>카드</Button>
                        <Button variant="outline-primary" value="계좌이체" onClick={props.methodChangeHandler}>실시간 계좌이체</Button>
                        <Button variant="outline-primary" value="카카오" onClick={props.methodChangeHandler}>카카오페이</Button>
                    </ButtonGroup>
                    {props.selectedMethod === "무통장"&&
                    <>
                        <Row>
                            <Col lg={2}>
                                <p className="in-name">입금인*</p>
                            </Col>
                            <Col lg={4}>
                                <input type="text" value={props.wireName} onChange={props.wireNameChangeHandler}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}>
                                <p className="in-name">입금계좌</p>
                            </Col>
                            <Col lg={10}>
                                <input type="text" value={"신한은행 110-123123-123"} readOnly/>
                            </Col>
                        </Row>
                    </>}

                    {props.selectedMethod === "카카오" && <IamPortPay orderList={props.orderList} buyer={props.buyer}
                                                                    contact={props.contact} addr={props.addr} usedToken={props.usedToken}
                                                                   enteredMemo={props.enteredMemo} setActiveStep={props.setActiveStep}
                                                                   setPaymentSuccessData={props.setPaymentSuccessData}/>}
                </Row>
            </Col>
        </>
    )
};
```
### Shopping/Order/Payment/IamPortPay.jsx
```javascript
function IamPortPay(props){     // 아임포트 결제페이지
    const isAuth                = useSelector(state => state.auth.isAuthenticated);
    const userInfo              = useSelector(state => state.auth);
    const tokenPrice            = useSelector(state => state.token.tokenPrice);
    const totalPrice            = useSelector(state => state.order.finalPrice);
    const dispatch              = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const { IMP } = window;
        IMP.init("imp38404270");  // 아임포트 초기화

        if(isAuth){
            IMP.request_pay({
                pg : "kakaopay",
                pay_method : 'card',
                merchant_uid : new Date().getTime(),
                name : '리본 상품 결제',
                amount : 1,
                buyer_email : userInfo.email,
                buyer_name : userInfo.name,
                buyer_tel : userInfo.phone,
                buyer_addr : userInfo.address,
                buyer_postcode : userInfo.address,
            }, callback);
        }else{
            IMP.request_pay({
                pg : "kakaopay",
                pay_method : 'card',
                merchant_uid : new Date().getTime(),
                name : '리본 상품 결제',
                amount : totalPrice,
                buyer_email : props.email,
                buyer_name : props.buyer,
                buyer_tel :  props.contact,
                buyer_addr : props.addr,
                buyer_postcode : props.addr,
            }, callback);
        }
    }
    function callback(res) {
        console.log(totalPrice);
        if(res.success){
            let orderProductList = props.orderList.map( element =>{ // 구매한 상품 정보
                let obj = {
                    productIdx:element.productIdx,
                    quantity:element.quantity
                }
                return obj
            })
            const paymentSuccessData  = ({
                impUid: res.imp_uid,
                orderNumber: res.merchant_uid,
                userId: res.buyer_email,
                userEmail: res.buyer_email,
                userName: res.buyer_name,
                orderName: res.name,
                deliveryMessage: props.enteredMemo,
                recipientAddress: res.buyer_addr,
                totalPrice: totalPrice,
                tokenAmount: props.usedToken,
                orderProductList: orderProductList,
                tokenPrice: tokenPrice,
            });
            axios.post("/orders", paymentSuccessData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
                .then(res => {
                    props.setPaymentSuccessData(JSON.stringify(res.data));
                    dispatch(cartActions.cleanCart());
                })
                .catch(err => console.log(err));
            props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }else{
            alert("결제에 실패하였습니다. 에러 내용: " + res.errorMessage);
        }
    }

    return (
        <>
            <Button variant="outline-secondary" ><img src={"/img/kakaopay.jpg"} alt={"kakao"} onClick={handleSubmit}/></Button>
        </>
    );
}

const PaymentForm = Form.create({ name: 'payment' })(IamPortPay);

export default withUserAgent(withRouter(PaymentForm));
```
#### 구매페이지는 전반적으로 Order.jsx에서 관리해주고 있습니다. Redux가 아닌 Order에서 통합적으로 구매관련 데이터를 관리하는 이유는 구매 관련 데이터들이 프로젝트 전반에서 사용되는게 아니고 오직 구매쪽에서만 사용되기에 redux를 사용하지 않았습니다. 구매 단계는 '이전'과 '결제선택', '주문완료' 등 버튼을 통해 step 값이 변하며 step 값에 따라 해당하는 컴포넌트들을 호출해주고 거기에 필요한 props를 넘겨주고 있습니다. 첫 단계는 구매정보를 입력하는 부분입니다. 구매인 정보와 수령인 정보를 입력하는 부분이며 구매자와 수령인이 같은 경우 간편하게 '구매인과 수령인 정보가 같다'라는 버튼을 클릭함으로써 번거로운 정보 입력을 최소화 시키고 있습니다. 로그인한 유저들에 한에서 결제페이지로 넘어가기전에 토큰을 사용할 수 있습니다. 회원가입시 기본적으로 100토큰이 주어지고 있으며 할인 금액이 전체 상품 금액이 넘어가지 않도록 구현해두었습니다. 또한, 유저의 편의성을 위해 할인 전 금액이 얼마인지, 토큰을 통해 할인되는 금액은 얼마인지, 최종 결제금액은 얼마인지 알기 쉽게하기 위해 표현해두었습니다.

#### 결제페이지로 넘어가면 기본적인 무통장입금 부분과 카카오페이를 구현해두었습니다. 카카오페이는 아임포트를 활용하였습니다. 카카오결제를 선택하게 되면 바로 밑에 카카오 이미지가 뜨게 되고 이미지를 선택하면 카카오결제창이 뜹니다. 아임포트를 통해 결제가 성공적으로 진행되었다면 백엔드로 관련 데이터를 paymentSuccessData 변수에 담아서 전달해줍니다. paymentSuccessData에는 구매 정보, 수령인 정보, 토큰 시세와 토큰 사용량을 담고 있습니다. 백엔드로 성공적으로 전달해주면 dispatch(cartActions.cleanCart())로 카트를 비워주고 구매 완료 페이지로 이동시켜 줍니다.

## 마치며
#### 이 프로젝트는 저에게 첫 팀 프로젝트였습니다. 협업을 위해 다음의 툴들을 이용하였습니다.
 + Zoom
 + Kakaotalk
 + Slack
 + Github
 + Postman
#### 프론트엔드 개발에 있어서 효율적인 코드 작성이 서비스 이용 속도에 직관되는 줄 알았습니다. 하지만 개발을 진행할 수록 프론트엔드 코드를 얼마나 효과적으로 작성하기 보다는 백엔드와 통신이 얼마나 원할하게 진행되냐에 따라 서비스 이용 속도에 큰 영향을 끼쳤습니다. 이쪽 부분에 대해서는 알고있는 부분이 많이 없어서 프로젝트 이후 추가적으로 공부하기로 하였습니다.

#### 프로젝트의 약 90%를 비대면으로 진행하였는데 쉽지 않은 과정이었습니다. 옆에서 같이 개발하는게 아니니 자연스럽게 소통이 줄게 되었고, 소통이줄어드니 프론트와 백엔드를 서로 연결할 때에 있어서 많은 어려움이 있었을 뿐만 아니라 서로 원하는 개발 방향을 조율하기가 힘들었습니다. 결국에 프론트와 백엔드 연결에 있어서 많은 시간을 소비하게 되었습니다. 어려움 극복에 있어서 대면 회수 증가를 통한 소통 극복이 해결책이긴 하였지만, 백신 접종 완료 이전까지는 다른 방법으로 어려움을 최소화 하도록 노력하였습니다. 에를들어, Postman을 통해서 백엔드와 프론트 통신에 있어서 필요한 변수들의 이름과 URL 주소들을 폴더별로 만들어 효율적이고 개발자다운 소통을 늘렸습니다. 이후, 프로젝트 후반에가서 팀원 모두 백신 접종을 완료하게 되었고 기존 보다 조금 더 대면하여 같이 개발하는 회수를 늘림으로써 자연스러운 소통 증가로 연결시켰고 최초 계획한 목표만큼 개발을 마무리할 수 있었습니다.
