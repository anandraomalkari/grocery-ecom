// import logo from './logo.svg';
import './App.css';
// import Footer from './component/footer/Footer';
import Signin from './component/loginsignup/Signin';
import Signup from './component/loginsignup/Signup';
import HomePage from './component/homepage/HomePage';
import ProductCart from './component/homepage/product/productdetails/ProductCart';
import { Routes, Route } from "react-router-dom";
import ContactUs from './component/contactus/ContactUs';
import DryFruitsList from './component/productslist/dryfruits/DryFruitsList'
import MakahanaListDesc from './component/productslist/makhana/MakahanaListDesc';
import OilandGheeListDesc from './component/productslist/oilandghee/OilandGheeListDesc';
import OtherProducts from './component/productslist/otherproducts/OtherProducts';
import Profile from './component/signinsingup/Profile';
import BiscuitsListDesc from './component/productslist/biscuits/BiscuitsListDesc';
import ChocolatesListDesc from './component/productslist/chocolates/ChocolatesListDesc';
import BuyNow from './component/buynow/BuyNow';
import Cart from './component/cart/Cart';
// import ProductListOut from './component/products/ProductListOut';
import CircularProgress from '@mui/material/CircularProgress';
import React, {useState, useEffect} from 'react'
import Order from './component/buynow/Order'
import Payment from './component/buynow/Payment';
import Map from './component/buynow/Map'
import UserOrder from './component/buynow/UserOrder';

function App() {
  //tokentest
  const [data, setData] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 2000)
  }, [])
  const login = window.localStorage.getItem("isLogedIn");

  return (

    <>
      {
        data ? (
          <>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/cart" element={<Cart />} /> */}
              {/* <Route path="/cart" element={login ? <Cart />: <Signin />} /> */}
              {/* User Lists */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contactus" element={<ContactUs />} />

              {/* Product List */}
              <Route path="/dryfruit" element={<DryFruitsList />} />
              <Route path="/makhana" element={<MakahanaListDesc />} />
              <Route path="/oilandghee" element={<OilandGheeListDesc />} />
              <Route path="/otherproducts" element={<OtherProducts />} />
              <Route path="/biscuits" element={<BiscuitsListDesc />} />
              <Route path="/chocolates" element={<ChocolatesListDesc />} />
              {/* <Route path="/products" element={<ProductListOut/>}/> */}
              {/* Buy Products */}
              <Route path="/buynow" element={<BuyNow />} />
              <Route path="/getproductsone/:id" element={<Cart />} />
              <Route path="/orders" element={<Order/>} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/map" element={<Map />} />
              <Route path="/youroder" element={<UserOrder/>} />
            </Routes>
          </>
        ):(
          <div className="circle">
            <CircularProgress color="secondary"/>
            <h2>Loding... </h2>
          </div>
        )
    }

    {/* // <BrowserRouter>
    //  </BrowserRouter> */}
    </>

  );
}

export default App;
