import React from "react";

function StepPersonalData() {
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
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label for="email">Repeat your email</label>
            <input type="email" id="email" name="email" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Ticket owners</legend>
          <label for="fname">First name</label>
          <input type="text" id="fname" name="fname" />
          <label for="lname">Last name</label>
          <input type="text" id="lname" name="lname" />
        </fieldset>
      </form>
    </>
  );
}

export default StepPersonalData;
