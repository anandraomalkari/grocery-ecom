import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './banner.css'

const data = [
    "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1oct23-crsl-ds-pune.jpg&w=1920&q=75",
    "https://www.bigbasket.com/media/uploads/banner_images/B2C092105100-9502-hp-b2c-HUL-460-6oct23.jpg?tr=w-1920,q=80",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1696016864_Feasting_mode_on_Desktop.jpg?im=Resize=(1680,320)",
    "https://retailer-onboarding-kyc.s3.amazonaws.com/44383fab20230901-053735.jepg"
]

const Banner = () => {
    return (
        <Carousel
            className='carasousel'
            autoPlay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    backgroundColor: "#fff",
                    color: "#494949",
                    borderRadius: 0,
                    marginTop: -22,
                    height: "104px"
                }
            }}
        >
            {
                data.map((imag, i) => {
                    return (
                        <>
                            <img src={imag} className='banner_img' />
                        </>
                    )
                })
            }
        </Carousel>
    )
}

export default Banner