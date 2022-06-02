import { useEffect, useState, useRef } from "react";
import TicketOwner from "./TicketOwner";

function StepPersonalData(props) {
  const [isEmailTheSame, setIsEmailTheSame] = useState(false);
  const [repeatedEmail, setRepeatedEmail] = useState("");

  function addToArray(owner) {
    let noId = props.ticketOwners.filter((el) => el.id !== owner.id); //remove duplicated ids
    props.getTicketOwners(noId.concat(owner));
  }

  function handleEmail(e) {
    props.getEmail(e);
  }

  function handleRepeat(e) {
    setRepeatedEmail(e.target.value.toLowerCase());
  }

  useEffect(() => {
    props.disableNextStep(false);
  }, []);

  const dataForm = useRef();

  function checkValidity(e) {
    console.log(dataForm.current.elements);
    if (isEmailTheSame) {
      if (e.target.checkValidity()) {
        for (const element of dataForm.current.elements) {
          console.log(element.checkValidity(), element);
          if (element.checkValidity()) props.disableNextStep(true);
          else return props.disableNextStep(false);
        }
      }
    }
  }

  // form.valid() props.disableNextState(false) else props.disableNextState(false)

  const { email } = props;

  useEffect(() => {
    function validateEmail() {
      if (repeatedEmail === email) {
        setIsEmailTheSame(true);
      } else setIsEmailTheSame(false);
    }
    validateEmail();
  }, [repeatedEmail, email]);

  return (
    <>
      <h4 className="stepTitle">Contact information</h4>
      <form className="personalData" ref={dataForm} onChange={checkValidity}>
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
                email={email}
                onChange={handleEmail}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              />
              <span></span>
            </div>
          </div>
          <div>
            {!isEmailTheSame && email !== "" && <p className="noMatch">Emails are not matching!</p>}
            <label htmlFor="email">Repeat your email</label>
            <div className="flex">
              <input type="text" id="repeatEmail" name="repeatEmail" placeholder="email" required onChange={handleRepeat} />
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
