import { useState } from 'react';

const App = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    return (
        <>
            <div
                onClick={() => {
                    setCounter1(counter1 + 1);

                    /**
                     * This Will not Update again the State
                     */
                    setTimeout(() => {
                        setCounter1(counter1 + 1);
                    }, 1000)
                }}
            >

                <h1>Counter-1 Magic : {counter1}</h1>
            </div>

            <br />
            <br />

            <div
                onClick={() => {
                    setCounter2(counter2 + 1);

                    /**
                     * This Will Update again the State
                     */
                    setTimeout(() => {
                        setCounter2((currentValue) => currentValue + 1);
                    }, 1000)
                }}
            >

                <h1>Counter- 2 Magic : {counter2}</h1>
            </div>
        </>
    );
}

export default App;