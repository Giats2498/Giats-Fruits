import React, { Component } from 'react'

import '../css/RightNavbar.css';

class RightNavbar extends Component {
    constructor(props) {
        super(props)

        this.top=""
    }

    render() {
        const options= [];
        for (let i=0; i<=this.props.options.length; i++){
            options.push(<span key={i} onClick={() => this.props.action(i+1)} className={this.props.id===i+1 ? "rightnavbar-track-bar-info-selected" : "rightnavbar-track-bar-info-notselected"}>{this.props.options[i]}</span>)
        }

        if(this.props.page==="home"){
            if(this.props.id===1){
                this.top="0"
            }else if(this.props.id===2){
                this.top="40%"
            }else{
                this.top="70%"
            }
        }
        
        if(this.props.page==="tomatoes"){
            if(this.props.id===1){
                this.top="-1"
            }else if(this.props.id===2){
                this.top="10%"
            }else if(this.props.id===3){
                this.top="25%"
            }else if(this.props.id===4){
                this.top="40%"
            }else if(this.props.id===5){
                this.top="55%"
            }else{
                this.top="70%"
            }
        }else if(this.props.page==="citrus"){
            if(this.props.id===1){
                this.top="-1"
            }else if(this.props.id===2){
                this.top="20%"
            }else if(this.props.id===3){
                this.top="40%"
            }else if(this.props.id===4){
                this.top="60%"
            }else{
                this.top="75%"
            }
        }
    
        return (
            <nav  style={this.top ==="-1" ? {display:"none"} : {display:"block"}} className="rightnavbar">
                <div className="rightnavbar-track">
                    <div style={{top:this.top}} className="rightnavbar-track-bar">
                        <div className="track-upper"></div>
                        <div className="track-lower"></div>
                        <div className="rightnavbar-track-bar-info">
                            {options}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default RightNavbar;