import { Collapse } from "react-collapse";
import { useState } from "react";

export default function Question(props) {
  const [isOpened, setIsOpened] = useState(false);
  function openQuestion() {
    setIsOpened((state) => !state);
  }
  return (
    <div>
      <button onClick={openQuestion}>{props.question}</button>
      <Collapse isOpened={isOpened}>
        <p>{props.answer}</p>
      </Collapse>
    </div>
  );
}
