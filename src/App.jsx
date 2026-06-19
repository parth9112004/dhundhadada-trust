import React, { useEffect } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Toaster } from 'react-hot-toast';

import { Routes, Route, useLocation } from 'react-router-dom';

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    // Check if the current URL path matches a section (e.g. /gallery -> #gallery)
    if (location.pathname !== '/') {
      const sectionId = location.pathname.substring(1); // remove the leading slash
      const element = document.getElementById(sectionId);
      if (element) {
        // Wait a bit for AOS and DOM to render fully
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <main>
      <Hero />
      <Announcements />
      <About />
      <Timings />
      <Gallery />
      <Events />
      <Contact />
    </main>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600, // Smooth animation
      once: false, // Trigger animation every time you scroll up and down
      offset: 50, // Trigger earlier so user doesn't see blank space
      disable: false // Explicitly enable on mobile to prevent blank screen issues
    });
  }, []);

  return (
    <ThemeProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/:sectionId" element={<MainLayout />} />
      </Routes>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
