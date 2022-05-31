import { useState } from "react";
import ordinal from "ordinal";

function StepPersonalData(props) {
  const [isEmailTheSame, setIsEmailTheSame] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  function joinOwnerName(e) {
    // let fullname = [firstname + lastname];
    if (e.target.name === "fname") {
      setFirstname(e.target.value);
      console.log("fname", e.target.name);
      console.log("lname", e.target.lastname);
    } else setLastname(e.target.value);

    if (firstname !== "" && lastname !== "") {
      addToArray(firstname + " " + lastname);
      setFirstname("");
      setLastname("");
    }
    console.log("ticketowners", props.ticketOwners);
  }
  function addToArray(fullname) {
    console.log(fullname);
    props.getTicketOwners((oldArray) => oldArray.concat(fullname));
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
      <h4 className="stepTitle">Contact information</h4>
      <form
        className="personalData"
        method="post"
        action="https://mydogs-0e30.restdb.io/rest/foofest"
      >
        <fieldset>
          <legend>Where to send tickets</legend>
          <div>
            <label for="email">Your email</label>
            <div className="flex">
              <input
                type="email"
                id="email"
                name="email"
                required
                email={props.email}
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                onChange={handleEmail}
              />
              <span></span>
            </div>
          </div>
          <div>
            {!isEmailTheSame && <p>Emails are not matching!</p>}
            <label for="email">Repeat your email</label>
            <div className="flex">
              <input
                type="email"
                id="repeatEmail"
                name="repeatEmail"
                required
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                onChange={validateEmail}
              />
              <span></span>
            </div>
          </div>
        </fieldset>

        {[...Array(props.vipCount + props.regularCount)].map((e, i) => (
          <div>
            <p> {ordinal(i + 1)} Ticket owner</p>
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname" onBlur={joinOwnerName} />
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname" onBlur={joinOwnerName} />
          </div>
        ))}
      </form>
    </>
  );
}

export default StepPersonalData;
