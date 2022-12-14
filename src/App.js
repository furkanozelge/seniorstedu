import Navbar from "./Navbar"
import Project from "./pages/Project"
import Home from "./pages/Home"
import WhoAreWe from "./pages/Who"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seniorstedu" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/who-are-we" element={<WhoAreWe />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
