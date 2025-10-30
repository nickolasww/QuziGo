import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
