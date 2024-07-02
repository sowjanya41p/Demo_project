import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { getTotalAmount, getRecentInvoicesCount } from "../selectors"

const SummaryContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const SummaryValue = styled.div`
  font-size: 24px;
  color: ${({ value, threshold }) =>
    value < 0 ? "red" : value < threshold ? "yellow" : "green"};
`

const SummaryWidget = () => {
  const totalAmount = useSelector(getTotalAmount)
  const recentInvoicesCount = useSelector(getRecentInvoicesCount)
  const threshold = 1000 // example threshold

  return (
    <SummaryContainer>
      <h2>Summary</h2>
      <SummaryValue value={totalAmount} threshold={threshold}>
        ${totalAmount.toFixed(2)}
      </SummaryValue>
      <p>Invoices created in the last 30 days: {recentInvoicesCount}</p>
    </SummaryContainer>
  )
}

export default SummaryWidget
