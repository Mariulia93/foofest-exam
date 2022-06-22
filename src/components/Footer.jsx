import Contact from "./Contact";
import Address from "./Address";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="bgImageFadeOut">
        <ul>
          <Contact />

          <Address />
        </ul>
      <section className="secPartners">
        <h3>Friends of FOOFEST</h3>
        <div className="partners">
          <div className="cocacola"></div>
          <div className="elgiganten"></div>
          <div className="tuborg"></div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Footer;
