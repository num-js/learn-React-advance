import { useState } from 'react';

const App = () => {

    const [counter, _setCounter] = useState({
        counter1: 1,
        counter2: 2
    });

    const setCounter = (newCounter) => {
        _setCounter(oldCounter => {
            return {
                ...oldCounter,
                ...newCounter
            }
        })
    }

    return (
        <>
            <div>
                <h1>SetState With Objects</h1>

                <h2
                    onClick={() => {
                        setCounter({
                            counter1: counter.counter1 + 1
                        })
                    }}
                >Increase Counter1 --- {counter.counter1}</h2>


                <h2
                    onClick={() => {
                        setCounter({
                            counter2: counter.counter2 + 1
                        })
                    }}
                >Increase Counter2 --- {counter.counter2}</h2>

            </div>
        </>
    );
}

export default App;