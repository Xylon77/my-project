import { Routes, Route } from "react-router-dom";
import App_part from "./pages/App_part";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Skills from "./pages/Skills";
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<App_part />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
