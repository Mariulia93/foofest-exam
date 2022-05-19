import Header from "../components/Header";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Band from "../components/Band";

export default function Home(props) {
  return (
    <>
      <div id="welcomeImageBackground">
        <div className="opacityContainer">
          <Nav />
          <Header />
        </div>
      </div>
      <h2>THE BIGGEST FESTIVAL IN EUROPE 2022</h2>
      <Banner title="Buy tickets" name="/tickets" style={{ backgroundPosition: "top" }} />
      <Banner title="See schedule" name="/schedule" />
      <section className="lineupContainer">
        <h2>Line-up</h2>

        <p className="defaultLineup">
          TERMINALIST * LED ZEPPELIN * THE BEATLES * PINK FLOYD * QUEEN * METALLICA * AC/DC * THE
          ROLLING STONES * GUNS N' ROSES * NIRVANA
        </p>
        <div className="lineupBand">
          {props.bands.map((band) => (
            <Band band={band} />
          ))}
        </div>
      </section>
    </>
  );
}
