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
                <div className='image-container-phone'>
                    <img src='images/programmer_concept_no_background_blue2.png' 
                            alt="Imagen conceptual de un programador con un ordenador"
                            className='hero-image'/>
                </div>
                <p className='description'>
                    Soy un Ingeniero Informático con interés en la ciencia de datos, así como en el diseño y desarrollo web. 
                    Actualmente estoy formándome en diversas tecnologías relacionadas con la Inteligencia Artificial.
                </p>
                <Button buttonStyle='btn--secondary' buttonSize='btn--large' roundedStyle='btn--rounded' url='curriculum'>Conóceme</Button>
            </div>
        </div>
    );
}

export default HeroSection
