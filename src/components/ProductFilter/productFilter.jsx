import React, {Component} from 'react';
import { connect } from 'react-redux';

class ProductFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    componentDidMount() {
   
    }

    render() {
        return (
            <div>
                <div className="soryBy-panel">
                    <select>
                        <option value="low to high">Low to High</option>
                        <option value="high to low">High to Low</option>
                    </select>
                </div>
            <div className={'product-list-filter'}>
                <h1>Im filter</h1>
            </div>
            </div>
        )
    }
}
export default connect( state => state )(ProductFilter)