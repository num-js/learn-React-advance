import { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div
                onClick={() => setCounter((previousValue) => {
                    console.log('prevoiusValue: ', previousValue);
                    return previousValue + 1
                })}
            >

                <h1>Counter: {counter}</h1>
            </div>
        </>
    );
}

export default App;