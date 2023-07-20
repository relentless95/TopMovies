import React from "react";
import Hero from "../Components/Hero";
import ContactDetails from "../Components/ContactInfo";

function ContactPage() {
  return (
    <section className="contact-page">
      <Hero />
      {/* <ContactDetails /> */}
      <div className="container">
        <ContactDetails />
      </div>
    </section>

    //   <div className="under-construction">
    //   <div>ContactPage</div>
    //   <img src={"images/under_con.png"} alt="under-construction" />
    // </div>
  );
}

export default ContactPage;
