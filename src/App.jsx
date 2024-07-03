import { Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home"
import Skills from "./pages/skills/Skills"
import Portfolio from "./pages/portfolio/Portfolio"
import About from "./pages/about/About"
import Contacts from "./pages/contacts/Contacts"
import Nav from "./components/nav/Nav"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
function App() {

  return (
    <div className="app">
      <Nav />
      <div className="page">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
