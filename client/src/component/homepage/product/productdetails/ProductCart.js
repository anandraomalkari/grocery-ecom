import React, { useState, useEffect } from 'react'
import './productcart.css'
import Navbar from '../../../navbar/Navbar'
import SubNav from '../../../subnavbar/SubNav';
import { Divider } from '@mui/material';
import Tea, { tea } from '../productlist/Tea/Tea';
import { useParams } from 'react-router-dom';



const ProductCart = () => {

    const { id } = useParams("")
    console.log(id)

    const [inddata, setIndedata] = useState("");

    console.log([inddata]);

    const getinddata = async () => {
        const res = await fetch(`/getproductone/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        // console.log(data);

        if (res.status !== 201) {
            alert("no data available")
        } else {
            // console.log("ind mila hain");
            setIndedata(data);
        }
    };

    useEffect(() => {
        setTimeout(getinddata, 1000)
    }, [id]);


    return (
        <>
            <Navbar />
            <SubNav />
            <div className='cart_section'>
            {inddata && Object.keys(inddata).length &&
                <div className="cart_container">
                    <div className="left_cart">
                        <img src={inddata.img} alt="cart" />
                        <div className="cart_btn">
                            <button className='cart_btn1'>Add to cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>
                    </div>
                    <div className="right_cart">

                        <div className='products_item'>
                            <p className='product_id'>{inddata.id}</p>
                            <p className='product_name'>{inddata.title.shortTitle}</p>
                            <p className='product_subname'>{inddata.title.longTitle}</p>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default ProductCart