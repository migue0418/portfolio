import React from 'react';
import 'src/assets/App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main role='main'>
        <h1>Portfolio</h1>
      </main>
      <Footer />
    </>
  );
}