import React, { Component } from 'react';
import { Consumer } from './Context';

class Salary extends Component {

    render() {
        return (
            <>
                <Consumer>
                    {
                        ({stateData, increaseSalary}) =>
                            <>
                                <h4>Salary: {stateData.salary}</h4>
                                <button
                                    onClick = {increaseSalary}
                                >
                                    Change Salary
                                </button>
                            </>
                    }
                </Consumer>
            </>
        );
    }
}

export default Salary;