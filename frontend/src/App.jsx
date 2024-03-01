
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GetStarted from "./components/get-started/GetStarted"
import Login from "./components/login/Login"
import SignUp from "./components/sign-up/SignUp"

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
