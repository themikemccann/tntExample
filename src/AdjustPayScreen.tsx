import React from 'react';
import Employee from './Employee';
import ApplicationState from './ApplicationState';
import TopEarnersWidget from './TopEarnersWidget';
import AdjustPayWidget from './AdjustPayWidget';

interface AdjustPayScreenProps
{
    appState:ApplicationState;
}

interface AdjustPayScreenState
{
    employees:Employee[];
}

// This is the simplest way to fix the screen.  Effectively I've promoted the state
// variable up to the AdjustPayScreen.  The way I did this is I added a reference to
// AdjustPayScreen to the AdjustPayWidget, and whenever the AdjustPayWidget adjusts the
// pay of an employee it calls back into the AdjustPayScreen (it's parent) to call
// setState, which forces a re-render of all of the child components.
class AdjustPayScreen extends React.Component<AdjustPayScreenProps, AdjustPayScreenState>
{
    constructor(props:AdjustPayScreenProps)
    {
        super(props);
        this.state = { employees: props.appState.Employees };
    }

    render()
    {
        return(
            <div>
                <h2>Adjust Pay</h2>
                <TopEarnersWidget appState={this.props.appState} />
                <AdjustPayWidget appState={this.props.appState} parentScreen={this} />
            </div>
        );
    }

    onPayChange()
    {
        // when the pay changes, we need to reset our state
        // to force us to re-render
        this.setState({ employees: this.props.appState.Employees });
    }
}

export default AdjustPayScreen;