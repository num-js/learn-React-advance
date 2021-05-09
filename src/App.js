import React from 'react';
import CounterComponent from './Component/CounterComponent';
import store from './Redux/store';

import { Provider } from 'react-redux';

store.subscribe(() => {
    console.log(store);
})

const App = () => {
    return (
        <>
            <Provider store={store}>
                <CounterComponent />
            </Provider>
        </>
    );
}

export default App;