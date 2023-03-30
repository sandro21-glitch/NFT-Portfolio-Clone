import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Collection from "./pages/Collection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  // disable: 'mobile',
});
function App() {

  useEffect(() => {
      AOS.refresh();
  }, [])

  return (
    <main>
        <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="about" element={ <About /> } />
                <Route path="collection" element={ <Collection /> } />
                <Route path="contact" element={ <Contact /> } />
                <Route path='*' element={ <Error /> } />
            </Routes>
        <Footer />
      </main>
    )
}

export default App;
