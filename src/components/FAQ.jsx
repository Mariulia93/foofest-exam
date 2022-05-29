import Question from "./Question";
import faqData from "../faq.json";

export default function FAQ() {
  return (
    <div className="questionsContainer">
      <h2>Frequently asked questions</h2>
      {faqData.map((item) => (
        <Question key={item.id} question={item.question} answer={item.answer}></Question>
      ))}
    </div>
  );
}
