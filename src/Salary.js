import React, { Component } from 'react';
import {MyContext} from './Context';

class Salary extends Component {

    static contextType = MyContext;

    render() {
        return (
            <>
                <h3>Salary: {this.context.stateData.salary}</h3>
                <button onClick={this.context.increaseSalary}>
                    Increase 1 Year Experience
                </button>
            </>
        );
    }
}

export default Salary;