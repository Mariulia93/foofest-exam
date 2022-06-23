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
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  useEffect(() => {
    let shuffled = props.bands.slice(11).sort(function () {
      return 0.5 - Math.random();
    });
    setFortyBands(shuffled.slice(0, 40));
  }, [props.bands, setFortyBands]);

  const testimonialsData = {
    0: {
      description:
        "We are 3 friends who attended the Foofest festival in 2021. It was the tour and the weekend of our lives. After a roadtrip from Duisburg, Germany, we spent 7 days experiencing the pure magic, fascination and awesomeness of Foofest. Thanks for this great experience and hopefully we can all start a new legendary rave in 2022. Love from Germany",
      name: "Sol Bauchwitz",
      icon: firstImage,
    },
    1: {
      description:
        "It is unbelievable how few hours give you that good energy you need for the whole year. Only good vibes. I will miss catching the sun with my favorite artist. Foofest is a part of my life.",
      name: "Gabriela Got",
      icon: secondImage,
    },
    2: {
      description:
        "The festival was amazing at every part, stage, crowd, artists, everything. Can't wait for the next edition.",
      name: "Gui Cagnetta",
      icon: thirdImage,
    },
  };

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
        <h2>Discover amazing stories from Foofest’s first edition</h2>
        <div className="testimonialCarousel">
          <button
            onClick={() => setTestimonialIndex(testimonialIndex - 1)}
            disabled={testimonialIndex <= 0 ? true : false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-left-square arrow"
              viewBox="0 0 16 16"
              opacity={testimonialIndex <= 0 ? "0.6" : "1"}
            >
              <path
                fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </button>
          <TestimonialBanner data={testimonialsData[testimonialIndex]} />

          <button
            onClick={() => setTestimonialIndex(testimonialIndex + 1)}
            disabled={testimonialIndex >= 2 ? true : false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right-square arrowLeft"
              viewBox="0 0 16 16"
              opacity={testimonialIndex >= 2 ? "0.6" : "1"}
            >
              <path
                fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className="sustainableSection">
        <div className="firstDescription">
          <div className="headerSus">
            <h1>WE CARE. #COMMUNITY</h1>
          </div>
          <div className="parSus">
            <p>
              Protecting the oceans is an important value for us.
              <span className="spanText"> WE DONATE 10% </span>
              of our profits to Oceana, the largest international advocacy
              organization for ocean conversation in the world. So take comfort
              knowing that we care, and that our mission is to provide a safe,
              clean environment for all of us to get out and start smiling
              again.
            </p>
          </div>
        </div>
        <div className="middleDescription">
          <h4>
            We know how much waste a festival can produce that’s why we take
            several steps in order to preserv the environment.
          </h4>
        </div>
        <div className="lastPart">
          <div className="sustAlign">
            <div className="smallIcon1"></div>
            <div className="sustBox">
              <h1>1.</h1>
              <p>
                Our bottled water comes from a local source and you can get
                branded reusable cups, that you can keep as a souvenir.
              </p>
            </div>
          </div>
          <div className="sustAlign">
            <div className="smallIcon2"></div>
            <div className="sustBox">
              <h1>2.</h1>
              <p>
                We’ve created an Eco Zone where nearly a dozen eco-related
                nonprofit exhibitors are teaching festival goers about ocean
                protection and sustainability.
              </p>
            </div>
          </div>
          <div className="sustAlign">
            <div className="smallIcon3"></div>
            <div className="sustBox">
              <h1>3.</h1>
              <p>
                Our food suppliers are using biodegradable bioplastic packaging
                that reduces carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
