function Contact() {
  return (
    <section className="contact">
      <div className="contact--text">
        <h1>Let's work together</h1>
      </div>
      <div className="contact-form--container">
        <form className="contact-form">
          <div className="contact-form--fullname">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              aria-label="first name"
              required
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
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
            id="message"
            aria-label="message"
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
