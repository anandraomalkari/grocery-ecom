import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Payment from './Payment'; // Import Payment component

const Right = ({ iteam }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [iteam]);

  const totalAmount = () => {
    let totalPrice = 0;
    iteam.map((item) => {
      totalPrice += item.price.cost;
    });
    setPrice(totalPrice);
  };

  return (
    <div className="right_buy">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
      <div className="cost_right">
        <p>Your Order eligible for Free Delivery</p> <br />
        <span style={{ color: "#565959" }}>Select this option at checkout. Details</span>

        <h3>Subtotal({iteam.length} items): <strong><span style={{ color: '#111', fontWeight: 700 }}>₹{price}</span></strong></h3>
        {/* <Payment totalAmount={price} /> */}
        <button className="rightbuy_btn">
          <NavLink to="/payment">Buy Now</NavLink>
        </button>
        {/* <div className="emi">
          EMI Available
        </div> */}
      </div>
    </div>
  );
};

export default Right;
