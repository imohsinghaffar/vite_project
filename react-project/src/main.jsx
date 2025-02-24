import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import News from './components/News.jsx'
import Contact from './components/Contact.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  <Routes>
    <Route path="/" element={<Navbar title = "My React App"/>} />
    <Route path="/home" element={<><Navbar title = "My React App" /><Home/></>} />
    <Route path="/about" element={<><Navbar title = "My React App" /><About/></>} />
    <Route path="/news" element={<><Navbar title = "My React App" /><News/></>} />
    <Route path="/contact" element={<><Navbar title = "My React App" /><Contact/></>} />
  </Routes>
</BrowserRouter>
    
)
