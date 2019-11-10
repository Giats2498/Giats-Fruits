import React, { Component } from "react";
import axios from 'axios';

const FruitContext = React.createContext();


class FruitProvider extends Component {
    state={
        categories:[],
    };

    get actions() {
        return {
            categories: this.categories,
            loading:true
        };
    }
    
    categories = () => {
        //axios
        axios.get('http://localhost:5000/')
        .then(response => {
                let categories= this.formatData(response.data);
                this.setState({
                    categories,
                    loading:false
                });
        })  
    };
    
    formatData(items){
        let tempItems= items.map(item =>{
            const image =new Buffer(item.image).toString('base64');
            let category={...item,image};
            return category;
        });
        return tempItems;
    };

    render() {
        return (
            <FruitContext.Provider value={{...this.state,actions:this.actions}}>
                {this.props.children}
            </FruitContext.Provider>
        );
    }
}

const FruitConsumer = FruitContext.Consumer;
export{FruitProvider,FruitConsumer,FruitContext};

export function withFruitConsumer(Compoment){
    return function ConsumerWrapper(props){
        return (
            <FruitConsumer>
                {value=> <Compoment {...props} context={value} {...value} />}
            </FruitConsumer>
        );
    };
}


