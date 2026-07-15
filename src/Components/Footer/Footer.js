import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* copyright */}
      <div className="footer-copyright">
        <p>© 2026 Aryan Basatia. All Rights Reserved</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a
            href="https://github.com/Aryan-basatia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aryan-basatia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
