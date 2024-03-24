import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './page/Home'
import Display from './page/Display'
import Listing from './page/Listing'


function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
