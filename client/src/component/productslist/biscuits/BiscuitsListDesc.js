import React from 'react'
import Navbar from '../../navbar/Navbar'
import SubNav from '../../subnavbar/SubNav'
import { Divider } from '@mui/material'
import Footer from '../../footer/Footer'
import { biscutlist } from './BiscuitsList'
import './biscuits.css'

const BiscuitsListDesc = () => {
    return (
        <>
            <Navbar />
            <SubNav />
            <div className='eproducts_deal'>
                <h3>Biscuits</h3>
            </div>
            <div className='eproducts_section'>
                <Divider />
                {
                    biscutlist.map((e) => {
                        return (
                            <div className="eproducts_main">
                                <div className='eproducts_items'>
                                    <div className='eproducts_img'>
                                        <img src={e.img} alt={e.title.shortTitle} />
                                    </div>
                                    <strong><p className='products_name'>{e.title.shortTitle}</p></strong>
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

export default BiscuitsListDesc