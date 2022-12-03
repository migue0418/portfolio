import React from 'react';
import 'src/assets/App.css'
import HeroSection from '../components/HeroSection'
import PortfolioCards from '../components/PortfolioCards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return(
        <>
            <header className='header'>
                <Navbar />
            </header>
            <main role='main'>
                <section className='hero-section'>
                    <HeroSection />
                </section>
                <section className='portfolio-section'>
                    <PortfolioCards />
                </section>
            </main>
            <Footer />
        </>
    );
}
