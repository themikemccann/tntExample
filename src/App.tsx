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
