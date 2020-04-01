import { ADD_TOKEN, ADD_PRODUCTLIST } from '../actions/appAction';

const reducer = function (state, action) {
    switch (action.type) {
        case ADD_TOKEN:
            return { ...state, name: action.token };

        case ADD_PRODUCTLIST:
            return { ...state, productList: action.token };
        default:
            return state;
    }
};
export default reducer;
