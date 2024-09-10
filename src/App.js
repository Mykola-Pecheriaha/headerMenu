// src/App.js
import React from 'react'
import OperationsMenu from './components/Operations/OperationsMenu'
import ManipulationsMenu from './components/Manipulations/ManipulationsMenu'

function App() {
  return (
    <div>
      <h1>Клініка</h1>
      <OperationsMenu />
      <ManipulationsMenu />
    </div>
  )
}

export default App
