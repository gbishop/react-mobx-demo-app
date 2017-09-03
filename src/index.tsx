import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Store from './Store';

const store = new Store();

// this is a hack to make the store accessible at the console
// you wouldn't really do this
declare global {
    interface Window { store: Store; }
}
window.store = store;

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
