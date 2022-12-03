import React from 'react';
import 'src/assets/App.css';
import 'src/assets/HeroSection.css';
import {Button} from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='hero-container-info'>
                <span className='greetings'>¡Bienvenido, soy Migue!</span>
                <h1 className='title'>Ingeniero Informático</h1>
                <p className='description'>
                    Soy un Ingeniero Informático con interés en el diseño y desarrollo web. 
                    Actualmente estoy haciendo mi Trabajo de Fin de Grado sobre Inteligencia Artificial y Software.
                </p>
                <Button buttonStyle='btn--secondary' buttonSize='btn--large' roundedStyle='btn--rounded' url='curriculum'>Conóceme</Button>
            </div>
        </div>
    );
}

export default HeroSection
