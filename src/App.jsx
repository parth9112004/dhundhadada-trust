import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Events from './components/Events/Events';
import Timings from './components/Timings/Timings';
import Announcements from './components/Announcements/Announcements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Announcements />
      <About />
      <Timings />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
