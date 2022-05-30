import { useState } from "react";
import ordinal from "ordinal";

function StepPersonalData(props) {
  const [isEmailTheSame, setIsEmailTheSame] = useState(false);

  function addToArray() {
    // props.getTicketOwners(owner)
    // e.target.value
  }
  function handleEmail(e) {
    props.getEmail(e);
  }

  function validateEmail(e) {
    if (e.target.value === props.email) {
      setIsEmailTheSame(true);
      console.log("email matches", isEmailTheSame);
    } else setIsEmailTheSame(false);
  }
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
            <label for="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              email={props.email}
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              onChange={handleEmail}
            />
          </div>
          <div>
            {!isEmailTheSame && <p>Emails are not matching!</p>}
            <label for="email">Repeat your email</label>
            <input
              type="email"
              id="repeatEmail"
              name="repeatEmail"
              required
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              onChange={validateEmail}
            />
          </div>
        </fieldset>

        {[...Array(props.vipCount + props.regularCount)].map((e, i) => (
          <div>
            <p> {ordinal(i + 1)} Ticket owner</p>
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname" onChange={addToArray} />
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname" onChange={addToArray} />
          </div>
        ))}
      </form>
    </>
  );
}

export default StepPersonalData;
