import React, {Component} from 'react';
import Product from "./Product";

class ProductList extends Component {
    render() {

        const products = this.props.products.map((product, key) => <li key={key}><Product product={product}/></li>);

        return (
            <ul>
                {products}
            </ul>
        );
    }
}

export default ProductList;