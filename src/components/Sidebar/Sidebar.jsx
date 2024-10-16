import {Link} from "react-router-dom";
import {scrollToTop} from "../../utils/scrollToTop";

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="sidebar__nav">
        <li onClick={scrollToTop}>
          <Link to="/" onClick={toggleSidebar}>
            Sobre
          </Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/services" onClick={toggleSidebar}>
            Serviços
          </Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/contact" onClick={toggleSidebar}>
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
