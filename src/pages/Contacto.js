import React from 'react';
import '../src/assets/App.css';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contacto() {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main role='main' className='contact-page'>
        <h1>Contacto</h1>
        <h2>Formulario de contacto</h2>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}