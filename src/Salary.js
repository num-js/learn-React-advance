import React, { Component } from 'react';
import { MyContext } from './Context';

class Salary extends Component {

    static contextType = MyContext;

    render() {
        console.log('this.context:- ', this.context);
        return (
            <>
                {/* <Consumer>
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
                </Consumer> */}


                <h4>Salary: {this.context.stateData.salary}</h4>
                <button
                    onClick={this.context.increaseSalary}
                >
                    Change Salary
                </button>
            </>
        );
    }
}

export default Salary;