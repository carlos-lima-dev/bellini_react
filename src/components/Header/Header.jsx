import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {scrollToTop} from "../../utils/scrollToTop";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActiveLink = (path) => currentPath === path;

  return (
    <header className="header">
      <div className="header__content">
        <Link onClick={scrollToTop} to="/">
          <h1>BELLINI</h1>
        </Link>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link
                onClick={scrollToTop}
                to="/about"
                className={isActiveLink("/about") ? "active-link" : ""}>
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={scrollToTop}
                to="/services"
                className={isActiveLink("/services") ? "active-link" : ""}>
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={scrollToTop}
                to="/contact"
                className={isActiveLink("/contact") ? "active-link" : ""}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__icon-book">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5ec1ed875586d2e8b0f6af6c/5ec1ed875586d2248ff6af9a_iconmonstr-instagram-11.svg"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a href="#book" className="book-now-btn">
            Book Now
          </a>
          {/* Ícone Burger */}
          <img
            src="https://cdn.prod.website-files.com/5ec1ed875586d2e8b0f6af6c/5ec1ed875586d219bbf6af9b_Hamburger.svg"
            alt="Menu"
            className="burger"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      {/* Componente Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
