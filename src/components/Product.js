import React, {Component} from 'react';

class Product extends Component {
    render() {

        const product = this.props.product;
        const stock =  product.stock - product.qte;

        return (
            <article>
                <h2>{product.name}</h2>
                <img src={product.image} alt=""/>
                <div>{stock}</div>
                <div>Stock restant: {product.stock - product.qte}</div>
                <button onClick={event=>this.props.addToCart(product)} disabled={stock===0}>Ajouter au panier</button>
            </article>
        );
    }
}

export default Product;