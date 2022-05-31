import { useState } from "react";
import TicketOwner from "./TicketOwner";

function StepPersonalData(props) {
  const [isEmailTheSame, setIsEmailTheSame] = useState(false);
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");

  // function joinOwnerName(e) {
  //   // let fullname = [firstname + lastname];
  //   if (e.target.name === "fname") {
  //     setFirstname(e.target.value);
  //   } else setLastname(e.target.value);

  //   if (firstname !== "" && lastname !== "") {
  //     addToArray(firstname + " " + lastname);
  //     setFirstname("");
  //     setLastname("");
  //     console.log("im inside");
  //   }
  //   console.log("ticketowners", firstname);
  //   console.log("ticketowners", lastname);
  // }

  function addToArray(owner) {
    let noId = props.ticketOwners.filter((el) => el.id !== owner.id);
    props.getTicketOwners(noId);
    props.getTicketOwners((oldArray) => oldArray.concat(owner));
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
      <form className="personalData" method="post" action="https://mydogs-0e30.restdb.io/rest/foofest">
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
          <TicketOwner i={i} addToArray={addToArray}></TicketOwner>
        ))}
      </form>
    </>
  );
}

export default StepPersonalData;
