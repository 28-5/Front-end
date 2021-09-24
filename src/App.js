import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";
import Dashboard from "./components/Admin/Dashboard";
import ShoppingRouter from "./components/Shopping/ShoppingRouter";
import ShoppingMain from "./components/Shopping/ShoppingMain";
import DetailedProduct from "./components/Shopping/Product/DetailedProduct";
import CartProvider from "./components/store/CartProvider";


function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = ()=>{
        setCartIsShown(true);
    };
    const hideCartHandler = ()=>{
        setCartIsShown(false);
    };
  return (
    <Router>
      <Switch>
          <Route exact path="/" exact component={Main}/>
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
    </Router>
  );
}

export default App;
