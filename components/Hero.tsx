import React from "react";
import "./Body.css";
import heroImg from "../assets/images/heroImg.png"

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MaxiLife Health and Wellness</h1>
          <h2 className="hero-subtitle">Your Partner for Healthy Living</h2>
          <div className="hero-divider"></div>
          <p className="hero-description">
            Discover comprehensive health information, weight management guidance, and wellness resources
            tailored to your needs. At MaxiLife, we understand that living healthy isn't always easy.
            That's why we provide you with the right tools, information, support, and motivation to
            achieve your goals for a healthier lifestyle.
          </p>
          <p className="hero-description">
            Explore our valuable resources and learn about the various ways we can work with you
            toward optimal health and wellbeing.
          </p>
          <div className="hero-cta">
            <button className="primary-button">Explore Our Services</button>
            <button className="secondary-button">Contact Us</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src={heroImg}
            alt="Healthy lifestyle representation"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;