import { useState } from "react";

function Contact() {
  /* Form state object for inputs and textarea */
  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  /*
  const [contactFormCompleted, isContactFormCompleted] = useState(false);
  */

  /* Handle changes on contact form while keeping previous data in contact form */
  function handleChange(event) {
    setContactFormData((contactFormData) => {
      return {
        ...contactFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(contactFormData);
  }

  return (
    <section className="contact">
      <div className="contact--text">
        <h1>Let's work together</h1>
      </div>
      <div className="contact-form--container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form--fullname">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstName"
              aria-label="first name"
              onChange={handleChange}
              value={contactFormData.firstName}
              required
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={contactFormData.lastName}
              aria-label="last name"
              required
            />
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" aria-label="email" required />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            aria-label="message"
            onChange={handleChange}
            value={contactFormData.message}
            rows={10}
            required
          ></textarea>
          <button className="submit--btn">Send A Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
