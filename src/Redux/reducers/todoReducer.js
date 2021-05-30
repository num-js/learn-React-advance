const initialState = {
    allTodos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { id, data } = action.payload;

            return {
                allTodos: [
                    ...state.allTodos,
                    { id, data }
                ]
            }

        // case 'R_TODO':
        //     const { id, data } = action.payload;

        //     return {
        //         allTodos: [
        //             ...state.allTodos,
        //             { id, data }
        //         ]
        //     }



        default:
            return state;
    }
}

export default todoReducer;