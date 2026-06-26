const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <div>
        <div className="section-label">Contact</div>
        <h1>Let's work together</h1>
        <p className="contact-tagline">
          Feel free to reach out for opportunities or just to connect.
        </p>
        <div className="contact-links">
          <a href="mailto:Mercytv932@gmail.com">Mercytv932@gmail.com</a>
          <a href="https://github.com/mercytv932">GitHub</a>
          <a href="https://www.linkedin.com/in/yosef-ergano-a694a7266/">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-badge">Available for work</div>
        <p className="contact-note">
          Based in Atlanta, GA. Open to remote and on-site roles in software
          engineering.
        </p>
      </div>
    </div>
  );
};

export default Contact;
