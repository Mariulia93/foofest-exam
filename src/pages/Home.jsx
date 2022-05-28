import { Link } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Band from "../components/Band";
import Footer from "../components/Footer";
import PrimaryCTA from "../components/PrimaryCTA";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [twentyBands, setTwentyBands] = useState([]);
  useEffect(() => {
    let shuffled = props.bands.sort(function () {
      return 0.5 - Math.random();
    });
    setTwentyBands(shuffled.slice(0, 20));
  }, [props.bands, setTwentyBands]);

  return (
    <>
      <div id="welcomeImageBackground">
        <div className="opacityContainer">
          <nav>
            <ul>
              <Link className="logo" to="/">
                FOOFEST
              </Link>
              <div className="navFlexWrapper">
                <li>
                  <Link to="/tickets">TICKETS</Link>
                </li>
                <li>
                  <Link to="/schedule">SCHEDULE</Link>
                </li>
                <li>
                  <Link to="/info">INFO</Link>
                </li>
              </div>
              <li>
                <PrimaryCTA />
              </li>
            </ul>
          </nav>
          <Header />
        </div>
      </div>
      <h1 className="homeTitle">THE BIGGEST FESTIVAL IN EUROPE 2022</h1>
      <Banner title="Get your ticket now!" name="/tickets" buttonText="Buy Tickets" style={{ backgroundPosition: "top" }} />
      <Banner
        title="Check out the artists playing!"
        name="/schedule"
        buttonText="Schedule"
        bgColor={{ backgroundColor: "#2F5061" }}
      />
      <section className="lineupContainer">
        <h2>Line-up</h2>

        <p className="defaultLineup">
          TERMINALIST * LED ZEPPELIN * THE BEATLES * PINK FLOYD * QUEEN * METALLICA * AC/DC * THE ROLLING STONES * GUNS N' ROSES *
          NIRVANA
        </p>
        <div className="lineupBand">
          {twentyBands.map((band) => (
            <Band key={band.name} band={band} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
