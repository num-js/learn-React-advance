import React, { Component } from 'react';
import { MyContext } from './App';

class Salary extends Component {

    render() {
        return (
            <>
                <h3>Salary Component</h3>
                <MyContext.Consumer>
                    {
                        ({salary, increaseSalary}) =>
                            <>
                                <h4>Salary: {salary}</h4>
                                <button
                                    onClick = {increaseSalary}
                                >
                                    Change Salary
                                </button>
                            </>
                    }
                </MyContext.Consumer>
            </>
        );
    }
}

export default Salary;