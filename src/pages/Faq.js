import { Link } from 'react-router';

export default function Faq() {
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
              {"FAQ"}
            </span>
          </div>
          <h1>
            {"Frequently asked questions."}
          </h1>
          <p className="lead">
            {"Answers about wallets, refunds, failed transactions, account security and payment verification."}
          </p>
        </div>
      </header>
      <section className="section bg-light">
        <div className="container">
          <div className="faq-list">
            <div className="faq-item open">
              <button className="faq-question">
                {"How do I fund my wallet?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"You can fund your wallet through supported payment channels such as card, bank transfer or other payment methods made available on the platform."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"What happens if wallet funding is successful but balance is not updated?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Contact support with your payment reference. We will verify the payment status with the provider and update or reverse the transaction as appropriate."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"Are successful digital purchases refundable?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Successful delivered digital purchases are generally non-refundable because airtime, data, utility tokens and subscriptions are consumed or issued instantly."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"Can failed transactions be reversed?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Yes. Failed transactions may qualify for wallet reversal or refund after provider confirmation and internal review."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"How long does refund review take?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Most reviews are completed within 24 to 72 business hours, although provider-side investigations may take longer."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"How do I report a failed airtime or data purchase?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Send the transaction reference, phone number, amount and date to our support team for verification."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"How is payment verification handled?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Payments are verified using transaction references, provider status checks and platform records."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"Do transaction limits apply?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Yes. Limits may apply based on service type, provider rules, risk controls or account verification status."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"How do I keep my account secure?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Use a strong password, keep your login details private, avoid public devices and report suspicious activity immediately."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"Does Wealth Tech operate as a bank?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"No. Wealth Tech is a technology company and does not operate as a bank, investment company, savings platform or money transfer operator."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"What are wallet funds used for?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Wallet funds are used solely for purchasing products and services available on the platform."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"Can I cancel a transaction after submission?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Transactions submitted for instant digital delivery usually cannot be cancelled once processing has started."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"Do you support businesses?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Yes. We support SMEs and enterprises with payment integration, automation, e-commerce and custom software development."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"How can I contact support?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Email support@wealthtech.ng or use the contact form. Support hours are Monday to Saturday, 8:00AM to 8:00PM."}
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                {"Do you protect user data?"}
                <span className="faq-icon">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  {"Yes. We apply privacy controls, access restrictions and security practices described in our Privacy Policy and Security page."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>
            {"Still need help?"}
          </h2>
          <p>
            {"Our support team can review your account or transaction issue."}
          </p>
          <Link className="btn btn-primary" to="/contact">
            {"Contact Support"}
          </Link>
        </div>
      </section>
    </>
  );
}
