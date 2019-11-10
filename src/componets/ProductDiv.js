import React, { Component } from 'react'

import '../css/ProductDiv.css';

export default class ProductDiv extends Component {
    render() {
        return (
            <div className={`productdiv ${this.props.image}`}>
                <div className="productdiv-container">
                    <div className="productdiv-container-center">
                        <div className="productdiv-container-center-info">
                            <h3>{this.props.product}</h3>
                            <h1>{this.props.h1}</h1>
                            <p>{this.props.p}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}