import React, {Component} from 'react';
import "./CartItem.scss";
import Product from "./Product";
import BtnAddToCart from "./BtnAddToCart";

class CartItem extends Component {
    render() {

        const {product} = this.props;


        return (
            <article className="cart-item">
                <img src={product.image} alt={product.name}/>
                <div className="cart-item-content">
                    <h3>{product.name}</h3>
                    <div>Prix : {product.price}€</div>
                    <div>
                        Qte :
                        <button onClick={event => this.props.removeFromCart(product)}> - </button>
                        {product.qte}
                        <BtnAddToCart addToCart={p => this.props.addToCart(p)} product={product}> + </BtnAddToCart>
                    </div>
                    <div>Total : {product.price * product.qte}€</div>
                </div>
            </article>


        );
    }
}

export default CartItem;