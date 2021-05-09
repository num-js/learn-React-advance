const initialState = 5;

const changeNum = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;

        case 'SUB':
            return state - 1;

        default:
            return state;
    }
}

export default changeNum;