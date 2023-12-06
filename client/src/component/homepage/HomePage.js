import React, {useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import SubNav from '../subnavbar/SubNav'
import Footer from '../footer/Footer'
import TeaDesc from './product/productlist/Tea/TeaDesc'
import OilDesc from './product/productlist/oilandGhee/OilandGheeDesc'
import './homepage.css'
import BiscutDesc from './product/productlist/biscut/BiscutDesc'
import ChocolatesDesc from './product/productlist/chocolates/ChocolatesDesc'
import DryFruitsDesc from './product/productlist/dryfruits/DryFruitsDesc'
import MakhanaDesc from './product/productlist/makhana/MakhanaDesc'
import SoapandDetergentDesc from './product/productlist/soapanddetergent/SoapandDetergentDesc'
import FlourDesc from './product/productlist/flour/FlourDesc'
import { getProducts } from '../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux'


const HomePage = () => {
  const {products} = useSelector(state=>state.getproductsdata);
  console.log(products);


  //Dispatching actions is the only way to change the state in Redux.
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
    <Navbar />
    <SubNav />
    <div className='home_section'>
      {/* <div className='banner'>
        <Banner />
      </div> */}
      {/* <div className='slide_part'>
        <div className='left_slide'>
          <TeaDesc title="Tea" />
        </div>
        <div className='right_slide'>
          <h4>Festive latest launches</h4>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
          <a href="#">see more</a>
        </div>
      </div> */}

      <MakhanaDesc title="Makhana" />
      <DryFruitsDesc title="Dry Fruits" />
      <OilDesc title="Oil and Ghee"/>
      <TeaDesc title="Tea" />
      {/* <div className='imag_banner'>
        <img src="https://retailer-onboarding-kyc.s3.amazonaws.com/44383fab20230901-053735.jepg" alt='banner'/>
      </div> */}
      
      {/* <JuicesDesc title="Juices"/> */}
      {/* <div className='imag_banner'>
        <img src="https://cdn.dmart.in/images/rwd/banners/curated/1oct23-curated-basket-musthaves-pune.jpg" alt="banner" />
      </div> */}

      <BiscutDesc title="Biscuit"/>

      {/* <BiscutDesc title="Biscut"/> */}
      <ChocolatesDesc title="Chocolates" />
      <SoapandDetergentDesc title="Soap and Detergent" />
      <FlourDesc title="Flour" />
    </div>
    <Footer />
    </>
  )
}

export default HomePage