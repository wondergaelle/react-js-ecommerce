import React, {Component} from 'react';
import "./Product.scss";
import BtnAddToCart from "./BtnAddToCart";

class Product extends Component {
    render() {

        const product = this.props.product;
        const stock =  product.stock - product.qte;

        return (
            <article className="product">
                <h2>{product.name}</h2>
                <img src={product.image} alt=""/>
                <div>Prix : {product.price} €</div>
                <div>{stock}</div>
                <div>Stock restant: {product.stock - product.qte}</div>
                <BtnAddToCart addToCart={p=>this.props.addToCart(p)} product={product}> Ajouter au panier </BtnAddToCart>
            </article>
        );
    }
}

export default Product;