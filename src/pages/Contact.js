import React from "react";
import ContactUsForm from "../components/ContactPageComp/ContactUsForm";
import EmailUs from "../components/ContactPageComp/EmailUs";
import SocailContact from "../components/ContactPageComp/SocailContact";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={classes["contact-section-main"]}>
      <div className={classes["contact-design"]}>
        <div className={classes["contact-design-heading"]}>
          <h1>We'd love to hear from you</h1>
        </div>
        <div className={classes["contact-design-circles"]}>
          <div className={classes["circleSimpleOne"]}></div>
          <div className={classes["circleDotted"]}></div>
          <div className={classes["circleSimpleTwo"]}></div>
        </div>
        <div className={classes["contact-design-policy"]}>
          <p>Privacy Policy . Modern Day Statement . Social Impact Statement</p>
        </div>
      </div>
      <div className={classes["contact-form"]}>
        <ContactUsForm />
        <EmailUs />
        <SocailContact />
      </div>
    </section>
  );
};

export default Contact;
