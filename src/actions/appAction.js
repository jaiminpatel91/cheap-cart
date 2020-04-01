export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_PRODUCTLIST = 'ADD_PRODUCTLIST';

export const addToken = token => ({
    type: ADD_TOKEN,
    token,
});

export const addProductList = token => ({
    type: ADD_PRODUCTLIST,
    token,
});