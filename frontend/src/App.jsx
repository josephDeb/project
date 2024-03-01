
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GetStarted from "./components/get-started/GetStarted"
import Login from "./components/login/Login"
import SignUp from "./components/sign-up/SignUp"
import ForgotPassword from "./components/forgot-password/ForgotPassword"

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
