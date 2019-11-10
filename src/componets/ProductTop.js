import React, { Component } from 'react'

import Slider from "../componets/Slider";
import '../css/ProductTop.css';
import mouse from "../images/mouse.svg";
export default class ProductTop extends Component {
    render() {
        const sliders= [];
        for (let i=0; i<this.props.options.length; i++){
            sliders.push(<Slider key={i} sliderwidth={this.props.page==="tomatoes" ? "smallslider" : "bigslider"} delay={1.2+(i*0.6)} delayinner={1.3+(i*0.6)} image={this.props.images[i]} name={this.props.options[i]} />)
        }
        return (
            <div className="producttop">
                <div className="producttop-container">
                    <div>
                        <div>
                            <div className="producttop-container-slider">
                                <div className="producttop-container-slider-draggable"> 
                                    <div className="producttop-container-slider-draggable-tracker">
                                        {sliders}
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-container-mouse">
                        <img alt="mouse" src={mouse}/>
                        <div className="main-container-mouse-line"></div>
                    </div>
                </div>
            </div>
        )
    }
}