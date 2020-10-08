const initialState = {
    number: 0,
    isLoading: false,
    error: null
}

export default reducer = (state => initialState, action) {
    switch (action.type) {
        case "FETCH_NUMBER":
            return {
                ...initialState,
                isLoading: true
            };

        case "FETCH_NUMBER":
            return {
                ...initialState,
                isLoading: false,
                number: action.payload
            };
    
        default:
            return state;
    }
}
