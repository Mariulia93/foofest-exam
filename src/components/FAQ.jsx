import Question from "./Question";
// ...

export default function FAQ() {
  return (
    <div>
      <Question
        question={"Can I return a ticket?"}
        answer={"Yes, to do so please contact us via e-mail: foo@fest.dk."}
      ></Question>
      <Question
        question={"Can I buy a ticket only for one day"}
        answer={"No, all our tickets are for a whole week period."}
      ></Question>
    </div>
  );
}
