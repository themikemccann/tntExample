import React from 'react';
import Employee from './Employee';
import ApplicationState from './ApplicationState';
import AdjustPayScreen from './AdjustPayScreen';

interface AdjustPayWidgetProps
{
    appState:ApplicationState;
    parentScreen:AdjustPayScreen;
}

class AdjustPayWidget extends React.Component<AdjustPayWidgetProps>
{
    constructor(props:AdjustPayWidgetProps)
    {
        super(props);
    }

    render()
    {
        if (this.props.appState.Employees === null)
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
                    {this.props.appState.Employees.map((employee, index) => (
                        <p>{employee.name} {employee.pay} <button onClick={() => { this.onAddPay(index); }}>Increase Pay</button><button onClick={() => { this.onReducePay(index); }}>Reduce Pay</button></p>
                    ))}
                </div>
            );
        }
    }

    onAddPay(index:number)
    {
        this.props.appState.IncreasePay(index);
        this.props.parentScreen.onPayChange();
    }

    onReducePay(index:number)
    {
        this.props.appState.DecreasePay(index);
        this.props.parentScreen.onPayChange();
    }
}

export default AdjustPayWidget;