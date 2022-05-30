import { useState } from "react";

export default function BandPopUp(props) {
  const [readMore, setReadMore] = useState(false);

  console.log("hey");
  let logoUrl = "";
  function handleClose() {
    props.hidePopUp();
  }

  function showReadMore() {
    setReadMore((old) => !old);
    console.log(readMore, "read somethign");
  }

  function handleLogo(logoString) {
    if (logoString.substring(0, 4) === "http") {
      return logoString;
    } else {
      return "https://foofest2022.herokuapp.com/logos/" + logoString;
    }
  }
  logoUrl = handleLogo(props.band.logo);

  return (
    <div className="popUp">
      <img src={logoUrl} alt={props.band.name} />
      <p className="logoCredits">{props.band.logoCredits}</p>
      <button className="closeButton" onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#999"
          className="bi bi-x-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </button>

      <iframe
        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ffoofest2022.netlify.app%2Fschedule&layout=button_count&size=small&width=96&height=20&appId"
        width="96"
        height="20"
        style={({ border: "none" }, { overflow: "hidden" })}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        title="facebook"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <div>
        <div className="popUpName">
          <h2>{props.band.name}</h2>
          <h5>Genre: {props.band.genre}</h5>
        </div>
        <h4 className="members">{props.band.members.join(", ")}</h4>

        <div className="bioP">
          <p>{props.band.bio.substring(0, props.band.bio.indexOf(".") + 1)}</p>
          <p style={!readMore ? { display: "none" } : null}> {props.band.bio.substring(props.band.bio.indexOf(".") + 1)}</p>
          <button className="readMore" onClick={showReadMore}>
            {readMore ? "Show less" : "Read more"}
          </button>
        </div>

        <p>stage: {props.band.stage}</p>
      </div>
    </div>
  );
}
