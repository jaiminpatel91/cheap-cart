import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToken} from "../actions/appAction";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(addToken);
    }

    render() {
        return (
            <div>
                <h1>Header {this.props.name}</h1>
            </div>
        )
    }
}
export default connect( state => state )(Header)