export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_PRODUCTLIST = 'ADD_PRODUCTLIST';
export const ON_LOADING = 'ON_LOADING';
export const OFF_LOADING = 'OFF_LOADING';

export const addToken = token => ({
    type: ADD_TOKEN,
    token,
});

export const addProductList = token => ({
    type: ADD_PRODUCTLIST,
    token,
});

export const onLoading = token => ({
    type: ON_LOADING,
    token,
});

export const offLoading = token => ({
    type: OFF_LOADING,
    token,
});