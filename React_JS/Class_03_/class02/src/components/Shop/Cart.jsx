import React from "react";

export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productsCount: 0
        }
        console.log("Con Cart");
    }


    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps Cart', props, state)
        if (props.productsInCart.length !== state.productsCount) {
            return {
                productsCount: props.productsInCart.length
            }
        }
        return null
    }

    componentDidMount(){
        console.log('componentDidMount Cart');

        window.addEventListener('scroll',this.handleScroll)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate Cart',nextProps,nextState);
        if(nextProps.productsInCart !== this.props.productsInCart) {
            return true
        }
        return false
    }

    handleScroll(e){
        // console.log('We are scrolling', e);
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate Cart',prevProps,prevState);

        return window.pageYOffset
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate Cart',prevProps,prevState,snapshot);

        if (snapshot !== null && snapshot === window.pageYOffset){
            window.scrollTo(0,0)
        }
    }

    render() {
        console.log("Render Cart");
        return (
            <div>
                <h2>Cart ({this.state.productsCount})</h2>
                {
                    this.props.productsInCart.map(product => (
                        <li key={`cart-${product.id}`}>
                            <p>{product.name}</p>
                            <button 
                                onClick={() => this.props.removeFromCart(product.id)}
                                type="button"
                            >
                                Remove
                            </button>
                        </li>
                    ))
                }
            </div>
        )
    }
}