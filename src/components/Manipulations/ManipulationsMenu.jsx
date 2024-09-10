// src/components/Manipulations/ManipulationsMenu.js
import React, { useState } from 'react'
import manipulationsData from '../../data/manipulationsData'
import ManipulationDetails from './ManipulationDetails'

const ManipulationsMenu = () => {
  const [selectedManipulation, setSelectedManipulation] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleManipulationClick = (manipulation) => {
    if (
      selectedManipulation &&
      selectedManipulation.title === manipulation.title
    ) {
      setSelectedManipulation(null)
    } else {
      setSelectedManipulation(manipulation)
    }
  }

  return (
    <div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Маніпуляції</button>
      {isMenuOpen && (
        <ul>
          {manipulationsData.map((manipulation) => (
            <li
              key={manipulation.title}
              onClick={() => handleManipulationClick(manipulation)}
            >
              {manipulation.title}
            </li>
          ))}
        </ul>
      )}
      {selectedManipulation && (
        <ManipulationDetails manipulation={selectedManipulation} />
      )}
    </div>
  )
}

export default ManipulationsMenu
