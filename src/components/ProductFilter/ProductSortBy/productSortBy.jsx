import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addProductList, onLoading, offLoading } from '../../../actions/appAction';
import  data  from '../../../data';

class ProductSortBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    componentDidMount() {
   
    }

    change = (event) => {
        this.props.dispatch(onLoading(false));
        if (event.target.value === 'asc') {
            let mydata = {
                data: this.props.productList.data
            };
            mydata.data.sort((a, b) => a.price - b.price);
            this.props.dispatch(addProductList(mydata));
        } else if (event.target.value === 'dcs') {
            let mydata = {
                data: this.props.productList.data
            };
            mydata.data.sort((a, b) => b.price - a.price);
            this.props.dispatch(addProductList(mydata));
        } else {
            let mydata = {
                data: data
            };
            this.props.dispatch(addProductList(mydata.data));
        }
        this.props.dispatch(offLoading(false));
    }

    render() {
        return (
                <div className="soryBy-panel">
                    <label>
                        {
                            this.props.productList.data.length > 0 ? ' 1-1 of over ' + this.props.productList.data.length + ' results for '
                            + this.props.searchKeyword : ''
                        }
                    </label>
                    <label>Sort By: </label>
                    <select onChange={this.change}>
                        <option value="" default>Relevance</option>
                        <option value="asc">Low to High</option>
                        <option value="dcs">High to Low</option>
                    </select>
                </div>
           
        )
    }
}
export default connect( state => state )(ProductSortBy)