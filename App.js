import React from 'react';
import './App.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import Footer from './components/Footer';
import EmailForm from './components/EmailForm';
function App() {
  return (
    <div className="App">
      <Header />
      <LandingSection />
      <EmailForm />  
      <Footer />
    </div>
  );
}

export default App;
