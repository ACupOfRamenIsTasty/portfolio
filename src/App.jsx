import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { LoadingScreen2 } from './components/LoadingScreen2';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);

  return <>
    {/* 
        Once onComplete is called (from inside LoadingScreen after typing finishes),
        it sets isLoaded to true — causing React to remove (unmount) the LoadingScreen.
      */}
    {!isLoaded && <LoadingScreen2 onComplete={() => setIsLoaded(true)} />}
    <div
      className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  </>;
}

export default App
