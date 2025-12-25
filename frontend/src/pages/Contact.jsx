function Contact() {
  return (
    <section className="contact">

      {/* HEADER */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Whether you’re planning a visit or just have a question,
          we’d love to hear from you.
        </p>
      </div>

      {/* INFO */}
      <div className="contact-info">
        <div className="info-card">
          <h3>Visit Us</h3>
          <p>Barrel Street Lounge</p>
          <p>Main Road, City Center</p>
          <p>India</p>
        </div>

        <div className="info-card">
          <h3>Opening Hours</h3>
          <p>Mon – Thu: 5 PM – 12 AM</p>
          <p>Fri – Sun: 5 PM – 2 AM</p>
        </div>

        <div className="info-card">
          <h3>Get in Touch</h3>
          <p>+91 98765 43210</p>
          <p>hello@barrelstreet.com</p>
        </div>
      </div>

      {/* FORM */}
      <div className="contact-form-wrapper">
        <h2>Send Us a Message</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="4" placeholder="Your Message"></textarea>

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>

    </section>
  );
}

export default Contact;
