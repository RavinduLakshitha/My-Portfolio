import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Ravindu Lakshitha. All rights reserved.
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ravindulakshitha/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/RavinduLakshitha" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="/contact" className="contact-link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

