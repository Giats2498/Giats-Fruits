import React, { Component } from 'react'

import Navbar from "../componets/Navbar";
import ContactUsForm from "../componets/ContactUsForm";
import LandscapeMode from "../componets/LandscapeMode";
import Footer from "../componets/Footer";

import '../css/ContactUs.css';

class ContactUs extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        document.body.style.overflowY = "scroll";// Set the style
        document.body.style.overflowX = "hidden";// Set the style
    }
    render() {
        return (
            <>  
                <Navbar/>
                <div className="contactus"> 
                    <ContactUsForm/>
                </div>
                <LandscapeMode/>
                <Footer/>
            </>
        );
    }
}
export default ContactUs;
    