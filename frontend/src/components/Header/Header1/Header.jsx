import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
    useEffect(() => {
        const backgrounds = [
            '/hero-1.jpg',
            '/hero-2.jpg',
            '/hero-3.jpg'
        ];

        let currentIndex = 0;
        const header = document.querySelector('.header');

        // Set the initial background image immediately
        header.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

        const changeBackground = () => {
            currentIndex = (currentIndex + 1) % backgrounds.length;
            header.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
        };

        const intervalId = setInterval(changeBackground, 5000); // Change the image every 5000ms (5 seconds)

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Bienvenue au Café O Jardin</h2>
                <p>Choisissez parmi un menu varié comprenant une gamme délicieuse de plats préparés avec les meilleurs ingrédients et l'expertise culinaire. Nous avons également un magasin, consultez-le.</p>
                
            </div>
        </div>
    );
}

export default Header;
