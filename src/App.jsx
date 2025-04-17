import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Catalog from './pages/Catalog'
import SpecialCondition from './pages/SpecialCondition'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/special-condition" element={<SpecialCondition />} />
        <Route path='/others' element={<Navbar />} />
      </Routes>
    </Router>
  )
}

export default App
