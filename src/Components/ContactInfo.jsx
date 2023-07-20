import react, { useState } from "react";
import { MdOutgoingMail } from "react-icons/md";

function ContactDetails() {
  const [name, setName] = useState("");
  return (
    <div className="contact-div">
      <div className="contact-text">
        <h2>Want to get in touch? </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="contact-form">
        <form>
          <label className="label-contact">
            Full Name<b>*</b>
          </label>
          <input
            type="text"
            placeholder="e.g:Felix Schmidt"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-contact"
          />

          <label className="label-contact">
            Email <b>*</b>
          </label>
          <input
            type="email"
            placeholder="e.g Youremail@gmail.com"
            className="input-contact"
          />

          <label className="label-contact">
            Tell us about it <b>*</b>
          </label>
          <textarea
            className="textarea-contact"
            placeholder="Write here..."
          ></textarea>
          <button type="submit" className="button-contact">
            <MdOutgoingMail /> &nbsp; Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
