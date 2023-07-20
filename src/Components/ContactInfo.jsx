import react, { useRef, useState } from "react";
import { MdOutgoingMail } from "react-icons/md";
import emailjs from "@emailjs/browser";

function ContactDetails() {
  const [name, setName] = useState("");
  const form = useRef();

  console.log("id---->", typeof import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-div">
      <div className="contact-text">
        <h2>Want to get in touch? </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label className="label-contact">
            Full Name<b>*</b>
          </label>
          <input
            type="text"
            placeholder="e.g Felix Schmidt"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-contact"
            name="user_name"
          />

          <label className="label-contact">
            Email <b>*</b>
          </label>
          <input
            type="email"
            placeholder="e.g Youremail@gmail.com"
            className="input-contact"
            name="user_email"
          />

          <label className="label-contact">
            subject <b>*</b>
          </label>
          <input
            type="text"
            placeholder="e.g Subject"
            className="input-contact"
            name="subject"
          />

          <label className="label-contact">
            Tell us about it <b>*</b>
          </label>
          <textarea
            className="textarea-contact"
            placeholder="Write here..."
            name="message"
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
