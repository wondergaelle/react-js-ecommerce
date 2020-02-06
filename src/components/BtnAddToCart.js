import React, {Component} from 'react';

class BtnAddToCart extends Component {
    render() {

        const {product} = this.props;
        const stock = product.stock - product.qte;
        return (
            <button onClick={event => this.props.addToCart(product)} disabled={stock === 0}>
                {this.props.children}
            </button>
        );
    }
}

export default BtnAddToCart;