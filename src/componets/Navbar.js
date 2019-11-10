import React, { Component } from 'react'

import Logo from "../images/logo1.svg";
import dropdownicon from "../images/dropdown-icon.svg";
import dropdowniconblack from "../images/dropdown-icon-black.svg";
import '../css/Navbar.css';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    state = {
        isOpenmMenu: false,
        isOpenLanguage: false,
        isOpenProducts: false,
        isOpenMobileLanguage: false,
    };
    menuToggle = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
        if(this.state.isOpenmMenu===false){
            this.setState({ isOpenProducts:false});
        }
    };
    languageToggle = () => {
        this.setState({ isOpenLanguage: !this.state.isOpenLanguage });
    };
    mobileLanguageToggle = () => {
        this.setState({ isOpenMobileLanguage: !this.state.isOpenMobileLanguage });
    };
    productsToggle = () => {
        if(this.state.isOpenProducts===false){
            this.setState({ isOpenProducts:true});
        }
    };
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to='/'>
                        <img alt="logo"  src={Logo}/>
                    </Link>
                </div>
                <div className="navbar-lang" onClick={this.languageToggle}>
                    <div className="navbar-lang-drop">
                        <ul>
                            <li className="navbar-lang-drop-first">
                                <Link>
                                    <span>English</span>
                                    <img  className={this.state.isOpenLanguage ? "dropdown-icon-show" : "dropdown-icon-hide"} alt="dropdown-icon" src={dropdownicon}/>
                                </Link>
                            </li>
                            <ul className={this.state.isOpenLanguage ? "navbar-lang-drop-show" : "navbar-lang-drop-hide"}>
                                <li>
                                    <Link>
                                        <span>Ελληνικά</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span>Español</span>
                                    </Link>>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className={this.state.isOpenMenu ? "navbar-button-pressed" : "navbar-button"} onClick={this.menuToggle}>
                    <div className="navbar-button-letters">
                        <div className={this.state.isOpenMenu ? "navbar-button-letters-m-pressed" : "navbar-button-letters-m"}>
                            M
                        </div>
                        <div  className={this.state.isOpenMenu ? "navbar-button-letters-x-pressed" : "navbar-button-letters-x"}>
                            X
                        </div>
                    </div>
                </div>
                <div className={this.state.isOpenMenu ? "navbar-menu-pressed" : "navbar-menu"}>
                    <nav className={this.state.isOpenMenu ? "navbar-menu-nav" : "navbar-menu-nav"}>
                        <div className={this.state.isOpenMenu ? "navbar-menu-nav-header-pressed" : "navbar-menu-nav-header"}>
                            <span>Menu</span>
                        </div>
                        <div  className={this.state.isOpenMenu ? "navbar-menu-nav-container-pressed" : "navbar-menu-nav-container"}>
                            <ul>
                                <li>
                                    <Link to='/aboutus'>
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={this.productsToggle}>Products</Link>
                                    <ul className={this.state.isOpenProducts ? "navbar-menu-nav-container-products-pressed" : "navbar-menu-nav-container-products"}>
                                        <li>
                                            <Link to='/product/tomatoes'>
                                                Tomatoes
                                            </Link>                
                                        </li>
                                        <li>
                                            <Link to='/product/citrus'>
                                                Citrus
                                            </Link>  
                                        </li>
                                        <li>
                                            <Link to='/product/watermelon'>
                                                Watermelon
                                            </Link>  
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/contactus'>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={this.state.isOpenMenu ? "navbar-menu-nav-container-lang-pressed" : "navbar-menu-nav-container-lang"}>
                            <div>
                                <div className="navbar-menu-nav-container-lang-dropdown">
                                    <ul>
                                        <li onClick={this.mobileLanguageToggle}>
                                            <Link>
                                                <span >English</span>
                                                <img  className={this.state.isOpenMobileLanguage ? "dropdown-icon-black-show" : "dropdown-icon-black-hide"} alt="dropdown-icon" src={dropdowniconblack}/>
                                            </Link>
                                            <ul className={this.state.isOpenMobileLanguage ? "navbar-menu-nav-container-lang-dropdown-show" : "navbar-menu-nav-container-lang-dropdown-hide"}>
                                                <li>
                                                    <Link>
                                                        <span>Ελληνικά</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link>
                                                        <span>Español</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={this.state.isOpenMenu ? "navbar-menu-nav-container-footer-pressed" : "navbar-menu-nav-container-footer"}>
                            <span>
								Specialists in premium fruits
							</span>
                        </div>
                    </nav>
                </div>
            </nav>
        )
    }
}
