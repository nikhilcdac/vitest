import React from 'react'; 

const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
};

const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
};

const linksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
};

const linkItemStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
};

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <p>MyLogo</p>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
          
        </nav>
    );
};

export default Navbar;