import React from 'react'
import "react-multi-carousel/lib/styles.css";
import { Divider } from '@mui/material';
import Navbar from '../../navbar/Navbar';
import SubNav from '../../subnavbar/SubNav';
import Footer from '../../footer/Footer';
import './dryfruitslist.css'
import {dryfruitslists} from './DryFruits'


const DryFruitsList = () => {
    return (
        <>
            <Navbar />
            <SubNav />
            <div className='eproducts_deal'>
                <h3>Dry Fruits</h3>
            </div>
            <div className='eproducts_section'>
                <Divider />
                {
                    dryfruitslists.map((e) => {
                        return (
                            <div className="eproducts_main">
                                <div className='eproducts_items'>
                                    <div className='eproducts_img'>
                                        <img src={e.img} alt={e.title.shortTitle} />
                                    </div>
                                    <strong><p className='products_name'>{e.title.shortTitle}</p></strong>
                                    <p className='product_quality'><span>Quality: </span>{e.quality}</p>
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

export default DryFruitsList