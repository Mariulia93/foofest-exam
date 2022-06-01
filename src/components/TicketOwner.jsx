import ordinal from "ordinal";
import { useEffect, useState } from "react";

export default function TicketOwner(props) {
  const [owner, setOwner] = useState({ id: props.i });

  function handleFirstname(e) {
    setOwner((prevState) => ({ ...prevState, firstname: e.target.value }));
  }
  function handleLastname(e) {
    setOwner((prevState) => ({ ...prevState, lastname: e.target.value }));
  }

  const { addToArray } = props;

  useEffect(() => {
    addToArray(owner);
  }, [owner]);

  return (
    <div>
      <p> {ordinal(props.i + 1)} Ticket owner</p>
      <label htmlFor="fname">First name</label>
      <input type="text" id="fname" name="fname" onBlur={handleFirstname} />
      <label htmlFor="lname">Last name</label>
      <input type="text" id="lname" name="lname" onBlur={handleLastname} />
    </div>
  );
}
