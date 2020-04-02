import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToken, addProductList, onLoading, offLoading} from "../../actions/appAction";
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
            this.props.dispatch(onLoading(true));
            let productList = {
                data: []
            };
            productList.data = data.data.filter((item) => {
                return item.name.toLowerCase().includes(event.target.value);
            })
            productList.data.length > 0 ? this.props.dispatch(addProductList(productList)) : this.props.dispatch(addProductList(data));
            this.props.dispatch(offLoading(false));
        }
    }

    render() {
        return (
            <div>
                <header className={"logo"}>
                    <table>
                        <tbody>
                        <tr>
                            <td className={'logo-width'}>
                            <FontAwesomeIcon icon={faCartPlus} size={'4x'} className={"image-cart"} />
                            </td>
                            <td className={'category-width'}>
                                <span>Category</span>
                            </td>
                            <td className={'search-width'}>
                            <input type="text" className={"input-search"} 
                            onKeyUp={e => this.loadProductList(e)} />
                            </td>
                            <td className={'profile-width'}>
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