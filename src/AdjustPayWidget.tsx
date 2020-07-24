import React from 'react';
import Employee from './Employee';
import ApplicationState from './ApplicationState';

interface AdjustPayWidgetProps
{
    appState:ApplicationState;
}

interface AdjustPayWidgetState
{
    employees:Employee[];
}

class AdjustPayWidget extends React.Component<AdjustPayWidgetProps, AdjustPayWidgetState>
{
    constructor(props:AdjustPayWidgetProps)
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
                    <h3>No Employees</h3>
                </div>
            );
        }
        else
        {
            return(
                <div>
                    <h3>Adjust Employee Pay</h3>
                    {this.state.employees.map((employee, index) => (
                        <p>{employee.name} {employee.pay} <button onClick={() => { this.onAddPay(index); }}>Increase Pay</button><button onClick={() => { this.onReducePay(index); }}>Reduce Pay</button></p>
                    ))}
                </div>
            );
        }
    }

    onAddPay(index:number)
    {
        this.props.appState.IncreasePay(index);
        this.setState({ employees: this.props.appState.Employees });
    }

    onReducePay(index:number)
    {
        this.props.appState.DecreasePay(index);
        this.setState({ employees: this.props.appState.Employees });
    }
}

export default AdjustPayWidget;