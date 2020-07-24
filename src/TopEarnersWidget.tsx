import React from 'react';
import Employee from './Employee';
import ApplicationState from './ApplicationState';

interface TopEarnersWidgetProps
{
    appState:ApplicationState;
}

interface TopEarnersWidgetState
{
    employees:Employee[];
}

class TopEarnersWidget extends React.Component<TopEarnersWidgetProps, TopEarnersWidgetState>
{
    constructor(props:TopEarnersWidgetProps)
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
                    <h3>No Top Earners</h3>
                </div>
            );
        }
        else
        {
            return(
                <div>
                    <h3>Top Earners List</h3>
                    {this.state.employees.sort((a: Employee, b: Employee) => { return b.pay-a.pay }).map((employee, index) => (
                        <p>{employee.name} {employee.pay}</p>
                    ))}
                </div>
            );
        }
    }
}

export default TopEarnersWidget;