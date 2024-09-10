import React, { useState } from 'react'
import operationsData from '../../data/operationsData'
import OperationDetails from './OperationDetails'

const OperationsMenu = () => {
  const [selectedOperation, setSelectedOperation] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOperationClick = (operation) => {
    // Якщо операція вже вибрана, знімаємо вибір (щоб згорнути деталі)
    if (selectedOperation && selectedOperation.title === operation.title) {
      setSelectedOperation(null)
    } else {
      setSelectedOperation(operation)
    }
  }

  return (
    <div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Операції</button>
      {isMenuOpen && (
        <ul>
          {operationsData.map((operation) => (
            <li
              key={operation.title}
              onClick={() => handleOperationClick(operation)}
            >
              {operation.title}
            </li>
          ))}
        </ul>
      )}
      {selectedOperation && <OperationDetails operation={selectedOperation} />}
    </div>
  )
}

export default OperationsMenu
