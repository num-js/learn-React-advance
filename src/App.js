import React, { createContext, useContext, useReducer } from 'react';

const myContext = createContext();

const initialState = {
    name: 'Numan'

}

const myReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }

        default:
            return state
    }
}

const Coder3 = () => {
    return (
        <>
            <div>Coder3---</div>
            <h3>Name: </h3>
        </>
    )
}

const Coder2 = () => {
    return (
        <>
            <div>Coder2---</div>
            <Coder3 />
        </>
    )
}

const Coder1 = () => {
    return (
        <>
            <div>Coder1---</div>
            <Coder2 />
        </>
    )
}

const App = () => {
    const [data, dispatch] = useReducer(myReducer, initialState)

    return (
        <>
            <myContext.Provider value={name}>
                <h3>Hello {data.name}</h3>
                <button onClick={() => dispatch({ type: 'CHANGE_NAME', payload: 'Ahmed' })}>change name</button>

                <br /><br /><br />
                <Coder1 />
            </myContext.Provider>
        </>
    );
}

export default App;
