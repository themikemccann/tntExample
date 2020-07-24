import React from 'react';
import Employee from './Employee';
import ApplicationState from './ApplicationState';

interface AddEmployeeScreenProps
{
    appState:ApplicationState;
}

interface AddEmployeeScreenState
{
    employees:Employee[];
}

class AddEmployeeScreen extends React.Component<AddEmployeeScreenProps, AddEmployeeScreenState>
{
    constructor(props:AddEmployeeScreenProps)
    {
        super(props);
        this.state = { employees: props.appState.Employees };
    }

    render()
    {
        if (this.state.employees === null)
        {
            return(
                <div>
                    <h2>Employee List</h2>
                    <button onClick={() => { this.onAddEmployee() }}>Add Employee</button>
                </div>
            );
        }
        else
        {
            // This is how you render an arbitrarily-long set of elements.  There is a
            // method called map, and you use it like below, and it will do whatever
            // is in the () for each element in the array.
            return(
                <div>
                    <h1>Employee list</h1>
                    {this.state.employees.map((employee, index) => (
                        <p>{employee.name} {employee.pay}</p>
                    ))}
                    <button onClick={() => { this.onAddEmployee() }}>Add Employee</button>
                </div>
            );
        }
    }

    onAddEmployee()
    {
        let employeeCount:number = 1;
        if (this.state.employees != null)
        {
            employeeCount = this.state.employees.length + 1;
        }

        this.props.appState.AddEmployee(new Employee("Employee " + employeeCount.toString(), 10000));
        this.setState({ employees: this.props.appState.Employees });
    }
}

export default AddEmployeeScreen;