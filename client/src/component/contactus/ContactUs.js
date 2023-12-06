import React from 'react'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import SubNav from '../subnavbar/SubNav';
import './contactus.css'
const ContactUs = () => {
    
    return (
        <>
            <Navbar />
            <SubNav />
            <section>
                <div className="contact_us">
                    <div className="contactform">
                        <form action="">
                            <h1>How can we help you?</h1>
                            <div className="input_data">
                                <label htmlFor="">Name</label>
                                <input type="text" name="UserName" placeholder='Your Name' />
                            </div>

                            <div className="input_data">
                                <label htmlFor="">Email</label>
                                <input type="email" name="UserEmail" placeholder='Your Email Address' />
                            </div>

                            <div className="input_data">
                                <label htmlFor="">Phone</label>
                                <input type="text" name="UserPhone" placeholder='Your Phone Number' />
                            </div>

                            <div className="input_data">
                                <label htmlFor="">Message</label><br />
                                <textarea name="message" id="" cols="30" placeholder='Type your Message'></textarea>
                            </div>
                            <button className='submit_btn' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactUs