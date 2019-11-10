import React, { Component } from 'react'
import '../css/Slider.css';

export default class Slider extends Component {
    render() {
        return (
            <div style={{animationDelay:this.props.delay+"s"}} className={`${this.props.sliderwidth} ${this.props.image}`}>
                <div className="slider-container">
                    <div style={{animationDelay:this.props.delayinner+"s"}} className="slider-container-inner">
                        <div className="slider-container-inner-center">
                            <h3>{this.props.name}</h3>
                        </div>
                        <span>Know more</span>
                    </div>  
                </div>
            </div>
        )
    }
}