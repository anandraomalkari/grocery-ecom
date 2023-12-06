import React from 'react'
import { useEffect, useState } from 'react';
import './buynow.css'
import Navbar from '../navbar/Navbar'
import SubNav from '../subnavbar/SubNav'
import { Divider } from '@mui/material'
import Option from './Option'
import SubTotal from './SubTotal'
import Right from './Right'
//import ProImag from '../homepage/product/productlist/images/phoolmakhana.png';
//import RazorpayCheckout from 'react-razorpay';
//import Razorpay from 'razorpay'


const Buynow = () => {

  const [cartdata, setCartdata] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(cartdata.carts);


  const getdatabuy = async () => {
    const res = await fetch("/cartdeatils", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      Credential: "include"
    });
    const data = await res.json();

    if (res.status !== 201) {
      console.log("error");
    } else {

      setCartdata(data.carts);
    }

  };

  useEffect(() => {
    getdatabuy();
  }, []);



  return (
    <>
      <Navbar />
      <SubNav />
      {
        cartdata.length ? <div className="buy_section">
          <div className="buy_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className='leftbuyprice'>Price</span>
              <Divider />

              {
                cartdata.map((e, k) => {
                  return (
                    <>
                      <div className="item_containert">
                        <img src={e.url} alt="" />
                        <div className="item_details">
                          <h3>{e.title.shortTitle}</h3>
                          <h3 className='diffrentprice'>₹{e.price.cost}</h3>
                          <p className='unusuall'>Usally despatched in 8 days</p>
                          <p>Free Shopping</p>
                          <img src="https://m.media-amazon.com/images/G/01/support_images/GUID-7254C67F-EA22-4E64-BB79-6F45644F83BF=2=en-IN=Normal.jpg" alt="" />
                          <Option deletedata={e.id} get={getdatabuy} setTotalPrice={setTotalPrice} />
                        </div>
                        <h3 className='item_price'>₹{e.price.cost}</h3>
                      </div>
                      <Divider />
                    </>
                  )
                })
              }

              <SubTotal iteam={cartdata} />
            </div>
            <Right iteam={cartdata} />
          </div>
        </div> : ""
      }

    </>
  )
    ;
};

export default Buynow