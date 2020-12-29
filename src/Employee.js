import React, { Component } from 'react';
import Departent from './Departent';
import { Consumer } from './Context';

class Employee extends Component {
    render() {
        return (
            <>
                <Consumer>
                    {
                        ({ stateData, increaseSalary }) =>
                            <>
                                <h2>Name : {stateData.name}</h2>
                            </>
                            
                    }
                    <Departent />
                </Consumer>
                
            </>
        );
    }
}
export default Employee;