import { Collapse } from "react-collapse";
import { useState } from "react";

export default function Question(props) {
  const [isOpened, setIsOpened] = useState(false);
  function openQuestion() {
    setIsOpened((state) => !state);
  }
  return (
    <div className="singleQuestion">
      <button onClick={openQuestion} className={isOpened ? "openedQuestion" : null}>
        <p>{props.question}</p>
        <svg
          className={isOpened ? "rotateArrow bi bi-arrow-down-short" : "bi bi-arrow-down-short"}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
          />
        </svg>
      </button>
      <Collapse isOpened={isOpened}>
        <p>{props.answer}</p>
      </Collapse>
      <hr />
    </div>
  );
}
