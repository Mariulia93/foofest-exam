export default function RadioButton(props) {
  function handleChange() {
    props.filterFunction(props.value);
  }

  return (
    <div className="radioButton">
      <input type="radio" id={props.name + props.number} name={props.name} value={props.value} onChange={handleChange} />
      <label htmlFor={props.name + props.number}>
        {props.labelTop} {props.labelBottom}
      </label>
    </div>
  );
}
