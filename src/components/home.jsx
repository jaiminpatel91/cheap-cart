import React, {Component} from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Banner } from './Banner/banner';
import ProductList from './ProductList/productList';

export class Home extends Component {

    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faHome} />
                <Banner />
                <ProductList />
            </div>
        )
    }
}