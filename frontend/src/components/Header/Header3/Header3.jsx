import React, { useEffect } from 'react';
import './Header3.css';
import {Link} from 'react-router-dom'


const Header3 = () => {
    
    return (
        <div className='header3'>
            <div className='header3-contents'>
                <h2 style={{fontSize:"60px",marginBottom:"30px"}}>Menu</h2>
                <p style={{marginBottom:"50px",}}>Au “Cafe O Jardin”, nous vous proposons une variété de plats délicieux et de boissons rafraîchissantes qui satisfont tous les goûts.</p>
                <button>Télécharger le menu</button>
            </div>
        </div>
    );
}

export default Header3;
