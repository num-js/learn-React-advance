import React, { useReducer, useEffect } from 'react';

const initialState = {
    name: "Numan",
    pro: ["MERN", "Full Stack", "MEVN"]
}

const myReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }

        default:
            return state;
    }
}

const App = () => {

    const [data, dispatch] = useReducer(myReducer, initialState)
    const [data2, dispatch2] = useReducer(myReducer, initialState)

    console.log(data);


    const getName = () => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'CHANGE_NAME', payload: data.name })
            })
    }

    return (
        <div>
            <h3>Hello {data.name}</h3>
            <h3>Pro {data.pro[0]}</h3>

            <button onClick={getName}>changeName</button>

            <br />
            <h3>I m {data2.name}</h3>
            <h3>Pro {data2.pro[1]}</h3>
            
            <button onClick={()=> dispatch2({type: 'CHANGE_NAME', payload: "MD"})}>changeName</button>
        </div>
    );
}

export default App;
