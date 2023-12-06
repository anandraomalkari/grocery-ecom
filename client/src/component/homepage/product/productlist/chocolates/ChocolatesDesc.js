import React from 'react'
import { Divider } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { chocolatesdata } from './Chocolates'
import './chocolates.css'
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


const ChocolatesDesc = ({ title }) => {
    return (


        <div className='chocolate_products_section'>
            <div className='chocolate_products_deal'>
                <h3>{title}</h3>
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
                    chocolatesdata.map((e) => {
                        return (
                            <NavLink to={`/getproductsone/${e.id}`}>
                                <div className='chocolate_products_items'>
                                    <div className='chocolate_products_img'>
                                        <img src={e.url} alt={e.title.longTitle} title={e.title.longTitle} />
                                        <p className='chocolate_products_name'>{e.title.shortTitle}</p>
                                        <p className='chocolate_products_name'>{e.price.cost}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }

            </Carousel><Divider />
            <p><strong>Our Wide Variety of Chocolates Products.</strong></p>
        </div>
    )
}

export default ChocolatesDesc