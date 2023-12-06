import React from 'react'
import './otherproducts.css'
import { NavLink } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import SubNav from '../../subnavbar/SubNav';
import Footer from '../../footer/Footer';

const OtherProducts = () => {
  return (
    <>
    <Navbar/>
    <SubNav/>
      <h1 className='titlebar'>Other Products</h1>
      <div className="othercontainer">
        <div className="othercard">
          <NavLink to="/tea" id='links'>
            <div className="nameofpro">
              <h3>Tea</h3>
            </div>
          </NavLink>
        </div>

        <div className="othercard">
          <NavLink to="/biscuits" id='links'>
            <div className="nameofpro">
              <h3>Biscuits</h3>
            </div>
          </NavLink>
        </div>

        <div className="othercard">
          <NavLink to="/chocolates" id='links'>
            <div className="nameofpro">
              <h3>Chocolates</h3>
            </div>
          </NavLink>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default OtherProducts