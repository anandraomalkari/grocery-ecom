import React from 'react'
import Navbar from '../../navbar/Navbar'
import SubNav from '../../subnavbar/SubNav'
import Footer from '../../footer/Footer'
import { Divider } from '@mui/material'
import { chocolatelist } from './ChocolatesList'
import './chocolates.css'

const ChocolatesListDesc = () => {
    return (
        <>

            <Navbar />
            <SubNav />
            <div className="mainpros">
            <h3 className='titlebar'>Chocolates</h3>
            <div className='eproducts_section'>
                <Divider />
                {
                    chocolatelist.map((e) => {
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
            </div>
            <Footer />
        </>
    )
}

export default ChocolatesListDesc