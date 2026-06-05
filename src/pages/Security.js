import { Link } from 'react-router';

export default function Security() {
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
              {"Security"}
            </span>
          </div>
          <h1>
            {"Security practices for trusted digital transactions."}
          </h1>
          <p className="lead">
            {"We protect customer data, payment workflows and service delivery records through layered controls."}
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <span className="icon">
              <i className="fa-solid fa-lock" aria-hidden="true" />
            </span>
            <h3>
              {"Data encryption"}
            </h3>
            <p>
              {"Sensitive data is transmitted over encrypted channels and protected with appropriate access controls."}
            </p>
          </div>
          <div className="card">
            <span className="icon gold">
              <i className="fa-solid fa-money-check-dollar" aria-hidden="true" />
            </span>
            <h3>
              {"Secure transactions"}
            </h3>
            <p>
              {"Payment workflows use verified providers, transaction references and status checks."}
            </p>
          </div>
          <div className="card">
            <span className="icon blue">
              <i className="fa-solid fa-user-shield" aria-hidden="true" />
            </span>
            <h3>
              {"Fraud prevention"}
            </h3>
            <p>
              {"Suspicious activity may be reviewed, restricted or escalated to protect users and partners."}
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <i className="fa-solid fa-user-lock" aria-hidden="true" />
            </span>
            <h3>
              {"User privacy protection"}
            </h3>
            <p>
              {"We collect only necessary data and use it for service delivery, support and compliance purposes."}
            </p>
          </div>
          <div className="card">
            <span className="icon gold">
              <i className="fa-solid fa-desktop" aria-hidden="true" />
            </span>
            <h3>
              {"System monitoring"}
            </h3>
            <p>
              {"Platform activity is monitored to identify downtime, failed transactions and unusual patterns."}
            </p>
          </div>
          <div className="card">
            <span className="icon blue">
              <i className="fa-solid fa-clipboard-check" aria-hidden="true" />
            </span>
            <h3>
              {"Best practices"}
            </h3>
            <p>
              {"We encourage strong passwords, careful device usage and prompt reporting of suspicious activity."}
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">
              {"Operational controls"}
            </span>
            <h2>
              {"Security is part of the service design."}
            </h2>
            <p>
              {"Wealth Tech uses practical controls such as role-based access, transaction logs, payment verification, support documentation and periodic review of operational procedures."}
            </p>
          </div>
          <div className="card">
            <h3>
              {"Customer protection tips"}
            </h3>
            <ul className="check-list">
              <li>
                {"Never share passwords or one-time codes."}
              </li>
              <li>
                {"Confirm website addresses before entering details."}
              </li>
              <li>
                {"Report unknown wallet debits immediately."}
              </li>
              <li>
                {"Keep payment receipts and transaction references."}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>
            {"Have a security concern?"}
          </h2>
          <p>
            {"Contact our support team for prompt review."}
          </p>
          <Link className="btn btn-primary" to="/contact">
            {"Report an Issue"}
          </Link>
        </div>
      </section>
    </>
  );
}
