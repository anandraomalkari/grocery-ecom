import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
//import { Logincontext } from '../context/Contextprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from '../navbar/Navbar';
// import SubNav from '../subnavbar/SubNav';
import logoimg from './logo.jpeg';
import './account.css';

const Signin = () => {

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });

    // console.log(data);

    const adddata = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);

        setData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    };

    const navigate = useNavigate();

    const senddata = async (e) => {
        e.preventDefault();

        const { email, password } = logdata;


        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });


        const data = await res.json();
        //console.log(data);

        if (res.status === 400 || !data) {
            console.log("Invalid data");
            toast.warn("Unsccessful", {
                position: "top-center"
            });
        } else {
            console.log("data valid");
            toast.success("Sccessful", {
                position: "top-center"
            });
            setData({ ...logdata, email: "", password: "" });
        }
        navigate("/");
    }

    return (
        <>
        {/* <Navbar/>
        <SubNav/> */}
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <NavLink to="/"><img src={logoimg} alt="signupimg" /></NavLink>
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <NavLink to="/"><img src={logoimg} alt="signupimg" /></NavLink>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={adddata}
                                value={logdata.email}
                                id="email" />
                        </div>



                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={logdata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>
                    </form>
                    <ToastContainer />
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <button>  <NavLink to="/signup">Create your Amazon Account</NavLink></button>
                </div>
            </div>

        </section>
        </>
    )
}

export default Signin