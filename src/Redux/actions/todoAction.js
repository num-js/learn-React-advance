export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: Date.now(),
            data
        }
    }
}

export const deleteTodo = (data) => {
    return {
        type: 'DELETE_TODO',
        payload: {
            
        }
    }
}

export const deleteTodoAll = () => {
    return {
        type: 'DELETE_ALL_TODO'
    }
}