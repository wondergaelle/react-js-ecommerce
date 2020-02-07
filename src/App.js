import React, {Component} from 'react';
import ProductList from "./components/ProductList";
import {NavLink} from "react-router-dom";
import "./App.scss"
import Cart from "./components/Cart";
import {Route} from "react-router";
import Contact from "./components/contact";
import ProductItem from "./components/ProductItem";
import Loading from "./components/Loading";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading : true
        }
    }

    componentDidMount() {
        fetch('https://127.0.0.1:8000/product/')
            .then(response => response.json())
            .then(data => this.setState({products : data.map( p => {
                p.qte = 0;
                return p;
                }), loading : false,})
            )
    }

    addToCart(product) {
        let products = [...this.state.products]; // créer une copie du tableau  pour pouvoir le modifier
        products[this.state.products.indexOf(product)].qte++; // indexOf => index d'un des elts du tableau
        this.setState({products: products});// mettre à jour et recupérer
    }

    removeFromCart(product) {
        let products = [...this.state.products]; // créer une copie du tableau  pour pouvoir le modifier
        products[this.state.products.indexOf(product)].qte--; // indexOf => index d'un des elts du tableau
        this.setState({products: products});// mettre à jour et recupérer
    }

    render() {

        if (this.state.loading){
            return <loading/>;
        }
        return (
            <main className="main-container">
                <h1>Mon site ecommerce</h1>
                <nav>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>

                    </ul>
                </nav>

                <div className="page-container">
                    <Route path="/" exact>
                        <ProductList
                            products={this.state.products}
                            addToCart={p => this.addToCart(p)}
                        />
                    </Route>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/product/:id" component={ProductItem}/>
                    <Cart
                        products={this.state.products.filter(product => product.qte > 0)}
                        removeFromCart={p => this.removeFromCart(p)}
                        addToCart={p => this.addToCart(p)}
                    />
                </div>

            </main>
        );
    }
}


export default App;