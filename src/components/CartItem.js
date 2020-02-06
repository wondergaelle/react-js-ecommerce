import React, {Component} from 'react';
import "./CartItem.scss";
import Product from "./Product";

class CartItem extends Component {
    render() {

        const {product} = this.props;


        return (
            <article className="cart-item">
                <img src={product.image} alt={product.name}/>
                <div className="cart-item-content">
                    <h3>{product.name}</h3>
                    <div>Prix : {product.price} €</div>
                    <div>Prix : {product.qte}
                        <button onClick={event => this.props.removeFromCart(product)}> - </button>
                    </div>

                    <div> Montant total : {product.price * product.qte} €</div>
                </div>
            </article>


        );
    }
}

export default CartItem;