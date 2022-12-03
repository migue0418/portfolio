import React from 'react';
import 'src/assets/App.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return(
        <>
            <header className='header'>
                <Navbar />
            </header>
            <main role='main'>
                <section className='not-found'>
                  <div className='not-found-info'>
                    <h1>Page not found</h1>
                    <span>The path you try to enter doesn't exist within the page</span>
                  </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
