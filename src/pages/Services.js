import { Link } from 'react-router';

export default function Services() {
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
              {"Services"}
            </span>
          </div>
          <h1>
            {"Technology services for digital finance and commerce."}
          </h1>
          <p className="lead">
            {"From fintech platforms to workflow automation, we help businesses launch dependable digital products."}
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="tabs">
            <button className="tab-btn active" data-tab="overview">
              {"Overview"}
            </button>
            <button className="tab-btn" data-tab="delivery">
              {"Delivery Approach"}
            </button>
            <button className="tab-btn" data-tab="support">
              {"Support"}
            </button>
          </div>
          <div className="tab-panel active" data-panel="overview">
            <p className="lead">
              {"Our services are structured for secure payment handling, transparent transaction records and strong user experiences."}
            </p>
          </div>
          <div className="tab-panel" data-panel="delivery">
            <p className="lead">
              {"We analyse requirements, design workflows, develop responsive interfaces, test core transactions and provide deployment support."}
            </p>
          </div>
          <div className="tab-panel" data-panel="support">
            <p className="lead">
              {"We support transaction review, issue escalation, documentation, feature improvement and ongoing maintenance."}
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container grid-2">
          <div id="fintech" className="service-card">
            <span className="icon">
              <i className="fa-solid fa-building-columns" aria-hidden="true" />
            </span>
            <h2>
              {"Fintech Solutions"}
            </h2>
            <p>
              {"Digital payment systems and financial technology solutions including wallets, user dashboards, transaction records, payment verification, settlement reporting and customer notifications."}
            </p>
          </div>
          <div id="vtu" className="service-card">
            <span className="icon gold">
              <i className="fa-solid fa-mobile-screen-button" aria-hidden="true" />
            </span>
            <h2>
              {"VTU Services"}
            </h2>
            <p>
              {"Airtime, data, electricity and cable TV services delivered through secure workflows with transaction monitoring and customer support escalation."}
            </p>
          </div>
          <div id="payment" className="service-card">
            <span className="icon blue">
              <i className="fa-solid fa-credit-card" aria-hidden="true" />
            </span>
            <h2>
              {"Payment Processing"}
            </h2>
            <p>
              {"Secure online payment integration and transaction management for cards, transfers, USSD and wallet funding through licensed payment providers."}
            </p>
          </div>
          <div id="ecommerce" className="service-card">
            <span className="icon">
              <i className="fa-solid fa-cart-shopping" aria-hidden="true" />
            </span>
            <h2>
              {"E-commerce Development"}
            </h2>
            <p>
              {"Online stores and digital commerce solutions with product catalogues, checkout, order tracking, customer records and payment confirmation."}
            </p>
          </div>
          <div id="automation" className="service-card">
            <span className="icon gold">
              <i className="fa-solid fa-gears" aria-hidden="true" />
            </span>
            <h2>
              {"Business Automation"}
            </h2>
            <p>
              {"Business management software and workflow automation for invoicing, inventory, reporting, customer management and operational approvals."}
            </p>
          </div>
          <div id="custom" className="service-card">
            <span className="icon blue">
              <i className="fa-solid fa-code" aria-hidden="true" />
            </span>
            <h2>
              {"Custom Software Development"}
            </h2>
            <p>
              {"Web and mobile application development for businesses that need secure, scalable and maintainable digital systems."}
            </p>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>
            {"Need a service tailored to your workflow?"}
          </h2>
          <p>
            {"Tell us what you want to build and we will recommend a practical path."}
          </p>
          <Link className="btn btn-primary" to="/contact">
            {"Request Consultation"}
          </Link>
        </div>
      </section>
    </>
  );
}
