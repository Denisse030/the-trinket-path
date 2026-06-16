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

  const goToAbout = () => {
    setMenuOpen(false);

    if (window.location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const handlePageChange = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="navbar-brand" onClick={() => {
            setMenuOpen(false);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src={logo} alt="The Trinket Path" className="navbar-logo"/>
        </Link>

        <div className="navbar-links">
          <a href="/#about" onClick={(e) => {
              e.preventDefault();
              goToAbout();
            }}
          >About</a>
          
          <NavLink to="/trinkets" onClick={handlePageChange}>Trinkets</NavLink>
          <NavLink to="/cafes" onClick={handlePageChange}>Cafes</NavLink>
          <NavLink to="/galleries" onClick={handlePageChange}>Galleries</NavLink>
          <NavLink to="/contact" onClick={handlePageChange}>Contact</NavLink>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>
      </nav>

      {/* Mobile */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/#about" onClick={(e) => {
            e.preventDefault();
            goToAbout();
          }}
        >About</a>

        <NavLink to="/trinkets" onClick={handlePageChange}>Trinkets</NavLink>
        <NavLink to="/cafes" onClick={handlePageChange}>Cafes</NavLink>
        <NavLink to="/galleries" onClick={handlePageChange}>Galleries</NavLink>
        <NavLink to="/contact" onClick={handlePageChange}>Contact</NavLink>
      </div>
    </>
  );
};

export default Navbar;