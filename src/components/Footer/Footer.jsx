import {Link} from "react-router-dom";
import {scrollToTop} from "../../utils/scrollToTop";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link onClick={scrollToTop} to="/">
          <h3 className="icon_footer">BELLINI</h3>
        </Link>
        <p>
          © 2024 BELLINI. <br />
          ALL RIGHTS RESERVED.
        </p>
        <p></p>
      </div>
      <div>
        <h3>Location</h3>
        <p>
          99 CROWN st,
          <br />
          DARLINGHURST,
          <br />
          SYDNEY, 2010
        </p>
        <p>SEE MAP</p>
      </div>
      <div>
        <h3>services</h3>
        <p>HAIR & STYLING</p>
        <p>BARBER</p>
        <p>COLOUR SERVICES</p>
        <p>BEARD & SHAVE EXPERIENCES</p>
        <p>CONDITIONING TREATMENTS IN</p>
        <p>LAY-DOWN SHIATSU LOUNGES</p>
        <p>KERATIN SMOOTHING TREATMENT</p>
        <p>SKIN + BEAUTY</p>
        <p>AESTHETICS</p>
        <p>WELLBEIN</p>
      </div>
      <div>
        <h3>Contact us</h3>
        <p>
          @BELLINI_BARBER <br />
          912345567
        </p>
      </div>
    </footer>
  );
};

export default Footer;
