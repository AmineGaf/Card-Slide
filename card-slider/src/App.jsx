import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Team from "./components/Team"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route path="/Team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
