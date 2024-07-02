import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import SummaryWidget from './components/SummaryWidget';
import InvoicesWidget from './components/InvoicesWidget';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Finance Dashboard</h1>
      <SummaryWidget />
      <InvoicesWidget />
    </div>
  </Provider>
);

export default App;
