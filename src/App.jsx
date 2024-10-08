import { Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home"
import Skills from "./pages/skills/Skills"
import Portfolio from "./pages/portfolio/Portfolio"
import About from "./pages/about/About"
import Contacts from "./pages/contacts/Contacts"
import EventRouter from "./pages/event/EventRouter"
import Nav from "./components/layout/Nav"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
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
            <Route path="/events/:eventId" element={<EventRouter />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
