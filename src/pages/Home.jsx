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
      <section>
        <h2>Line up</h2>
        <p>Default bands</p>
        {props.bands.map((band) => (
          <Band band={band} />
        ))}

      </section>
    </>
  );
}
