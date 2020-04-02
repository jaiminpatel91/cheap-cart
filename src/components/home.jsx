import React, {Component} from 'react';
import { Banner } from './Banner/banner';
import ProductList from './ProductList/productList';
import ProductFilter from './ProductFilter/productFilter';
import { connect } from 'react-redux';
import ProductSortBy from './ProductFilter/ProductSortBy/productSortBy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.loading ? <div className="center-loader">
                    <span><FontAwesomeIcon icon={faYinYang} size={'5x'} spin /></span>
                    </div> : null
                }
                
                {
                    this.props.productList.data.length > 0 ? <div>
                        <ProductSortBy />
                    <div className={'product-list-filter'}>
                        <ProductFilter />
                        <ProductList />
                        </div>
                        </div>
                         : <Banner />
                }
            </div>
        )
    }
}
export default connect( state => state)(Home)