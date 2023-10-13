import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Login / Signup </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Registration Number</label>
          <textarea
            rows="6"
            placeholder="Enter Reg Number..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
