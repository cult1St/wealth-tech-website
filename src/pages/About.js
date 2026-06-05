import { Link } from 'react-router';

export default function About() {
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
              {"About Us"}
            </span>
          </div>
          <h1>
            {"About Wealth Tech"}
          </h1>
          <p className="lead">
            {"We are a Nigerian technology company focused on secure digital payment, VTU and business software infrastructure."}
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">
              {"Company story"}
            </span>
            <h2>
              {"Creating useful technology for daily commerce."}
            </h2>
            <p>
              {"Wealth Tech was created to solve practical digital transaction problems for individuals, SMEs and growing enterprises. Our work covers payment workflows, wallet records, virtual top-up delivery, e-commerce operations and custom business systems."}
            </p>
            <p className="mt-16">
              {"We believe technology companies earn trust through transparent processes, accurate records, responsive support and secure infrastructure."}
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <strong>
                {"Problem"}
              </strong>
              <p>
                {"Businesses need reliable payment and service delivery tools."}
              </p>
            </div>
            <div className="timeline-item">
              <strong>
                {"Solution"}
              </strong>
              <p>
                {"We build platforms that make payments, wallet funding and VTU delivery easier to manage."}
              </p>
            </div>
            <div className="timeline-item">
              <strong>
                {"Commitment"}
              </strong>
              <p>
                {"We keep security, documentation and customer support central to every product."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container grid-2">
          <div className="card">
            <span className="eyebrow">
              {"Mission"}
            </span>
            <h2>
              {"To simplify access to secure digital services."}
            </h2>
            <p>
              {"Our mission is to help customers and businesses make payments, purchase digital services and automate operations through dependable technology."}
            </p>
          </div>
          <div className="card">
            <span className="eyebrow">
              {"Vision"}
            </span>
            <h2>
              {"To become a trusted Nigerian digital infrastructure partner."}
            </h2>
            <p>
              {"Our vision is to support modern commerce across Nigeria with platforms that are secure, accessible and professionally operated."}
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="center">
            <span className="eyebrow">
              {"Core values"}
            </span>
            <h2>
              {"The principles behind our work."}
            </h2>
          </div>
          <div className="grid-4 mt-40">
            <div className="value-card">
              <span className="icon">
                <i className="fa-solid fa-handshake" aria-hidden="true" />
              </span>
              <h3>
                {"Trust"}
              </h3>
              <p>
                {"We communicate clearly and keep accurate records."}
              </p>
            </div>
            <div className="value-card">
              <span className="icon gold">
                <i className="fa-solid fa-shield-halved" aria-hidden="true" />
              </span>
              <h3>
                {"Security"}
              </h3>
              <p>
                {"We protect customer data and transaction workflows."}
              </p>
            </div>
            <div className="value-card">
              <span className="icon blue">
                <i className="fa-solid fa-award" aria-hidden="true" />
              </span>
              <h3>
                {"Excellence"}
              </h3>
              <p>
                {"We build with discipline, testing and support in mind."}
              </p>
            </div>
            <div className="value-card">
              <span className="icon">
                <i className="fa-solid fa-lightbulb" aria-hidden="true" />
              </span>
              <h3>
                {"Innovation"}
              </h3>
              <p>
                {"We improve processes with practical technology."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">
              {"Business objectives"}
            </span>
            <h2>
              {"What we are working to achieve."}
            </h2>
            <ul className="check-list">
              <li>
                {"Provide reliable digital payments and VTU services."}
              </li>
              <li>
                {"Support businesses with secure software and automation."}
              </li>
              <li>
                {"Maintain clear transaction records and customer support processes."}
              </li>
              <li>
                {"Partner responsibly with payment providers and service vendors."}
              </li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">
              {"Why we exist"}
            </span>
            <h2>
              {"To reduce friction in everyday digital transactions."}
            </h2>
            <p>
              {"Many customers need a dependable place to fund wallets, buy airtime, subscribe for data, pay utilities and resolve failed transactions. Wealth Tech exists to make these workflows transparent, secure and easy to support."}
            </p>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>
            {"Work with a payment-focused technology team."}
          </h2>
          <p>
            {"Speak with us about your business requirements."}
          </p>
          <Link className="btn btn-primary" to="/contact">
            {"Contact Wealth Tech"}
          </Link>
        </div>
      </section>
    </>
  );
}
