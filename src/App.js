import React, { Component } from 'react';
import Employee from './Employee';

//Creating ContextAPI
export const MyContext = React.createContext();

class App extends Component {
    state = {
        name: 'Numan',
        pro: 'MERN Stack Developer',
        salary: 15000,
    }


    increaseSalary = () => {
        this.setState({
            salary: this.state.salary + 5000
        });
    }

    render() {
        const data = {
            salary: this.state.salary,
            increaseSalary: this.increaseSalary
        }

        return (
            <>
                <h2>App Component</h2>
                <MyContext.Provider value={data}>
                    <Employee />
                </MyContext.Provider>
            </>
        );
    }
}
export default App;
