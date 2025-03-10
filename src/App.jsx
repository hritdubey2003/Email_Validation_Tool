import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoadingScreen from './pages/LoadingScreen'
import DashboardPage from './pages/DashboardPage'
import Pricing from './pages/PricingPage'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/loading' element={<LoadingScreen />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
