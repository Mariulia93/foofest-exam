export default function BandCard(props) {
  let logoUrl = "";

  function handleLogo(logoString) {
    if (logoString.substring(0, 4) === "http") {
      console.log(logoString);
      return logoString;
    } else {
      return "https://foofest2022.herokuapp.com/logos/" + logoString;
    }
  }

  logoUrl = handleLogo(props.band.logo);

  return (
    <button className={`bandCard ${props.stage}`} href="">
      <img src={logoUrl} alt={props.band.name} />
      <h4>{props.band.name}</h4>
    </button>
  );
}

// {props.band.logoCredits && <p>{props.band.logoCredits}</p>}
