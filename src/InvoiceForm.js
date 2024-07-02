import React, { useState, useEffect } from "react"

const InvoiceForm = ({ onSave, invoice }) => {
  const [formState, setFormState] = useState({
    client: "",
    date: "",
    reference: "",
    amount: "",
  })

  useEffect(() => {
    if (invoice) {
      setFormState(invoice)
    }
  }, [invoice])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formState)
    setFormState({ client: "", date: "", reference: "", amount: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="client"
        placeholder="Client"
        value={formState.client}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formState.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="reference"
        placeholder="Reference"
        value={formState.reference}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formState.amount}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default InvoiceForm
