// src/components/Operations/OperationDetails.js
import React from 'react'

const ManipulationDetails = ({ manipulation }) => {
  return (
    <div>
      <h2>{manipulation.title}</h2>
      <p>{manipulation.description}</p>
      <img src={manipulation.image} alt={manipulation.title} />
    </div>
  )
}

export default ManipulationDetails
