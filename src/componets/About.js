import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import '../css/About.css';

import dropdowniconwhite from "../images/dropdown-icon-white.svg";

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isScrolled:false
        };
    }
    
    handleWaypoint = () =>{
        console.log("poutsa");
        this.setState({
            isScrolled: true
        });
        console.log(this.state.isScrolled);
    }
    render() {
        let display="none"
        if(this.state.isScrolled){
            display="block"
        }
        if(window.innerWidth < 640){
            display="block"
        }
        return (
            <div className="about">
                <div className="about-history">
                    <div className="row">
                        <div className="col">
                            <h1>History</h1>
                        </div>
                        <div className="col">
                            <span>01</span>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col">
                            <h3>Our premioum fruits</h3>
                        </div>
                        <div className="col"> 
                            <p>With Giats brand we market our premium fruits, which stand out for their quality and flavour.</p>
                            <p>Giats brand has its origins in the 90s when, Giats, wanted to differentiate the Premium range of products.</p>
                        </div>
                    </div>
                    <h3 className="about-history-big">History</h3>
                </div>
                <div className="about-animation">
                    <div>
                        <ul>
                            <li>
                                <img alt="dropdown-icon" className="up" src={dropdowniconwhite} />
                            </li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <li>__</li>
                            <Waypoint topOffset={580} onEnter={this.handleWaypoint}>
                            <li>
                                <img className="down" alt="dropdown-icon" src={dropdowniconwhite}/>
                            </li>
                            </Waypoint>
                        </ul>
                    </div>
                </div>
                    <div style={this.state.scrolled ? {display:display} : {display:display}} className="about-production">
                        <div className="row">
                            <div className="col">
                                <h1>Production</h1>
                            </div>
                            <div className="col">
                                <span>02</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Giats products, are products that are grown in the south of the Murcia Region selected by hand to ensure their quality.</p>
                                <p>A team with over 60 years of experience dedicated to growing these products ensures that the product reaches your hands after being looked after during all stages of production and harvesting.</p>
                            </div>
                            <div className="col">
                                <h3>More than 60 years of experience</h3>
                            </div>
                        </div>
                        <h3 className="about-production-big">Production</h3>
                    </div>
            </div>
        );
    }
}
export default About;
    