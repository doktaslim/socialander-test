import React from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FinishedSolutions from './components/FinishedSolutions'
import DeploySolutions from './components/DeploySolutions';
import TrustedBy from './components/TrustedBy'
import SuccessStories from './components/SuccessStories'
import Contact from './components/Contact'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-body">
      <Navbar />
      <HeroSection />
      <FinishedSolutions />
      <DeploySolutions />
      <TrustedBy />
      <SuccessStories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
