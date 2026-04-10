import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Careers', path: '/career' },
    { label: 'About', path: '/about' },
    { label: 'Investors Desk', path: '/investors' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav>
        <div className="container">
          <Link to="/" className="logo">
            <Rocket size={32} />
            <span>DJAIRINDIA PVT LTD</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="cta-nav">
            <Link to="/contact" className="btn btn-primary">Join Now</Link>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {links.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>Join Now</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
