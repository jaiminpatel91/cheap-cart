import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToken, addProductList} from "../../actions/appAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import  data  from '../../data';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'change me'
        }
        this.loadProductList = this.loadProductList.bind(this);
    }
    componentDidMount() {
    }

    loadProductList = (event) => {
        if (event.keyCode === 13 && event.target.value.length > 1) {
            this.props.dispatch(addProductList(data));
        }
    }

    render() {
        return (
            <div>
                <header className={"logo"}>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                            <FontAwesomeIcon icon={faCartPlus} size={'4x'} className={"image-cart"} />
                            </td>
                            <td>
                                <span>Category</span>
                            </td>
                            <td>
                            <input type="text" className={"input-search"} 
                            onKeyUp={e => this.loadProductList(e)} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </header>
            </div>
        )
    }
}
export default connect( state => state )(Header)