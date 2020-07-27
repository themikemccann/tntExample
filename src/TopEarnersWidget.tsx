import React from 'react';
import Employee from './Employee';
import ApplicationState from './ApplicationState';

interface TopEarnersWidgetProps
{
    appState:ApplicationState;
}

class TopEarnersWidget extends React.Component<TopEarnersWidgetProps>
{
    constructor(props:TopEarnersWidgetProps)
    {
        super(props);
    }

    render()
    {
        if (this.props.appState.Employees === null)
        {
            return(
                <div>
                    <h3>No Top Earners</h3>
                </div>
            );
        }
        else
        {
            // this copies the appState.Employees - it is necessary because
            // Array.sort() modifies the array and all the other components
            // are using it so we don't want to modify it.
            const employeesClone = [...this.props.appState.Employees];
            return(
                <div>
                    <h3>Top Earners List</h3>
                    {employeesClone.sort((a: Employee, b: Employee) => { return b.pay-a.pay }).map((employee, index) => (
                        <p>{employee.name} {employee.pay}</p>
                    ))}
                </div>
            );
        }
    }
}

export default TopEarnersWidget;