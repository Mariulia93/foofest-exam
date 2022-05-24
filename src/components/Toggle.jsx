export default function Toggle(props) {
  function handleChange() {
    props.toggleSwitchFunction();
  }

  return (
    <div class="toggleContainer">
      <div class="switch-button">
        <input class="switch-button-checkbox" type="checkbox" onChange={handleChange}></input>
        <label class="switch-button-label" for="">
          <span class="switch-button-label-span">FAQ</span>
        </label>
      </div>
    </div>
  );
}
