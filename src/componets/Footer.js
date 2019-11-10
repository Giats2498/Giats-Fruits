import React, { Component } from 'react'

import '../css/Footer.css';
import dropdowniconwhite from "../images/dropdown-icon-white.svg";

export default class Footer extends Component {
    state = {
        isOpenFooter: false
    };
    footerToggle = () => {
        this.setState({ isOpenFooter: !this.state.isOpenFooter });
    };
    render() {
        return (
            <footer className={this.state.isOpenFooter ? "footer-pressed" : "footer"}>
                <div onClick={this.footerToggle} className="footer-mobile">
                <img className={this.state.isOpenFooter ? "dropdown-icon-white-show" : "dropdown-icon-white-hide"} alt="dropdown-icon" src={dropdowniconwhite}/>
                    <span>Legal advices</span>
                </div>
                <div className={this.state.isOpenFooter ? "footer-container-pressed" : "footer-container"}>
                    <div className="footer-container-links">
                        <a href="/">Legal Advice</a>
                        <a href="/">Cookies Policy</a>
                        <a href="/">Privacy Policy</a>
                    </div>
                    <div className="footer-container-copyright">
                        <p>Giats © 2019 All rights reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}
