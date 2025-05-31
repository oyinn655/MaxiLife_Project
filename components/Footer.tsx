import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-heading">
              ABOUT <span className="footer-highlight">MAXILIFE</span>
            </h3>
            <div className="footer-divider"></div>
            <p className="footer-text">
              MaxiLife Health and Wellness is dedicated to helping you achieve optimal health through
              evidence-based guidance, support, and resources. Our mission is to empower individuals
              on their journey toward healthier living and sustainable wellness practices.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">
              SOCIAL <span className="footer-highlight">MEDIA</span>
            </h3>
            <div className="footer-divider"></div>
            <div className="footer-links">
              <a href="#youtube" className="social-link">
                <i className="social-icon youtube"></i>YouTube
              </a>
              <a href="#twitter" className="social-link">
                <i className="social-icon twitter"></i>Twitter
              </a>
              <a href="#linkedin" className="social-link">
                <i className="social-icon linkedin"></i>LinkedIn
              </a>
              <a href="#facebook" className="social-link">
                <i className="social-icon facebook"></i>Facebook
              </a>
              <a href="#instagram" className="social-link">
                <i className="social-icon instagram"></i>Instagram
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">
              LATEST <span className="footer-highlight">UPDATES</span>
            </h3>
            <div className="footer-divider"></div>
            <div className="footer-updates">
              <div className="update-item">
                <p className="update-text">
                  New research shows that 30 minutes of daily moderate exercise can significantly improve overall health markers.
                </p>
                <span className="update-date">April 20, 2025</span>
              </div>
              <div className="update-item">
                <p className="update-text">
                  Our latest nutrition guide for balanced eating is now available for all subscribers.
                </p>
                <span className="update-date">April 15, 2025</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">
              SUBSCRIBE TO OUR <span className="footer-highlight">NEWSLETTER</span>
            </h3>
            <div className="footer-divider"></div>
            <p className="footer-text">
              Stay updated with the latest health tips, wellness advice, and exclusive content.
            </p>
            <form className="footer-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                  required
                />
                <button type="submit" className="footer-button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2016-2025 MaxiLife Health and Wellness. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <a href="#terms" className="legal-link">Terms of Use</a>
            <a href="#contact" className="legal-link">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;