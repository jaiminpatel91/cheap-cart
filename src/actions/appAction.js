export const SEARCH_KEYWORD = 'SEARCH_KEYWORD';
export const ADD_PRODUCTLIST = 'ADD_PRODUCTLIST';
export const ON_LOADING = 'ON_LOADING';
export const OFF_LOADING = 'OFF_LOADING';

export const searchKeyword = token => ({
    type: SEARCH_KEYWORD,
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