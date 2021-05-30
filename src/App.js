import React from 'react';
import Todo from './Components/Todo';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Todo />
            </div>
        </Provider>
    );
}

export default App;