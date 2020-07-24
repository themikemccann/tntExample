import React from 'react';
import './App.css';
import ApplicationState from './ApplicationState';
import AddEmployeeScreen from './AddEmployeeScreen';
import AdjustPayScreen from './AdjustPayScreen';

// this is where I am sticking the global application state
const globalAppState:ApplicationState = new ApplicationState();

interface AppState
{
  currentScreen:number;
};

// some general notes on the component classes:
// 1. When using TypeScript, you need to specify the type of this.props
// as well as the type of this.state.  You do this in the angle brackets
// right after "React.Component".  The first is the type of this.props,
// the second is the type of this.state.  A {} means "anything can go here"
//
// 2. What appears to work best (for reasons that aren't entirely obvious
// with my basic understanding of typescript and react) is to wrap whatever
// you want as state or props in an interface (see AppState above).  Otherwise
// if you try to use .map and other stuff in JSX you will get compiler errors.
//
// The next set of interesting comments is in AdjustPayScreen.tsx.
class App extends React.Component<{}, AppState>
{
  constructor()
  {
    super({});
    this.state = { currentScreen: 0 };
  }

  render()
  {
    if (this.state.currentScreen == 0)
    {
      return (
        <div className="App">
          <h1>Employee Management App</h1>
          <hr />
          <AddEmployeeScreen appState={globalAppState} />
          <hr />
          <button onClick={() => {this.onAdjustPayClick()}}>On to Adjust Pay</button>
        </div>
      );
    }
    else
    {
      return (
        <div className="App">
          <h1>Employee Management App</h1>
          <hr />
          <AdjustPayScreen appState={globalAppState} />
          <hr />
          <button onClick={() => {this.onCreateEmployeesClick()}}>Back to Create Employees</button>
        </div>
      );
    }
  }

  onAdjustPayClick()
  {
    this.setState({ currentScreen: 1});
  }

  onCreateEmployeesClick()
  {
    this.setState({ currentScreen: 0});
  }
}

export default App;
