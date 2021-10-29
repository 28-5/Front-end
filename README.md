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
+ Front-end: React: 17.0.2, React-redux: 7.2.6, Material-ui: 4.12.3, React-bootstrap: 2.0.0, Bootstrap: 5.1.3, React-router-dom: 5.3.,


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
