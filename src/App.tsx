import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import BeforeAfter from './components/BeforeAfter';
import Faq from './components/Faq';
import Order from './components/Order';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'زيوت الأميرات - العناية الطبيعية بالشعر';
    
    // Add Arabic language direction
    document.documentElement.setAttribute('dir', 'rtl');
    
    return () => {
      document.documentElement.removeAttribute('dir');
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <BeforeAfter />
      <Testimonials />
      <Faq />
      <Order />
      <Footer />
    </div>
  );
}

export default App;