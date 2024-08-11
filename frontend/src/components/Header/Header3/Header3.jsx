import React, { useEffect } from 'react';
import './Header3.css';
import {Link} from 'react-router-dom'


const Header3 = () => {
    useEffect(() => {
        const backgrounds = [
            '/hero-3.jpg',
            '/hero-4.jpg',
            '/hero-5.jpg'
        ];

        let currentIndex = 0;
        const Header3 = document.querySelector('.header3');

        // Set the initial background image immediately
        Header3.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

        const changeBackground = () => {
            currentIndex = (currentIndex + 1) % backgrounds.length;
            Header3.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
        };

        const intervalId = setInterval(changeBackground, 5000); // Change the image every 5000ms (5 seconds)

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div className='header3'>
            <div className='header3-contents'>
                <h2>Bienvenue au Café O Jardin</h2>
                <p>Choisissez parmi un menu varié comprenant une gamme délicieuse de plats préparés avec les meilleurs ingrédients et l'expertise culinaire. Nous avons également un magasin, consultez-le</p>
                <Link to="/menu"><button>Voir le Menu</button></Link>
            </div>
        </div>
    );
}

export default Header3;
