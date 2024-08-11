import React from 'react';
import './Header2.css';
import {Link} from 'react-router-dom'


const Header2 = () => {
    

    return (
        <div className='header2'>
            <div className='header-contents'>
                <h2>Bienvenue au Café O Jardin</h2>
                <p>Choisissez parmi un menu varié comprenant une gamme délicieuse de plats préparés avec les meilleurs ingrédients et l'expertise culinaire. Nous avons également un magasin, consultez-le.</p>
                <Link to="/menu"><button>Voir le Menu</button></Link>
            </div>
        </div>
    );
}

export default Header2;
