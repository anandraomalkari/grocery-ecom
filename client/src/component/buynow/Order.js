import { Divider } from '@mui/material'
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import SubNav from '../subnavbar/SubNav'
import Right from './Right'

const order = () => {
  return (
    <>
      <Navbar />
      <SubNav />

      <div className="order_container">
        <div className="order_card">
          <h1>Orders</h1>
          <Divider />
          <Right/>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default order