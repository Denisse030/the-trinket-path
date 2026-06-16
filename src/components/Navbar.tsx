import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (sectionId: string) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="The Trinket Path" className="navbar-logo"/>
        </Link>

        <div className="navbar-links">
          <a href="/#about" onClick={(e) => { e.preventDefault(); goToSection("about"); }}>About</a>
          <NavLink to="/trinkets">Trinkets</NavLink>
          <NavLink to="/cafes">Cafes</NavLink>
          <NavLink to="/galleries">Galleries</NavLink>
          <a href="/#contact" onClick={(e) => { e.preventDefault(); goToSection("contact"); }}>Contact</a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? ( <span className="close-icon">✕</span> ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/#about" onClick={(e) => { e.preventDefault(); setMenuOpen(false); goToSection("about"); }}>About</a>
        <NavLink to="/trinkets" onClick={() => setMenuOpen(false)}>Trinkets</NavLink>
        <NavLink to="/cafes" onClick={() => setMenuOpen(false)}>Cafes</NavLink>
        <NavLink to="/galleries" onClick={() => setMenuOpen(false)}>Galleries</NavLink>
        <a href="/#contact" onClick={(e) => { e.preventDefault(); setMenuOpen(false); goToSection("contact");}}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;