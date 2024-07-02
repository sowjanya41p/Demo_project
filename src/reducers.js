import { ADD_INVOICE, UPDATE_INVOICE } from "./actions"

const initialState = {
  transactions: [
    {
      transactionId: 1,
      invoiceId: 1,
      type: "AR",
      transactionDate: "01/06/2023",
      description: "Consulting work",
      amount: -310,
      creationDate: "01/10/2023",
      name: "John Smith",
    },
    {
      transactionId: 2,
      invoiceId: 2,
      type: "AP",
      transactionDate: "01/06/2023",
      description: "Expense: Landscaping supplies",
      amount: -150,
      creationDate: "01/10/2023",
      name: "Home and Garden Center",
    },
    {
      transactionId: 11,
      invoiceId: 1,
      type: "AR",
      transactionDate: "01/14/2023",
      description: "Invoice Payment",
      amount: 310,
      creationDate: "01/16/2023",
      name: "John Smith",
    },
    {
      transactionId: 3,
      invoiceId: 3,
      type: "AP",
      transactionDate: "01/06/2023",
      description: "Expense: Rent",
      amount: -3000,
      creationDate: "01/10/2023",
      name: "Rent",
    },
    {
      transactionId: 4,
      invoiceId: 4,
      type: "AR",
      transactionDate: "02/12/2023",
      description: "Consulting work",
      amount: -500,
      creationDate: "03/01/2023",
      name: "Jane Doe",
    },
    {
      transactionId: 5,
      invoiceId: 4,
      type: "AR",
      transactionDate: "02/14/2023",
      description: "Consulting work",
      amount: 300,
      creationDate: "03/01/2023",
      name: "Jane Doe",
    },
    {
      transactionId: 6,
      invoiceId: 5,
      type: "AP",
      transactionDate: "07/01/2023",
      description: "Car repair",
      amount: -100,
      creationDate: "07/01/2023",
      name: "Repair Shop",
    },
    {
      transactionId: 7,
      invoiceId: 6,
      type: "AR",
      transactionDate: "08/01/2023",
      description: "Consulting work",
      amount: -300,
      creationDate: "08/01/2023",
      name: "James Bond",
    },
    {
      transactionId: 8,
      invoiceId: 4,
      type: "AR",
      transactionDate: "01/12/2024",
      description: "Payment: Consulting work",
      amount: 200,
      creationDate: "01/12/2024",
      name: "Jane Doe",
    },
    {
      transactionId: 9,
      invoiceId: 7,
      type: "AR",
      transactionDate: "01/09/2024",
      description: "Consulting work",
      amount: -400,
      creationDate: "05/11/2024",
      name: "Sarah Smith",
    },
    {
      transactionId: 10,
      invoiceId: 7,
      type: "AR",
      transactionDate: "01/15/2024",
      description: "Payment: Consulting work",
      amount: 400,
      creationDate: "01/16/2024",
      name: "Sarah Smith",
    },
  ],
  invoices: [
    {
      id: 1,
      client: "John Smith",
      date: "01/10/2023",
      reference: "1",
      amount: -310,
    },
    {
      id: 2,
      client: "Home and Garden Center",
      date: "01/10/2023",
      reference: "2",
      amount: -150,
    },
    {
      id: 3,
      client: "Rent",
      date: "01/10/2023",
      reference: "3",
      amount: -3000,
    },
    {
      id: 4,
      client: "Jane Doe",
      date: "03/01/2023",
      reference: "4",
      amount: -500,
    },
    {
      id: 5,
      client: "Repair Shop",
      date: "07/01/2023",
      reference: "5",
      amount: -100,
    },
    {
      id: 6,
      client: "James Bond",
      date: "08/01/2023",
      reference: "6",
      amount: -300,
    },
    {
      id: 7,
      client: "Sarah Smith",
      date: "01/11/2024",
      reference: "7",
      amount: -400,
    },
  ],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [
          ...state.invoices,
          { ...action.payload, id: state.invoices.length + 1 },
        ],
      }
    case UPDATE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.map((invoice) =>
          invoice.id === action.payload.id ? action.payload : invoice
        ),
      }
    default:
      return state
  }
}

export default rootReducer
