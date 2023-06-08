import React from "react";

export default class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Cart</h2>
                {
                    this.props.productInCart.map(product =>(
                        <li key ={`cart-${product.id}`}>
                            <p>{product.name}</p>
                            <button type="button">Remove</button>
                        </li>
                    ))
                }
            </div>
        )
    }
}