// src/components/Operations/OperationDetails.js
import React from 'react'

const OperationDetails = ({ operation }) => {
  return (
    <div>
      <h2>{operation.title}</h2>
      <p>{operation.description}</p>
      <img src={operation.image} alt={operation.title} />
    </div>
  )
}

export default OperationDetails
