import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToken} from "../../actions/appAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPager } from '@fortawesome/free-solid-svg-icons';

class ProductList extends Component {
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
                <FontAwesomeIcon icon={faPager} />
            </div>
        )
    }
}
export default connect( state => state )(ProductList)