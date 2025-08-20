import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FindDoctors from './pages/FindDoctors'
import LabTests from './pages/LabTests'
import Shop from './pages/Shop'
import Forum from './pages/Forum'
import About from './pages/About'
import TopNav from './component/TopNav'
import Navbar from './component/Navbar'
import Store from './component/Store'
import Footer from './component/Footer'
import ProductDetails from './component/ProductDetails'
import P from './pages/Page'
import Page from './pages/Page'
import IngredientDetails from './component/IngredientDetails '

export default function App() {
  return (
    <div>
           <TopNav />
           <Navbar />
           <Store />
      <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<FindDoctors />} />
        <Route path="/lab" element={<LabTests />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<About />} />
        <Route path="/item/:id" element={<Page />} />
        <Route path="/ingredients/:id" element={<IngredientDetails />} /> 
      </Routes>

      <Footer />
    </div>
  )
}
