import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
        <img src="/logo.png" alt="Apex Wear Logo" className="footer-logo" />
      <p className="footer-text">&copy; 2026 Apex Wear. All rights reserved.</p>
        <div className="social-icons">
            <a href="https://www.facebook.com/apexwear" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/apexwear" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.twitter.com/apexwear" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
        </div>
    </footer>
  );
}

export default Footer;