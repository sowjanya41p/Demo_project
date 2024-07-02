export const ADD_INVOICE = 'ADD_INVOICE';
export const UPDATE_INVOICE = 'UPDATE_INVOICE';

export const addInvoice = (invoice) => ({
  type: ADD_INVOICE,
  payload: invoice,
});

export const updateInvoice = (invoice) => ({
  type: UPDATE_INVOICE,
  payload: invoice,
});
