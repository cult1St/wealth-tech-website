import { Link } from 'react-router';

export default function RefundPolicy() {
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
              {"Refund Policy"}
            </span>
          </div>
          <h1>
            {"Refund Policy"}
          </h1>
          <p className="lead">
            {"Last updated: June 4, 2026"}
          </p>
        </div>
      </header>
      <section className="section bg-light">
        <div className="container legal-card">
          <h2>
            {"1. Overview"}
          </h2>
          <p>
            {"This Refund Policy explains how Wealth Tech reviews refund or reversal requests for wallet funding, VTU purchases, utility payments, cable subscriptions and other digital services."}
          </p>
          <h2>
            {"2. Successful Digital Purchases"}
          </h2>
          <p>
            {"Successful digital purchases are generally non-refundable once delivered, issued, activated or consumed. This includes airtime, data subscriptions, electricity tokens, cable TV subscriptions and similar instant digital services."}
          </p>
          <h2>
            {"3. Failed Transactions"}
          </h2>
          <p>
            {"Failed transactions may qualify for reversal or refund where payment was deducted but the requested product or service was not delivered. Eligibility depends on platform logs, provider confirmation and payment status."}
          </p>
          <h2>
            {"4. Refund Review Procedures"}
          </h2>
          <ol>
            <li>
              {"Customer contacts support with transaction reference, amount, service type and date."}
            </li>
            <li>
              {"Wealth Tech reviews internal records and provider status."}
            </li>
            <li>
              {"If failure is confirmed, we process wallet reversal or refund through the applicable channel."}
            </li>
            <li>
              {"If provider records show successful delivery, the request may be declined with available evidence."}
            </li>
          </ol>
          <h2>
            {"5. Resolution Timelines"}
          </h2>
          <p>
            {"Most refund reviews are completed within 24 to 72 business hours. Some cases involving banks, payment providers, telecom operators or utility providers may require additional time."}
          </p>
          <h2>
            {"6. Customer Support Process"}
          </h2>
          <p>
            {"Refund requests should be sent to support@wealthtech.ng or submitted through the contact page. Customers should include accurate transaction details to prevent delays."}
          </p>
          <h2>
            {"7. Incorrect Details"}
          </h2>
          <p>
            {"Wealth Tech is not responsible for losses caused by incorrect phone numbers, meter numbers, smart card numbers or account details entered by the customer."}
          </p>
          <h2>
            {"8. Abuse and Fraud Prevention"}
          </h2>
          <p>
            {"We may reject refund requests, suspend accounts or escalate issues where we suspect fraud, abuse, false claims, chargeback misuse or violation of our Terms and Conditions."}
          </p>
        </div>
      </section>
    </>
  );
}
