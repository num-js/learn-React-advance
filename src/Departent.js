import React, { Component } from 'react';
import Salary from './Salary';
import {MyContext} from './Context';

class Departent extends Component {
    static contextType = MyContext;

    render() {
        return (
            <>
                <h3>Pro: {this.context.stateData.pro}</h3>
                <Salary />
            </>
        );
    }
}
export default Departent;
