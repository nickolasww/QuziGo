import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./features/homepage/pages";
import Login from "./features/auth/pages/login";
import Register from "./features/auth/pages/register";
import Dashboard from "./features/dashboard/pages/index";
import { QuizPage } from "./features/quiz/pages/quiz";

function App() {

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/quiz/:categoryId" element={ <QuizPage /> } />
      </Routes>
    </Router>
  )
}

export default App
