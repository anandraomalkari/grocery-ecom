import React, { useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import { Divider } from '@mui/material';
import Navbar from '../../navbar/Navbar';
import SubNav from '../../subnavbar/SubNav';
import Footer from '../../footer/Footer';
import { makhanalist } from './MakhanaList';
import './makhana.css';

const MakahanaListDesc = ({title, onAddToCart}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
        setCart([...cart, product]);
        setTotal(total + product.price);
    };

    return (
        <>
            <Navbar />
            <SubNav />
            <div className='eproducts_deal'>
                <h3>Makhana</h3>
            </div>
            <div className='eproducts_section' >
                <Divider />
                {
                    makhanalist.map((e, product) => {
                        return (
                            <div className="eproducts_main">
                                <div className='eproducts_items'>
                                    <div className='eproducts_img'>
                                        <img src={e.img} alt={e.title.shortTitle} />
                                    </div>
                                    <strong><p className='products_name'>{e.title.shortTitle}</p></strong>
                                    <p className='product_quality'><span>Quality: </span>{e.quality}</p>

                                    {/* <button onClick={() => onAddToCart(product)}>
                                        Add to Cart
                                    </button> */}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <Footer />
        </>
    )
}

export default MakahanaListDesc