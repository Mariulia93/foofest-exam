import React from "react";
import "../card.css";
import CardReactFormContainer from "card-react";
function StepPayment(props) {
  return (
    <>
      <h4>Payment method{props.count}</h4>
      <CardReactFormContainer
        // the id of the container element where you want to render the card element.
        // the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
        container="card-wrapper" // required
        // an object contain the form inputs names.
        // every input must have a unique name prop.
        formInputsNames={{
          number: "CCnumber", // optional — default "number"
          expiry: "CCexpiry", // optional — default "expiry"
          cvc: "CCcvc", // optional — default "cvc"
          name: "CCname", // optional - default "name"
        }}
        // initial values to render in the card element
        // initialValues={{
        //   number: "4242424242424242", // optional — default •••• •••• •••• ••••
        //   cvc: "123", // optional — default •••
        //   expiry: "16/12", // optional — default ••/••
        //   name: "Random Name", // optional — default FULL NAME
        // }}
        // the class name attribute to add to the input field and the corresponding part of the card element,
        // when the input is valid/invalid.
        classes={{
          valid: "valid-input", // optional — default 'jp-card-valid'
          invalid: "invalid-input", // optional — default 'jp-card-invalid'
        }}
        // specify whether you want to format the form inputs or not
        formatting={true} // optional - default true
      >
        <form className="personalData">
          <div>
            <label for="CCname">Full name</label>
            <input placeholder="Full name" type="text" name="CCname" />
          </div>
          <div>
            <label for="CCnumber">Card number</label>
            <input placeholder="Card number" type="text" name="CCnumber" />
          </div>

          <aside className="creditCard">
            <div>
              <label for="CCexpiry">MM/YY</label>
              <input placeholder="MM/YY" type="text" name="CCexpiry" />
            </div>
            <div>
              <label for="CCcvc">CVC</label>
              <input placeholder="CVC" type="text" name="CCcvc" />
            </div>
          </aside>
        </form>
      </CardReactFormContainer>

      <div id="card-wrapper"></div>
    </>
  );
}

export default StepPayment;
