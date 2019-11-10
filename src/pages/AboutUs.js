import React, { Component } from 'react'

import Navbar from "../componets/Navbar";
import About from "../componets/About";
import LandscapeMode from "../componets/LandscapeMode";
import Footer from "../componets/Footer";


class AboutUs extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        document.body.style.overflowY = "scroll";// Set the style
        document.body.style.overflowX = "hidden";// Set the style
    }
    render() {
        return (
            <>  
                <Navbar/>
                <About/>
                <LandscapeMode/>
                <Footer/>
            </>
        );
    }
}
export default AboutUs;
    