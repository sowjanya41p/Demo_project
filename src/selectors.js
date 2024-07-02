export const getTotalAmount = (state) =>
  state.transactions
    .filter(
      (transaction) =>
        transaction.type === "AP" ||
        (transaction.type === "AR" && transaction.amount > 0)
    )
    .reduce((total, transaction) => total + transaction.amount, 0)

export const getRecentInvoicesCount = (state) => {
  const now = new Date()
  return state.invoices.filter((invoice) => {
    const invoiceDate = new Date(invoice.date)
    return now - invoiceDate <= 30 * 24 * 60 * 60 * 1000
  }).length
}

export const getInvoices = (state) => state.invoices

export const getTransactions = (state) => state.transactions
