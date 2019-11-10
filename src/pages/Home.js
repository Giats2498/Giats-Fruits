import React, { Component } from 'react'

import Navbar from "../componets/Navbar";
import RightNavbar from "../componets/RightNavbar";
import MainDiv from "../componets/MainDiv";
import LandscapeMode from "../componets/LandscapeMode";
import Footer from "../componets/Footer";
import Swipe from 'react-easy-swipe';

import '../css/Home.css';
import { scroller } from 'react-scroll'

class Home extends Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleSwipeUp = this.handleSwipeUp.bind(this);
        this.handleSwipeDown = this.handleSwipeDown.bind(this);
        this.state = {
            id: 1,
            backgroundy:0,
            backgroundx:0
        };
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";// Set the style
    }
    handler(id) {
        if(id===1){
            scroller.scrollTo('tomatoes', {
                duration: 1300,
                smooth: true
            });
        }else if(id===2){
            scroller.scrollTo('citrus', {
                duration: 1300,
                smooth: true
            });
        }else{
            scroller.scrollTo('watermelon', {
                duration: 1300,
                smooth: true
            });
        }
        this.setState({
            id: id
        });
    }

    handleScroll(event){
        var delta;

        if (event.wheelDelta){
            delta = event.wheelDelta;
        }else{
            delta = -1 * event.deltaY;
        }

        if (delta < 0){
            if(this.state.id===3){
                this.handler(3);
            }else{
                this.handler(this.state.id+1);
            }
        }else if (delta > 0){
            if(this.state.id===1){
                this.handler(1);
            }else{
                this.handler(this.state.id-1);
            }
        }
    } 
    handleSwipeUp(){
        if(this.state.id===3){
            this.handler(3);
        }else{
            this.handler(this.state.id+1);
        }
    }
    handleSwipeDown(){
        if(this.state.id===1){
            this.handler(1);
        }else{
            this.handler(this.state.id-1);
        }
    }
    handleMouseMove = event => {
        if(window.innerWidth/2 < event.clientX){
            console.log("right");
            this.setState({
                backgroundx: -20,  
              })
        }else{
            console.log("left");
            this.setState({
                backgroundx: 20,  
              })
        }
        if(window.innerHeight/2 < event.clientY){
            console.log("down");
            this.setState({
                backgroundy: -20,  
              })
        }else{
            console.log("up");
            this.setState({
                backgroundy: 0,  
              })
        }
    }
    render() {
        return (
            <>  
                <Navbar/>
                <RightNavbar page={"home"} options={["Tomatoes","Citrus","Watermelon"]} id={this.state.id} action={this.handler}/>
                <Swipe onSwipeUp={this.handleSwipeUp} onSwipeDown={this.handleSwipeDown}>
                    <section onWheel={this.handleScroll}  onMouseMove={this.handleMouseMove}> className="fullpage-wrapper">
                        <MainDiv backx={this.state.backgroundx} backy={this.state.backgroundy} name="tomatoes" img={"tomatoes"} h1={"Tomatoes"} href={'tomatoes'}/>
                        <MainDiv backx={this.state.backgroundx} backy={this.state.backgroundy} name="citrus" img={"citrus"} h1={"Citrus"} href={'citrus'}/>
                        <MainDiv backx={this.state.backgroundx} backy={this.state.backgroundy} name="watermelon" img={"watermelon"} h1={"Watermelon"} href={'watermelon'}/>
                    </section>
                </Swipe>
                <LandscapeMode/>
                <Footer/> 
            </>
        );
    }
}
export default Home;