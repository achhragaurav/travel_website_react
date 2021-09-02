import React from "react";
import classes from "./ContactUsForm.module.css";

const ContactUsForm = (props) => {
  return (
    <div className={classes.contactUsForm}>
      <h1>Contact Us</h1>
      <form action="">
        <div className={classes["contact-us-form-name"]}>
          <div className={classes["first-name"]}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" placeholder="Enter your First Name" />
          </div>
          <div className={classes["last-name"]}>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" placeholder="Enter your Last Name" />
          </div>
        </div>
        <div className={classes["contact-us-form-email-pass"]}>
          <div className={classes["email"]}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className={classes["phone-no"]}>
            <label htmlFor="phone-no">Phone Number</label>
            <input type="text" placeholder="Enter your phone-no" />
          </div>
        </div>
        <div className={classes["contact-us-form-message"]}>
          <div className={classes["message"]}>
            <label htmlFor="message">Message</label>
            <input type="text" placeholder="Enter your message" />
          </div>
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
