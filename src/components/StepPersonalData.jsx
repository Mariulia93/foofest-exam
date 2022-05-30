import ordinal from "ordinal";

function StepPersonalData(props) {
  return (
    <>
      <h4>Contact information</h4>
      <form
        className="personalData"
        method="post"
        action="https://mydogs-0e30.restdb.io/rest/foofest"
      >
        <fieldset>
          <legend>Where to send tickets</legend>
          <div>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="email">Repeat your email</label>
            <input type="email" id="email" name="email" />
          </div>
        </fieldset>

        {[...Array(props.vipCount + props.regularCount)].map((e, i) => (
          <div>
            <p> {ordinal(i + 1)} Ticket owner</p>
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname" />
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname" />
          </div>
        ))}
      </form>
    </>
  );
}

export default StepPersonalData;
