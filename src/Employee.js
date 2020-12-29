import React, { Component } from 'react';
import Departent from './Departent';
import { MyContext } from './Context';

class Employee extends Component {

    static contextType = MyContext;

    render() {
        return (
            <>
                <h3>Employee: {this.context.stateData.name}</h3>
                <Departent />
            </>
        );
    }
}
export default Employee;