import { Link } from 'react-router';

export default function PrivacyPolicy() {
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
              {"Privacy Policy"}
            </span>
          </div>
          <h1>
            {"Privacy Policy"}
          </h1>
          <p className="lead">
            {"Last updated: June 4, 2026"}
          </p>
        </div>
      </header>
      <section className="section bg-light">
        <div className="container legal-card">
          <h2>
            {"1. Introduction"}
          </h2>
          <p>
            {"This Privacy Policy explains how Wealth Tech collects, uses, stores and protects information when users access our website, digital payment technology, VTU services, wallet features and support channels."}
          </p>
          <h2>
            {"2. Data Collection"}
          </h2>
          <p>
            {"We may collect name, email address, phone number, business details, account information, transaction references, payment status, device information, IP address, support messages and records needed to provide services."}
          </p>
          <h2>
            {"3. Data Usage"}
          </h2>
          <p>
            {"We use data to create and manage accounts, process wallet funding, verify payments, deliver digital services, monitor transactions, provide customer support, prevent fraud, improve products and meet legal or regulatory obligations."}
          </p>
          <h2>
            {"4. Cookies"}
          </h2>
          <p>
            {"Our website may use cookies or similar technologies to improve browsing experience, remember preferences, measure traffic and support security. Users may disable cookies in their browser, but some features may not work correctly."}
          </p>
          <h2>
            {"5. Security"}
          </h2>
          <p>
            {"We apply reasonable administrative, technical and operational safeguards including encryption, access controls, monitoring and secure payment provider integrations. No internet-based service can guarantee absolute security."}
          </p>
          <h2>
            {"6. Third-Party Services"}
          </h2>
          <p>
            {"We may work with payment processors, telecom providers, utility providers, hosting services, analytics tools and support platforms. These parties process information only as needed for service delivery, verification, compliance or support."}
          </p>
          <h2>
            {"7. User Rights"}
          </h2>
          <p>
            {"Users may request access, correction, deletion or restriction of personal information where permitted by law. Some transaction records may be retained for compliance, fraud prevention, audit and dispute resolution."}
          </p>
          <h2>
            {"8. Contact"}
          </h2>
          <p>
            {"Privacy requests should be sent to support@wealthtech.ng. We will review requests within a reasonable period and may request verification before acting on account-related changes."}
          </p>
        </div>
      </section>
    </>
  );
}
