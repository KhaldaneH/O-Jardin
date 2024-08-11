import React, { useEffect } from 'react';
import './Header4.css';
import {Link} from 'react-router-dom'


const Header4 = () => {
    
    return (
        <div className='header4'>
            <div className='header4-contents'>
                <h2 style={{fontSize:"60px",marginBottom:"30px"}}>Contact</h2>
                <p style={{marginBottom:"50px",}}>N'hésitez pas à nous contacter</p>
                <button>Télécharger le menu</button>
            </div>
        </div>
    );
}

export default Header4;
