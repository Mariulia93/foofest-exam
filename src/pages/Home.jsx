import { Link } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Band from "../components/Band";
import Footer from "../components/Footer";
import PrimaryCTA from "../components/PrimaryCTA";
import { useEffect, useState } from "react";
import TestimonialBanner from "../components/TestimonialBanner";

import firstImage from "../images/three-friends.webp";
import secondImage from "../images/gabriela-got.webp";
import thirdImage from "../images/gui-cagnetta.webp";

export default function Home(props) {
  const [fortyBands, setFortyBands] = useState([]);
  useEffect(() => {
    let shuffled = props.bands.slice(11).sort(function () {
      return 0.5 - Math.random();
    });
    setFortyBands(shuffled.slice(0, 40));
  }, [props.bands, setFortyBands]);

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
      <h1 className="homeTitle">THE BIGGEST BEACH FESTIVAL IN EUROPE 2022</h1>
      <p>
        Come and join us to celebrate our 2nd edition of FooFest - beach music
        festival where fun is guaranteed. You can expect great music, summer
        beach vibes, mixed cocktails and much more.
      </p>
      <Banner
        title="Get your ticket now!"
        name="/tickets"
        buttonText="Buy Tickets"
        style={{ backgroundPosition: "top" }}
      />
      <Banner
        title="Check out the artists playing!"
        name="/schedule"
        buttonText="Schedule"
        bgColor={{ backgroundColor: "#2F5061" }}
      />
      <section className="lineupContainer">
        <h2>Line-up</h2>

        <p className="defaultLineup">
          TERMINALIST * LED ZEPPELIN * THE BEATLES * PINK FLOYD * QUEEN *
          METALLICA * AC/DC * THE ROLLING STONES * GUNS N' ROSES * NIRVANA
        </p>
        <div className="lineupBand">
          {fortyBands.map((band) => (
            <Band key={band.name} band={band} />
          ))}
        </div>
        <p className="andMoreLineup">AND MANY MORE!</p>
      </section>
      <section className="testimonialContainer">
        <TestimonialBanner
          description="We are 3 friends who attended the Foofest festival in 2021. It was the tour and the weekend of our lived. After a roadtrip from Duisburg, Germany, we spent 7 days experiencing the pure magic, fascination and awesomeness of Foofest. Thanks for this great experience and hopefully we can all start a new legendary rave in 2022. Love from Germany"
          name="Sol Bauchwitz"
          icon={firstImage}
        />
        <TestimonialBanner
          description="It is unimaginable how few hours gives you that good energy you need for the whole year.
        Only good vibes. I will miss catching the sun with my favorite artist. Foofest is a part of my life.
        "
          name="Gabriela Got"
          icon={secondImage}
        />
        <TestimonialBanner
          description="The festival was amazing at every part, stage, crowd, artists, everything. Can't wait for the next edition."
          name="Gui Cagnetta"
          icon={thirdImage}
        />
      </section>
      <Footer />
    </>
  );
}
