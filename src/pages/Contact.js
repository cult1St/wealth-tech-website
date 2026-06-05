import { Link } from 'react-router';

export default function Contact() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">
              {"Home"}
            </Link>
            {" / "}
            <span>
              {"Contact"}
            </span>
          </div>
          <h1>
            {"Contact Wealth Tech"}
          </h1>
          <p className="lead">
            {"Reach us for partnerships, payment integration, VTU support, software development or transaction review."}
          </p>
        </div>
      </header>
      <section className="section bg-light">
        <div className="container grid-2">
          <form id="contactForm">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Full name
                </label>
                <input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email address
                </label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  Phone number
                </label>
                <input id="phone" name="phone" placeholder="+234" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">
                  Service interest
                </label>
                <select id="subject" name="subject" required>
                  <option>
                    Payment Processing
                  </option>
                  <option>
                    VTU Services
                  </option>
                  <option>
                    Wallet System
                  </option>
                  <option>
                    E-commerce Development
                  </option>
                  <option>
                    Business Automation
                  </option>
                  <option>
                    Custom Software
                  </option>
                  <option>
                    Transaction Support
                  </option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>
              <textarea id="message" name="message" required placeholder="Tell us how we can help" />
            </div>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
            <div className="form-message" />
          </form>
          <div className="contact-side">
            <div className="contact-card">
              <span className="eyebrow">
                Contact information
              </span>
              <h2>
                Business support details.
              </h2>
              <p>
                <strong>
                  Email:
                </strong>
                momoduwealth2@gmail.com
              </p>
              <p>
                <strong>
                  Phone:
                </strong>
                +234 907 817 7518
              </p>
              <p>
                <strong>
                  Business address:
                </strong>
                Ikotun, Lagos, Nigeria
              </p>
              <p>
                <strong>
                  Support hours:
                </strong>
                Monday-Saturday, 8:00AM-8:00PM
              </p>
            </div>
            <div className="map-placeholder mt-24">
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34692.056106886535!2d3.2533838195141827!3d6.532261534085966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1780660027634!5m2!1sen!2sng"
                  title="Wealth Tech location map"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
