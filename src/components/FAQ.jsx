import Question from "./Question";
// ...

export default function FAQ() {
  return (
    <div class="questionsContainer">
      <h2>Frequently asked questions</h2>
      <hr />
      <Question
        question={"Can I return a ticket?"}
        answer={"Yes, to do so please contact us via e-mail: foo@fest.dk."}
      ></Question>
      <Question
        question={"Can I buy a ticket only for one day?"}
        answer={"No, all our tickets are for a whole week period."}
      ></Question>
      <Question
        question={"I would like to upgrade my regular ticket to VIP. Is it possible?"}
        answer={"Yes, to do so please contact us via e-mail: foo@fest.dk."}
      ></Question>
      <Question
        question={"Do I have to bring a printed out version of my ticket to the festival?"}
        answer={"This is not necessary. We can scan all tickets from your phone."}
      ></Question>
      <Question
        question={"Can someone else use my ticket even though my name is on there?"}
        answer={
          "No, the personal data has to be the same as in a ticket owner’s ID. If you want to change the name on the ticket, please contact us via e-mail: foo@fest.dk."
        }
      ></Question>
      <Question
        question={"Can I buy a ticket at the entrance?"}
        answer={"There are no tickets available at the entrance. You can only get a ticket on our website."}
      ></Question>
      <Question
        question={"How big are your camping sites?"}
        answer={"Svartheim: 400 spots Nilfheim: 300 spots Helheim: 100 spots Muspelheim: 200 spots Alfheim: 250 spots"}
      ></Question>
      <Question
        question={
          "What measures are required to participate in Foofest 2022 in the context of the COVID-19 pandemic, and will the participation in the festival be conditioned by vaccination?"
        }
        answer={
          "For the health and safety of Participants, the Event Organizer may request evidence to confirm that their health allows them to participate in the Festival, will be able to apply health verification measures (by means of rapid testing, temperature taking, scanning of the European Digital Certificate COVID-19, etc.) and to apply any measures required by the state authorities imposed event organizers depending on the evolution of the epidemiological situation."
        }
      ></Question>
    </div>
  );
}
