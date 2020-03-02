import React from 'react';
import NavBar from './NavBar/NavBar.js';
import LandingPageContent from './LandingPageContent/LandingPageContent.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <main className='App'>
      <NavBar />
      <LandingPageContent />
      <Footer />
    </main>
  );
}

export default App;