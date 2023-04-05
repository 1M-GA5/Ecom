import {} from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';
import '../SectionThree/Footer.css'


const FooterNavbar = () => {
  return (
    <div className="section-three">
      <nav className="navbar-bottom">
        <div className="navbar__brand">The Generics</div>
        <div className="navbar__icons">
          <FaYoutube className="navbar__icon" />
          <FaSpotify className="navbar__icon" />
          <FaFacebook className="navbar__icon" />
        </div>
      </nav>
    </div>
  );
};

export default FooterNavbar;
