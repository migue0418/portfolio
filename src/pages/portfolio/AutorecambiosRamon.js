import 'src/assets/PortfolioItem.css';
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import PortfolioImageText from 'src/components/PortfolioImageText';

export default function AutorecambiosRamon() {
    return(
        <>
            <header className='header'>
                <Navbar />
                <section className='project-header'>
                    <div className='header-information'>
                        <div>
                            <div className='info-item'>
                                <h1>Autorecambios Ramón</h1>
                            </div>
                            <div className='info-item project-type'>
                                <span className='project-type-name'>Sitio web</span>
                            </div>
                            <div className='info-item'>
                                <button className='btn btn--secondary btn--medium btn--rounded--small'>Visita la web</button>
                            </div>
                        </div>
                    </div>
                    <div className='header-image'>
                        <img 
                            className='project-main-image'
                            src='/portfolio/images/autorecambiosramon-hero.png' 
                            alt='Pantallazo de la web de Autorecambios Ramón'/>
                    </div>
                </section>
            </header>
            <main role='main'>
                <section className='project-information'>

                </section>
                <section className='project-result'>

                </section>
                <section className='portfolio-page'>
                    <h1>Web de Autorecambios Ramón</h1>
                    <div className='portfolio-info'>
                        <p>Página web de Autorecambios Ramón, empresa especializada en la comercialización de recambios en Granada (Ogíjares).</p>
                    </div>
                    <div className='portfolio-content'>
                        <div className='portfolio-section'>
                            <h2>Información General</h2>
                            <p>Ramón, el dueño de la tienda de autorecambios, me pidió una página web para su negocio en la que poder describir su trabajo 
                                y darse a conocer.</p>
                            <p>Para ello, diseñé y desarrollé una web con una página principal en la que presentar su trabajo, así 
                                como una sección dedicada a sus productos y otra donde contactarlo.</p>
                            <div className='info-cards'>
                            </div>
                        </div>
                        <div className='portfolio-section'>
                            <h2>Galería</h2>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
