import React, { useEffect, useState, useContext } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import SubNav from '../subnavbar/SubNav'
import { Divider } from '@mui/material'
import { makhanadata } from '../homepage/product/productlist/makhana/Makhana'
import './cart.css'
import { useNavigate, useParams } from 'react-router-dom'
import { LoginContext } from '../context/ContextProvider'
import CircularProgress from '@mui/material/CircularProgress';


const Cart = () => {

    const { id } = useParams("");
    //console.log(id);


    const history = useNavigate("");



    const {account, setAccount} = useContext(LoginContext);


    const [inddata, setInddata] = useState("");
    // console.log(inddata)
    const getinddata = async () => {
        try {
            const res = await fetch(`/getproductsone/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            console.log("checking in json   ", data);

            if (res.status !== 201) {
                console.log("No data found");
            } else {
                console.log("getdata");
                setInddata(data);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }


    useEffect(() => {
        setTimeout(getinddata,1000)
        // getinddata();
    }, [id]);



    //add to cart function
    const addtocart = async(id) => {
        const checkres = await fetch(`/addcart/${id}`, {
            method: "POST",
            headers: {
                Accept: "spplication/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inddata
            }),
            credentials: "include"
        });

        const data1 = await checkres.json();
        console.log(data1);

        if(checkres.status === 401 || !data1){
            console.log("user Invalid");
            alert("user Invalid");
        }else{
           // alert('Added To Cart');
           // history("/buynow");
            setAccount(data1);
        }
    }

    return (
        <>
            <Navbar />
            <SubNav />
            <div className='cart_section'>
                {inddata && Object.keys(inddata).length &&
                    <div className="cart_container">

                        <div className="left_cart">
                            <img src={inddata.url} alt="" />
                            <div className="cart_btn">
                                <button className='cart_btn1' onClick={() => addtocart(inddata.id)}>Add to cart</button>
                                <button className="cart_btn2">Buy Now</button>
                            </div>
                        </div>
                        <div className="right_cart">
                            <h3>{inddata.title && inddata.title.shortTitle}</h3>
                            <h3>{inddata.title && inddata.title.longTitle}</h3>
                            <Divider />
                            <p className="mrp">M.R.P: <sup>₹</sup>{inddata.price && inddata.price.mrp}</p>
                            <p className="amazonmrp">Deal of the Day: <span style={{ color: "#B12704" }}><sup>₹</sup>{inddata.price && inddata.price.cost}.00 </span></p>
                            <p>You save: <span style={{ color: "#B12704" }}><sup>₹</sup>{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount})</span></p>

                            <div className="discount_box">
                                <h4>Free Delivery: <span>Oct 8 - 21</span> Details</h4>
                                <p>Fastest Delivery: <span>Tomorrow 11 AM</span></p>
                            </div>
                            <p className="description">
                                About the Item: <span>{inddata.description}</span>
                            </p>
                        </div>

                    </div>
                }


                {!inddata ?           <div className="circle">
            <CircularProgress color="secondary"/>
            <h2>Loding... </h2>
          </div>: ""}
            </div>
            <Footer />
        </>
    )
}

export default Cart