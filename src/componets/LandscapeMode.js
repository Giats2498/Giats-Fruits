import React, { Component } from 'react'

import '../css/LandscapeMode.css';
import turnmobile from "../images/turn-mobile.svg";

export default class LandscapeMode extends Component {
    render() {
        return (
            <div className="landscape">
                <div className="landscape-container">
                    <div className="landscape-container-main">
                        <img alt="turnmobile"  src={turnmobile}/>
                        <h3>Turn your mobile to see the web.</h3>
                    </div>
                </div>
            </div>
        )
    }
}