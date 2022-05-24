import ListItem from "./ListItem";

export default function Campsite(props) {
  return (
    <div className="campsiteContainer">
      <h3>{props.name}</h3>
      <div className="campsiteInfo">
        <img src={props.img} alt="tents"></img>
        <ul>
          {props.desc.split(";").map((item) => (
            <ListItem content={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
