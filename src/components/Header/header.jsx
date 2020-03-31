import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToken} from "../../actions/appAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'change me'
        }
    }
    componentDidMount() {
        this.props.dispatch(addToken(this.state.name));
    }

    render() {
        return (
            <div>
                <header className={"logo"}>
                    <table>
                        <tr>
                            <td>
                            <FontAwesomeIcon icon={faCartPlus} size={'4x'} className={"image-cart"} />
                            </td>
                            <td>
                                <span>Category</span>
                            </td>
                            <td>
                            <input type="text" className={"input-search"} />
                            </td>
                        </tr>
                    </table>
                </header>
            </div>
        )
    }
}
export default connect( state => state )(Header)