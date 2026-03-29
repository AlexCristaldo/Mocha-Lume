import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        setShowNavbar(true);
        return;
      }

      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="container">
        <h1 className="logo">Mocha & Lume</h1>

        <nav className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#onde">Onde estamos</a>
        </nav>

        <Link to="/login" className="btn-primary">
          Reservar mesa
        </Link>
      </div>
    </header>
  );
}

export default Navbar;