import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Students from "./components/Students"
import Teachers from "./components/Teachers"
import Home from "./components/Home"
const App = () => {
  return (
    <div className="h-screen relative">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/students" element={<Students />}/>
          <Route path="/teachers" element={<Teachers />}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App