import React, { useState, useEffect } from 'react'
import { Divider } from '@mui/material'
import Navbar from '../navbar/Navbar';
import SubNav from '../subnavbar/SubNav';
import './userorder.css'
import Footer from '../footer/Footer';

const UserOrder = () => {
    const [cartdata, setCartdata] = useState("");

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
                                            <div className="item_containerts">
                                                <img src={e.url} className="img_of_data" alt="" />
                                                <div className="item_details">
                                                    <h4>{e.title.shortTitle}</h4>
                                                    <h3 className='diffrentprice'>₹{e.price.cost}</h3>
                                                    <p className='price'>MRP: {e.price.mrp} | Discount: {e.price.discount}</p>
                                                    <Divider />
                                                    <p className='desc'>{e.description}</p>
                                                    <p className='unusuall'>Usally despatched in 2 hr</p>
                                                    {/* <Option deletedata={e.id} get={getdatabuy} setTotalPrice={setTotalPrice} /> */}
                                                </div>
                                                <h3 className='item_price'>₹{e.price.cost}</h3>
                                            </div>
                                            <Divider />

                                        </>

                                    )
                                    
                                })
                            }
                        </div>
                    </div>
                </div> : ""
            }
            <Footer />

        </>
    )
}

export default UserOrder