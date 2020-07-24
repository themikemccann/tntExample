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

// This screen is broken on purpose, to illustrate a point.
// What you will notice when you try to use it is you will see that
// the pays do get adjusted, but the leader board doesn't.  But if you
// backup and return to the screen the leader board WILL be correct.
// Why is that?
//
// There is only one way that something appears / changes on the screen:
// render() has to get called.  When does render() get called?
// - right after the constructor (when you create a new object)
// - at the end of setState()
// - there is a method called forceRender() or something like that
//
// The same data - ApplicationState.Employees - gets passed to both AdjustPayWidget
// and TopEarnersWidget, and gets stored in this.state on both.
//
// When the user clicks "Add Income" on the AdjustPayWidget, the Employee.pay field
// gets increased for that Employee object.  It's the same Employee object in both
// AdjustPayWidget.state and TopEarnersWidget.state.  However, updating the value of
// something in this.state does nothing to what is on the screen, because the screen
// only changes when render() gets called.  That is why at the end of the function
// that handles the button click in AdjustPayWidget it calls this.setState to force
// a redraw, but it only forces a redraw for AdjustPayWidget - NOT for TopEarnersWidget.
// If we want TopEarnersWidget to show the change as well, somehow something had to call
// TopEarnersWidget.render().
//
// If we backup back to the AddEmployeeScreen, the AdjustPayScreen and all of its components
// are destroyed and a new AddEmployeeScreen is created in App.render().  When we go forward
// again to the AdjustPayScreen, again it is created from new by App.render() so both widgets
// now display the correct values.
//
// There are a couple of ways that you can fix this:
// 1. You could hack something up where AdjustPayWidget somehow has a reference to the
//    TopEarnersWidget and explicitly calls forceRender() or setState().  This is really
//    brittle and isn't good encapsulation.
// 2. The React tutorials I have read suggest that you would "promote" the Employees state
//    up to the AdjustPayScreen and instead make Employees just a prop of AdjustPayWidget
//    and TopEarnersWidget.  For this to work, it means that you need to call
//    AdjustPayScreen.render() somehow when the Increase/Decrease pay buttons get clicked.
//    Probably that means the buttons themselves should call methods on AdjustPayScreen
//    rather than AdjustPayWidget, and then those methods would call setState.  This could
//    work but, again, it seems like it isn't great encapsulation.
// 3. The third option is to use Redux - and I need to research this more.
//
// Next comment: AddEmployeeScreen.tsx 
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
                <AdjustPayWidget appState={this.props.appState} />
            </div>
        );
    }
}

export default AdjustPayScreen;