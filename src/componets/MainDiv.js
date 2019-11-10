import React, { Component } from 'react'

import '../css/MainDiv.css';
import mouse from "../images/mouse.svg";
import {Link} from "react-router-dom";

export default class MainDiv extends Component {
    render() {
        return (
            <div style={{backgroundPosition:`${this.props.backx}px ${this.props.backy}px`}} className={`main ${ this.props.img }` } >
                <div className="main-container">
                    <div className="main-container-center">
                        <div className="main-container-center-info">
                            <h1>{this.props.h1}</h1>
                            <Link  to={`/product/${this.props.href}`}>
                                Know more
                            </Link>      
                        </div>
                    </div>
                    {this.props.h1==="Tomatoes" ?  
                        <div className="main-container-mouse">
                            <img alt="mouse" src={mouse}/>
                            <div className="main-container-mouse-line"></div>
                        </div>  : ""
                    }
                </div>
            </div>
        )
    }
}