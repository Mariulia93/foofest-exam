import React from "react";
import CountTicket from "./CountTicket";

function StepTickets(props) {
  console.log("HEEEEEEEEEEERE", props);
  return (
    <>
      <h4>Your shopping cart</h4>
      {/* VIP */}
      <div className="cartRow" style={props.vipCount < 1 ? { display: "none" } : null}>
        <p>VIP ticket</p>
        <CountTicket
          title="VIP"
          count={props.vipCount}
          price={props.vipPrice}
          incrementCount={props.incrementCount}
          decrementCount={props.decrementCount}
        />
        <p>{props.vipPrice}kr</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="red"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </div>
      {/* REGULAR */}
      <div className="cartRow" style={props.regularCount < 1 ? { display: "none" } : null}>
        <p>Regular ticket</p>
        <CountTicket
          title="REGULAR"
          count={props.regularCount}
          price={props.regularPrice}
          incrementCount={props.incrementCount}
          decrementCount={props.decrementCount}
        />
        <p>{props.regularPrice}kr</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="red"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </div>
      {(props.vipCount === 0 || props.regularCount === 0) && (
        <div>
          <span>Add more</span>
          <article>
            <div>
              <p>
                {" "}
                {props.vipCount === 0
                  ? "VIP ticket"
                  : props.regularCount === 0
                  ? "Regular ticket"
                  : null}
              </p>
              <p>
                {props.vipCount === 0
                  ? props.vipPrice
                  : props.regularCount === 0
                  ? props.regularPrice
                  : null}
              </p>
            </div>
            <button className="secondaryCTA">Add to cart</button>
          </article>
        </div>
      )}
    </>
  );
}

export default StepTickets;
