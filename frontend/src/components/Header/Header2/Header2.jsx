import './Header2.css';
import {Link} from 'react-router-dom'


const Header2 = () => {
    
    return (
        <div className='header2'>
            <div className='header2-contents'>
                <h2 style={{fontSize:"60px",marginBottom:"30px"}}>About</h2>
                <p style={{marginBottom:"50px",}}>Nous offrons l'endroit idéal pour se détendre et se connecter avec la nature</p>
                <Link to="/menu"><button>Voir le Menu</button></Link>
            </div>
        </div>
    );
}

export default Header2;
