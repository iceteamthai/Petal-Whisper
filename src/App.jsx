import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HomePage from './Pages/HomePage.jsx'
import Products from './Pages/Products'
import AboutMe from './Pages/AboutMe'
import NotFound from './Pages/NotFound'
import CardDetail from './Pages/CardDetail'
import Rainy from './Pages/Rainy.jsx'
import Summer from './Pages/Summer.jsx'
import Winter from './Pages/Winter.jsx'

const App = () => {
  return (
    <>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Header />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/aboutme' element={<AboutMe />} />

            {/* ✅ Season Pages */}
            <Route path='/rainy' element={<Rainy />} />
            <Route path='/summer' element={<Summer />} />
            <Route path='/winter' element={<Winter />} />

            {/* ✅ Flower Detail */}
            <Route path='/card_detail/:id' element={<CardDetail />} />

            {/* fallback ถ้าไม่เจอหน้า */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
