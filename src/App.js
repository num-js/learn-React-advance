import React, { Component } from 'react';
import Employee from './Employee';

import { Provider } from './Context';

class App extends Component {
    state = {
        name: 'Numan',
        pro: 'MERN Stack Developer',
        salary: 15000,
        experience: 1
    }

    calculateSalIncPercentage = (salary) => {
        return Math.round(((25 / 100) * salary));
    }

    increaseExperience = () => {
        // let newSalary = Math.round((data.expense / data.income) * 100)
        this.setState({
            experience: this.state.experience + 1,
            salary: this.state.salary + this.calculateSalIncPercentage(this.state.salary),
        },
            () => {
                if (this.state.experience === 3) {
                    this.updatePro();
                }
            }
        );
    }

    updatePro = () => {
        this.setState({ pro: 'Full stack Developer' });
    }



    render() {
        const data = {
            stateData: this.state,
            increaseExperience: this.increaseExperience
        }

        return (
            <>
                <h2>App Component</h2>
                <Provider value={data}>
                    <Employee />
                </Provider>
            </>
        );
    }
}
export default App;
