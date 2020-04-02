import React, {Component} from 'react';
import { Banner } from './Banner/banner';
import ProductList from './ProductList/productList';
import ProductFilter from './ProductFilter/productFilter';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.productList.data.length > 0 ? <div>
                        <ProductFilter />
                        <ProductList />
                        </div>
                         : <Banner />
                }
            </div>
        )
    }
}
export default connect( state => state)(Home)