import { Link } from 'react-router';

export default function Terms() {
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
              {"Terms"}
            </span>
          </div>
          <h1>
            {"Terms and Conditions"}
          </h1>
          <p className="lead">
            {"Last updated: June 4, 2026"}
          </p>
        </div>
      </header>
      <section className="section bg-light">
        <div className="container legal-card">
          <h2>
            {"1. Acceptance of Terms"}
          </h2>
          <p>
            {"By using Wealth Tech websites, platforms or services, you agree to these Terms and Conditions. If you do not agree, you should not use our services."}
          </p>
          <h2>
            {"2. Service Usage"}
          </h2>
          <p>
            {"Wealth Tech provides technology solutions for digital payments, VTU purchases, wallet-based service purchases, e-commerce, business automation and custom software. We do not operate as a bank, investment company, savings platform or money transfer operator."}
          </p>
          <h2>
            {"3. User Responsibilities"}
          </h2>
          <ul>
            <li>
              {"Provide accurate account and transaction information."}
            </li>
            <li>
              {"Keep login credentials confidential."}
            </li>
            <li>
              {"Use services only for lawful purposes."}
            </li>
            <li>
              {"Review transaction details before authorising purchases."}
            </li>
          </ul>
          <h2>
            {"4. Account Management"}
          </h2>
          <p>
            {"Users are responsible for activity carried out through their accounts. We may suspend or restrict access where we suspect fraud, misuse, security risk, regulatory concern or breach of these terms."}
          </p>
          <h2>
            {"5. Transaction Processing"}
          </h2>
          <p>
            {"Transactions may be processed through third-party payment, telecom, utility or service providers. Processing times and final status may depend on provider systems. Users should keep transaction references for support and dispute review."}
          </p>
          <h2>
            {"6. Prohibited Activities"}
          </h2>
          <ul>
            <li>
              {"Fraud, impersonation, money laundering or illegal activity."}
            </li>
            <li>
              {"Attempts to bypass security or access restricted systems."}
            </li>
            <li>
              {"Use of stolen cards, unauthorised accounts or false information."}
            </li>
            <li>
              {"Resale or misuse of services contrary to applicable laws or provider rules."}
            </li>
          </ul>
          <h2>
            {"7. Liability Limitations"}
          </h2>
          <p>
            {"Wealth Tech will use reasonable efforts to provide reliable services, but we are not liable for losses caused by user error, third-party provider downtime, network failures, incorrect recipient details or events outside our reasonable control."}
          </p>
          <h2>
            {"8. Dispute Resolution"}
          </h2>
          <p>
            {"Users should first contact support with relevant transaction references. We will investigate in good faith and may request additional information. Unresolved disputes may be handled under applicable Nigerian law and appropriate dispute resolution processes."}
          </p>
          <h2>
            {"9. Changes to Terms"}
          </h2>
          <p>
            {"We may update these terms from time to time. Continued use of the services after updates means you accept the revised terms."}
          </p>
        </div>
      </section>
    </>
  );
}
