function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* BRAND */}
        <div className="footer-brand">
          <h3>Barrel Street</h3>
          <p>Crafted drinks. Timeless nights.</p>
        </div>

        {/* HOURS */}
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <p>Mon – Thu: 5 PM – 12 AM</p>
          <p>Fri – Sun: 5 PM – 2 AM</p>
        </div>

        {/* LINKS */}
        <div className="footer-section">
          <h4>Explore</h4>
          <p>Home</p>
          <p>Menu</p>
          <p>About</p>
          <p>Contact</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Barrel Street. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
