import { ADD_TOKEN } from '../actions/appAction';

const reducer = function (state, action) {
    switch (action.type) {
        case ADD_TOKEN:
            return { ...state, name: 'patel' };

        default:
            return state;
    }
};
export default reducer;
