import { Divider } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExoticeFruitsandVeggies, { exoticefruitsandveggies } from './ExoticFruitsandVeggies';
import './fruitsandveggies.css'
import Navbar from '../../navbar/Navbar';
import SubNav from '../../subnavbar/SubNav';
import Footer from '../../footer/Footer';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const ExoticFruitsandVeggiesDesc = () => {
    return (
        <>
            <Navbar />
            <SubNav />
            <div className='eproducts_deal'>
                <h3>Exotic Fruits & Veggies</h3>
            </div>
            <div className='e`products_section'>
                <Divider />
                {
                    exoticefruitsandveggies.map((e) => {
                        return (
                            <div className="products_main">
                                <div className='products_items'>
                                    <div className='products_img'>
                                        <img src={e.url} />
                                    </div>
                                    <p className='products_name'>{e.title.shortTitle}</p>
                                    <p className='products_offer'>{e.delivery}</p>
                                    <p className='products_expolre'>{e.tagline}</p>
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

export default ExoticFruitsandVeggiesDesc