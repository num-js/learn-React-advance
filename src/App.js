import React, { Component } from 'react';
import Employee from './Employee';

//Creating ContextAPI

class App extends Component {
    state = {
        name: 'Numan',
        pro: 'MERN Stack Developer',
        salary: 15000,
    }

    render() {
        return (
            <>
                <h2>App Component</h2>
            </>
        );
    }
}
export default App;