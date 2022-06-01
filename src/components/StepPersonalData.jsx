import { useState } from "react";
import TicketOwner from "./TicketOwner";

function StepPersonalData(props) {
  const [isEmailTheSame, setIsEmailTheSame] = useState(false);

  function addToArray(owner) {
    let noId = props.ticketOwners.filter((el) => el.id !== owner.id); //remove duplicated ids
    props.getTicketOwners(noId.concat(owner));
  }

  function handleEmail(e) {
    props.getEmail(e);
  }

  function validateEmail(e) {
    e.preventDefault();
    console.log(isEmailTheSame);
    if (e.target.value === props.email) {
      setIsEmailTheSame(true);
    } else setIsEmailTheSame(false);
  }

  return (
    <>
      <h4 className="stepTitle">Contact information</h4>
      <form className="personalData">
        <fieldset>
          <legend>Where to send tickets</legend>
          <div>
            <label htmlFor="email">Your email</label>
            <div className="flex">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required
                email={props.email}
                onChange={handleEmail}
              />
              <span></span>
            </div>
          </div>
          <div>
            {!isEmailTheSame && props.email !== "" && <p className="noMatch">Emails are not matching!</p>}
            <label htmlFor="email">Repeat your email</label>
            <div className="flex">
              <input type="text" id="repeatEmail" name="repeatEmail" placeholder="email" required onChange={validateEmail} />
              <span></span>
            </div>
          </div>
        </fieldset>

        {[...Array(props.vipCount + props.regularCount)].map((e, i) => (
          <TicketOwner key={i} i={i} addToArray={addToArray}></TicketOwner>
        ))}
      </form>
    </>
  );
}

export default StepPersonalData;
