import React, {Component} from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    componentDidMount() {
    //    fetch("../../data.json").then((response) => response.json())
    //    .then((findresponse)=> {
    //      console.log("check me", findresponse);
    //    })
    }

    render() {
        return (
            <div className={'product-list-content'}>
                {
                    this.props.productList.data ? 
                    this.props.productList.data.map((el, index) => (<div key={el.img} className={'block'}>
                        <img src={el.img} />
                        <div>
                            {el.name}
                            </div>
                            <div> {'$' +el.price} </div>
                        </div>)) : null
                }
            </div>
        )
    }
}
export default connect( state => state )(ProductList)