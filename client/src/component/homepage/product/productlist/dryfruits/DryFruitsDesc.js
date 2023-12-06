import { Divider } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dryfruitsdata } from './DryFruits';
import './dryfruits.css'
import { NavLink } from 'react-router-dom';

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

const DryFruitsDesc = ({ title }) => {
  return (
    <><br />
      <div className='dry_products_section'>
        <div className='dry_products_deal'>
          <h3><strong>{title}</strong></h3>

        </div>
        <Divider />

        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={true}
          showDots={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {
            dryfruitsdata.map((e) => {
              return (
                <NavLink to={`/getproductsone/${e.id}`}>
                  <div className='dry_products_items'>
                    <div className='dry_products_img'>
                      <img src={e.url} alt={e.title.longTitle} title={e.title.longTitle} />

                      <p className='dry_products_name'>{e.title.shortTitle}</p>
                      <p className='drt_products_name'>{e.price.cost}</p>
                    </div>
                  </div>
                </NavLink>
              )
            })
          }
        </Carousel><Divider /><br></br>
        <strong>Our Wide Variety of DryFruits Products.</strong>    </div>
    </>
  )
}


export default DryFruitsDesc