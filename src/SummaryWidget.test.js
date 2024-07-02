import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SummaryWidget from './SummaryWidget';

const mockStore = configureStore([]);
const initialState = {
  transactions: [
    { date: '2024-05-01', description: 'Payment', reference: '123', amount: 200 },
    { date: '2024-05-02', description: 'Purchase', reference: '124', amount: -50 },
  ],
  invoices: [
    { client: 'Client A', date: '2024-04-20', reference: '123', amount: 200 },
  ],
};

describe('SummaryWidget', () => {
  it('displays the correct total amount and invoice count', () => {
    const store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <SummaryWidget />
      </Provider>
    );

    expect(getByText('$150.00')).toBeInTheDocument();
    expect(getByText('Invoices created in the last 30 days: 1')).toBeInTheDocument();
  });
});
