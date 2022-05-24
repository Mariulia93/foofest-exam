export default function BandCard(props) {
  let logoUrl = "";

  function handleClick() {
    let stageObject = {
      stage: props.stage,
    };
    let timeObject = {
      time: props.time,
    };
    let popUpData = { ...props.band, ...stageObject, ...timeObject };
    props.showPopUpFunction(popUpData);
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
    <button className={`bandCard ${props.stage}`} onClick={handleClick}>
      <img src={logoUrl} alt={props.band.name} />
      <h4>{props.band.name}</h4>
    </button>
  );
}

// {props.band.logoCredits && <p>{props.band.logoCredits}</p>}
