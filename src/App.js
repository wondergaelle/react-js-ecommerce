import React, {Component} from 'react';
import ProductList from "./components/ProductList";
import "./App.scss"
import Cart from "./components/Cart";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id:1,
                    name: 'Appareil photo',
                    image: 'https://i.picsum.photos/id/250/200/300.jpg',
                    price: 250.50,
                    stock: 3,
                    qte :1
                },
                {
                    id:2,
                    name: 'Bateau',
                    image: 'https://i.picsum.photos/id/211/200/300.jpg',
                    price: 75000,
                    stock: 1,
                    qte: 0
                },
                {
                    id:3,
                    name: 'Théière',
                    image: 'https://i.picsum.photos/id/225/200/300.jpg',
                    price: 30,
                    stock: 15,
                    qte:3
                }

            ]
        }
    }

    addToCart(product){
        let products =[...this.state.products]; // créer une copie du tableau  pour pouvoir le modifier
        products[this.state.products.indexOf(product)].qte++; // indexOf => index d'un des elts du tableau
        this.setState({products: products});// mettre à jour et recupérer
    }

    removeFromCart(product){
        let products =[...this.state.products]; // créer une copie du tableau  pour pouvoir le modifier
        products[this.state.products.indexOf(product)].qte--; // indexOf => index d'un des elts du tableau
        this.setState({products: products});// mettre à jour et recupérer
    }

    render() {
        return (
           <main className={"main-container"} >
                <ProductList
                    products={this.state.products}
                    addToCart={p=>this.addToCart(p)}/>
                <Cart
                    products={this.state.products.filter(product=>product.qte > 0)}
                    removeFromCart={p=>this.removeFromCart(p)}

                    addToCart={p=>this.addToCart(p)}
                />
           </main>
        );
    }
}

export default App;