import React from 'react';
import CounterCompoent from './Components/CounterComponent';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <CounterCompoent />
            </Provider>
        </div>
    );
}

export default App;