import Header from "../components/Header";
import Nav from "../components/Nav";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <div id="welcomeImageBackground">
        <div className="opacityContainer">
          <Nav />
          <Header />
        </div>
      </div>
      <h2>THE BIGGEST FESTIVAL IN EUROPE 2022</h2>
      <Banner title="Buy tickets" name="/tickets" />
      <Banner title="See schedule" name="/schedule" />
    </>
  );
}
