import React from "react";

function StepPersonalData() {
  return (
    <>
      <h4>Contact information</h4>
      <form className="personalData" method="post" action="https://mydogs-0e30.restdb.io/rest/foofest">
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

        <fieldset>
          <legend>Ticket owners</legend>
          <label htmlFor="fname">First name</label>
          <input type="text" id="fname" name="fname" />
          <label htmlFor="lname">Last name</label>
          <input type="text" id="lname" name="lname" />
        </fieldset>
      </form>
    </>
  );
}

export default StepPersonalData;
