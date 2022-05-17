import Header from "../components/Header";
import Nav from "../components/Nav";

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
    </>
  );
}
