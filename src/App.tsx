import * as React from 'react';
import './App.css';
import Store from './Store';
import { observer } from 'mobx-react';

const logo = require('./logo.svg');

interface Count {
  value: number;
}

function fetchCount(): Promise<Count> {
  return new Promise((resolve, reject) => {
    fetch(process.env.PUBLIC_URL + '/api/t1.cgi/count')
    .then(res => {
      if (res.ok) {
        res.json().then(resolve).catch(reject);
      } else {
        reject(res);
      }
    });
  });
}

function doFetch(store: Store) {
  fetchCount().then(res => store.count = res.value);
}

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
          The count is {store.count}!
        </p>
        <button onClick={store.increment}>+</button>
        <p>Click the button below to fetch the count from the api.</p>
        <button onClick={e => doFetch(store)}>Fetch</button>
        <p>Some simple thing to animate</p>
        <img src="favicon.ico" style={{position: 'absolute', left: store.count * 20, bottom: 0}} />
      </div>
    );
  }
}

export default App;
