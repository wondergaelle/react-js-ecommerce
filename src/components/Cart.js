import React, {Component} from 'react';
import CartItem from "./CartItem";
import "./Cart.scss";

class Cart extends Component {
    render() {
        const productLi = this.props.products.map((product, key) => <li key={key}><CartItem product={product} removeFromCart={p => this.props.removeFromCart(p)} addToCart={p=>this.props.addToCart(p)}/></li>);

        //calcule du montant total
        /*    let total = 0;
            for (let i = 0 ; i < this.props.products.length; i++){
                let p = this.props.products[i];
                total+= p.qte * p.price;
            }*/

        {/*le 0 permet d'initier la valeur de départ on peut demarrer à 20 si frais de port*/
        }
        const total = this.props.products.reduce((accumulator, p) => accumulator + (p.price * p.qte), 0);

        return (
            <aside className="cart">
                <h2>Mon panier</h2>
                <ul>
                    {productLi}
                </ul>

                {/*calcul du montant total*/}
                <div>Panier Total :{total} €</div>

            </aside>
        );
    }
}

export default Cart;