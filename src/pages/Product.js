import React, { Component } from 'react'

import Navbar from "../componets/Navbar";
import RightNavbar from "../componets/RightNavbar";
import ProductTop from "../componets/ProductTop";
import ProductDiv from "../componets/ProductDiv";
import LandscapeMode from "../componets/LandscapeMode";
import Footer from "../componets/Footer";
import Swipe from 'react-easy-swipe';
import { animateScroll as scroll,scroller } from 'react-scroll'
import '../css/Product.css';

class Product extends Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleSwipeUp = this.handleSwipeUp.bind(this);
        this.handleSwipeDown = this.handleSwipeDown.bind(this);
        this.state = {
            id: 1,
            options:[],
            divs:null,
            images:[],
            slug:""      
        };
    }
    componentDidUpdate() {
        if (this.props.match.params.slug !== this.state.slug) {
            this.componentDidMount();
        }
      }
    componentDidMount(){
        this.setState({
           slug: this.props.match.params.slug
        });
        this.options();
        this.divs();
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";// Set the style
    }
    handler(id) {
        if(this.props.match.params.slug==="tomatoes"){
            if(id===1){
                scroll.scrollToTop({
                    duration: 1300,
                    smooth: true
                });
            }else if(id===2){
                scroller.scrollTo('angelle', {
                    duration: 1300,
                    smooth: true
                });
            }else if(id===3){
                scroller.scrollTo('yellow-baby-plum', {
                    duration: 1300,
                    smooth: true
                });
            }else if(id===4){
                scroller.scrollTo('orange-baby-plum', {
                    duration: 1300,
                    smooth: true
                });
            }else if(id===5){
                scroller.scrollTo('kumato', {
                    duration: 1300,
                    smooth: true
                });
            }else{
                scroller.scrollTo('mini-kumato', {
                    duration: 1300,
                    smooth: true
                });
            }
        }else if(this.props.match.params.slug==="citrus"){
            if(id===1){
                scroll.scrollToTop({
                    duration: 1300,
                    smooth: true
                });
            }else if(id===2){
                scroller.scrollTo('striped-lemon', {
                    duration: 1300,
                    smooth: true
                });
            }else if(id===3){
                scroller.scrollTo('pink-lemon', {
                    duration: 1300,
                    smooth: true
                });
            }else if(id===4){
                scroller.scrollTo('limequat', {
                    duration: 1300,
                    smooth: true
                });
            }else{
                scroller.scrollTo('kumquat', {
                    duration: 1300,
                    smooth: true
                });
            }
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
            if(this.props.match.params.slug==="tomatoes"){
                if(this.state.id===6){
                    this.handler(6);
                }else{
                    this.handler(this.state.id+1);
                }
            }else if(this.props.match.params.slug==="citrus"){
                if(this.state.id===5){
                    this.handler(5);
                }else{
                    this.handler(this.state.id+1);
                }
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
        if(this.props.match.params.slug==="tomatoes"){
            if(this.state.id===6){
                this.handler(6);
            }else{
                this.handler(this.state.id+1);
            }
        }else if(this.props.match.params.slug==="citrus"){
            if(this.state.id===5){
                this.handler(5);
            }else{
                this.handler(this.state.id+1);
            }
        }
    }
    handleSwipeDown(){
        if(this.state.id===1){
            this.handler(1);
        }else{
            this.handler(this.state.id-1);
        }
    }
    options(){
        if(this.props.match.params.slug==="tomatoes"){
            this.setState({
                options: ["Tomatoes","Angelle","Yellow Baby Plum","Orange Baby Plum","Kumato","Mini Kumato"]
            });
        }else if(this.props.match.params.slug==="citrus"){
            this.setState({
                options: ["Citrus","Striped Lemon","Pink Lemon","Limequat","Kumquat"]
            });
        }
    }
    divs(){
        if(this.props.match.params.slug==="tomatoes"){
            this.setState({
                divs:<section onWheel={this.handleScroll} className="fullpage-wrapper">
                        <ProductTop name="top" page={this.props.match.params.slug} options={["Angelle","Yellow Baby Plum","Orange Baby Plum","Kumato","Mini Kumato"]} images={["angelle-top","yellow-baby-plum-top","orange-baby-plum-top","kumato-top","mini-kumato-top"]}/>
                        <ProductDiv name="angelle" image={"angelle"} product={"Tomatoe"} h1={"Angelle"} p={"The Angelle tomato is a snack tomato, crispy, with intense flavor and excellent aroma. Enjoy it at any time!"}/>
                        <ProductDiv name="yellow-baby-plum" image={"yellow-baby-plum"} product={"Tomatoe"} h1={"Yellow Baby Plum"} p={"Yellow Baby Plum is a peculiar snack tomato. Add color to your dishes!"}/>
                        <ProductDiv name="orange-baby-plum" image={"orange-baby-plum"} product={"Tomatoe"} h1={"Orange Baby Plum"} p={"Orange Baby Plum is a peculiar snack tomato. Add color to your dishes!"} />
                        <ProductDiv name="kumato" image={"kumato"} product={"Tomatoe"} h1={"Kumato"} p={"With the Kumato® tomato you will enjoy an intense flavour and an excellent texture."}/>
                        <ProductDiv name="mini-kumato" image={"mini-kumato"} product={"Tomatoe"} h1={"Mini Kumato"} p={"With the Mini version of the Kumato® tomato you will enjoy an intense flavour. The mini Kumato ® is a small sweet tomato with a characteristic color."}/>
                    </section>
            });
        }else if(this.props.match.params.slug==="citrus"){
            this.setState({
                divs:<section onWheel={this.handleScroll} className="fullpage-wrapper">
                        <ProductTop name="top" page={this.props.match.params.slug} options={["Striped Lemon","Pink Lemon","Limequat","Kumquat"]} images={["striped-lemon-top","pink-lemon-top","limequat-top","kumquat-top"]}/>
                        <ProductDiv name="striped-lemon" image={"striped-lemon"} product={"Citrus"} h1={"Striped Lemon"} p={"Striped lemon; original, tasty, aromatic and refreshing. Its original appearance and intense citrus flavour and aroma make the perfect accompaniment for your dishes and drinks."}/>
                        <ProductDiv name="pink-lemon" image={"pink-lemon"} product={"Citrus"} h1={"Pink Lemon"} p={"Discover an aromatic and different lemon! Explore its different colours, and surprise yourself with what’s on the inside. Its intense citrus aroma and colour make the pink lemon an essential for your kitchen. These lemons are in pink condition…"}/>
                        <ProductDiv name="limequat" image={"limequat"} product={"Citrus"} h1={"Limequat"} p={"Limequat is a small citrus with an intense citrus flavor similar to lime. Add a touch of citrus to your desserts or drinks."} />
                        <ProductDiv name="kumquat" image={"kumquat"} product={"Citrus"} h1={"Kumquat"} p={"Kumquat is a small citrus with edible skin, sweet on the outside and acidic inside. It is perfect to add a citrus flavor to desserts."}/>
                    </section>
            });
        }else{
            this.setState({
                divs:<section onWheel={this.handleScroll} className="fullpage-wrapper">
                        <ProductDiv image={"watermelon"} product={"Watermelon"} h1={"Watermelon"} p={"The range of Giats watermelons are perfect for summer. A tasty and seedless fruit that will refresh your moments!"}/>
                    </section>
            });
        }
    }
    render() {
        return (
            <> 
                <Navbar/>
                {this.props.match.params.slug!=="watermelon" ? <RightNavbar page={this.props.match.params.slug} options={this.state.options} id={this.state.id} action={this.handler}/> : <> </>} 
                <Swipe onSwipeUp={this.handleSwipeUp} onSwipeDown={this.handleSwipeDown}>
                    {this.state.divs}     
                </Swipe>
                <LandscapeMode/>
                <Footer/>
            </>
        );
    }
}
export default Product;
    