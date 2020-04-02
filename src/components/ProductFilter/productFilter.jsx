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
            <div className={'product-filter'}>
            <div>
                <h1>Im filter</h1>
            </div>
            </div>
        )
    }
}
export default connect( state => state )(ProductFilter)