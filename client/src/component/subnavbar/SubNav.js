import React from 'react';
import './subnavbar.css';
// import subnavimg from './map.png';
import { NavLink } from 'react-router-dom';//Page linked but without reloading the page

const SubNav = () => {
    return (
        <div className='new_nav'>
            <div className="nav_data">
                <div className="left_data">
                    <NavLink to="/"><p>All</p></NavLink>
                    <NavLink to="/dryfruit"><p>Dry Fruits</p></NavLink>
                    <NavLink to="/makhana"><p>Makhana</p></NavLink>
                    <NavLink to="/oilandghee"><p>Oil and ghee</p></NavLink>
                    <NavLink to="/otherproducts"><p>Other Products</p></NavLink>
                    <NavLink to="/contactus"><p>Contact Us</p></NavLink>
                </div>
                {/* <div className="right_data">
                    <a href=''><img src={subnavimg} alt="Offers" /></a>
                </div> */}
            </div>
        </div>
    )
}

export default SubNav;