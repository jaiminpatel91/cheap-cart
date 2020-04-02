import { ADD_TOKEN, ADD_PRODUCTLIST, ON_LOADING, OFF_LOADING } from '../actions/appAction';

const reducer = function (state, action) {
    switch (action.type) {
        case ADD_TOKEN:
            return { ...state, name: action.token };

        case ADD_PRODUCTLIST:
            return { ...state, productList: action.token };

        case ON_LOADING:
            return { ...state, loading: action.token };

        case OFF_LOADING:
            return { ...state, loading: action.token };

        default:
            return state;
    }
};
export default reducer;
