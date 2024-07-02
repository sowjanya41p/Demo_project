import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addInvoice, updateInvoice } from "../actions"
import { getInvoices, getTransactions } from "../selectors"
import InvoiceForm from "../InvoiceForm"

const InvoicesWidget = () => {
  const invoices = useSelector(getInvoices)
  const transactions = useSelector(getTransactions)
  const dispatch = useDispatch()
  const [selectedInvoice, setSelectedInvoice] = useState(null)

  const handleSaveInvoice = (invoice) => {
    if (invoice.id) {
      dispatch(updateInvoice(invoice))
    } else {
      dispatch(addInvoice(invoice))
    }
    setSelectedInvoice(null)
  }

  const getStatus = (invoice) => {
    const transaction = transactions.find(
      (t) =>
        t.reference === invoice.reference &&
        t.amount === invoice.amount &&
        new Date(t.date) > new Date(invoice.date)
    )
    return transaction ? "PAID" : "NOT PAID"
  }

  return (
    // <div>
    //   <h2>Invoices</h2>
    //   <InvoiceForm onSave={handleSaveInvoice} invoice={selectedInvoice} />
    //   <ul>
    //     {invoices.map((invoice) => (
    //       <li key={invoice.id}>
    //         {invoice.client} - ${invoice.amount} - {getStatus(invoice)}
    //         <button onClick={() => setSelectedInvoice(invoice)}>Edit</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <h2>Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Refrence</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.client}</td>
                <td>{invoice.date}</td>
                <td>{invoice.reference}</td>
                <td>{invoice.amount}</td>
                <td></td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default InvoicesWidget
