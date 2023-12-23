import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Students from "./components/students/Students"
import Teachers from "./components/teachers/Teachers"
import Home from "./components/Home"
import CreateStudent from "./components/students/CreateStudent"
import Layout from "./Layout"
import ViewDetails from "./components/students/ViewDetails"
import Login from "./components/login/Login"

const App = () => {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/students" element={<Students />} />
            <Route path="/create" element={<CreateStudent />} />
            <Route path="/students/:regno" element={<ViewDetails />} />
            <Route path="/teachers" element={<Teachers />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App