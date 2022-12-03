import React from 'react';
import 'src/assets/App.css';
import Navbar from '../components/Navbar';
import CurriculumSection from '../components/CurriculumSection';

export default function Curriculum() {
  return (
    <>
      <header className='header cv-nav'>
        <Navbar />
      </header>
      <main role='main' className='curriculum-page'>
        <CurriculumSection />
      </main>
    </>
  );
}