import React from "react";
import "./Body.css";
import healthyFood from "../assets/images/healthyFood.png";
import healthyCouples from "../assets/images/healthyCouples.png";
import bodyImg from "../assets/images/bodyImg.png";


const Features: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container">
        {/* Physical Activity Feature */}
        <div className="feature-card">
          <div className="feature-header">
            <span className="feature-icon">📍</span>
            <h2 className="feature-title">Physical Activity</h2>
          </div>
          <div className="feature-content">
            <p className="feature-description">
              Imagine a 'magic pill' that could reduce your risk of developing many chronic diseases,
              has no major side effects, and is completely free. Would you take it? Regular physical
              activity has been described as exactly this wonder pill.
            </p>
            <p className="feature-description">
              Everyone can gain health benefits and enjoyment by being physically active at home, work,
              school, and leisure. It's never too early or too late to start living actively or to
              increase your activity level if you're already an active person.
            </p>
            <button className="feature-button">View Articles</button>
          </div>
        </div>

        {/* Healthy Eating Feature */}
        <div className="feature-row">
          <div className="feature-image-container">
            <img
              src={healthyFood}
              alt="Healthy balanced meal with fresh vegetables and fruits"
              className="feature-image"
            />
          </div>
          <div className="feature-text-container">
            <h2 className="feature-title">Healthy Eating & Lifestyle</h2>
            <p className="feature-description">
              Proper nutrition is fundamental to good health. A balanced diet helps prevent or control
              blood pressure, maintain healthy weight, and reduce the risk of chronic diseases.
            </p>
            <p className="feature-description">
              At MaxiLife, we provide practical guidance on nutrition and dietary choices that support
              your overall wellness goals.
            </p>
            <button className="feature-button">Read More</button>
          </div>
        </div>

        {/* Physical Activity Definition Feature */}
        <div className="feature-row reverse">
          <div className="feature-text-container">
            <h2 className="feature-title">What is Physical Activity?</h2>
            <p className="feature-description">
              Physical activity is any body movement that works your muscles and uses more energy than
              resting. Regular physical activity strengthens your heart, improves lung function, and
              enhances overall fitness.
            </p>
            <p className="feature-description">
              From walking and swimming to cycling and dancing, there are countless ways to incorporate
              physical activity into your daily routine.
            </p>
            <button className="feature-button">Read More</button>
          </div>
          <div className="feature-image-container">
            <img
              src={healthyCouples}
              alt="Active couple exercising outdoors"
              className="feature-image"
            />
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <h2 className="section-title">Subscribe And Get Tips</h2>
          <div className="section-divider"></div>

          <div className="newsletter-container">
            <div className="newsletter-content">
              <h3 className="newsletter-title">Subscribe To Our Newsletter</h3>
              <p className="newsletter-description">
                The hustle and bustle of life and our daily busy schedules can push health-related
                issues down our list of priorities. Access to a continuous stream of health tips and
                information will help not only keep you adequately informed but also sustain your
                motivation in cultivating healthy habits.
              </p>
              <p className="newsletter-description">
                Our practical guides and tips will help keep you abreast of essential wellness facts
                and strategies for maintaining optimal health.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </div>
            <div className="newsletter-image-container">
              <img
                src={bodyImg}
                alt="Healthy lifestyle representation"
                className="newsletter-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;