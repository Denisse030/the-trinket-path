import "../App.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-title">The Trinket Path</div>
      <div className="footer-email">dbg03@bu.edu</div>
      <div className="footer-line"></div>
      <div className="footer-links">
        <a href="mailto:dbg03@bu.edu" target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="footer-copy">© 2026 Denisse Benito Gutierrez. All rights reserved.</div>
    </footer>
  );
};

export default Footer;