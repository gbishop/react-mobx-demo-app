import * as React from 'react';
import './App.css';
import Store from './Store';
import { observer } from 'mobx-react';

const logo = require('./logo.svg');

@observer
class App extends React.Component<{store: Store}, {}> {
  render() {
    const store = this.props.store;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The count is {store.count}
        </p>
        <button onClick={store.increment}>+</button>
      </div>
    );
  }
}

export default App;
