import './App.css';
import {Routes, Route, useLocation, Router} from "react-router-dom";

import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <>
      <NavBar />
      <AnimatePresence mode='wait'>
      <Router>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />}/>
          <Route index element={<About />}/>
          <Route index element={<Contact />}/>
        </Routes>
      </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
