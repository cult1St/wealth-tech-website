import { Link } from 'react-router';

export default function Vtu() {
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
              {"VTU Services"}
            </span>
          </div>
          <h1>
            {"Virtual top-up services for everyday digital needs."}
          </h1>
          <p className="lead">
            {"Airtime, data, electricity, cable TV, wallet funding and transaction monitoring in one secure platform."}
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="center">
            <span className="eyebrow">
              {"Service highlights"}
            </span>
            <h2>
              {"Fast, transparent and support-ready VTU transactions."}
            </h2>
            <p className="lead">
              {"Each transaction is recorded with references that support verification, review and customer assistance."}
            </p>
          </div>
          <div className="grid-3 mt-40">
            <div className="card">
              <span className="icon">
                <i className="fa-solid fa-phone-volume" aria-hidden="true" />
              </span>
              <h3>
                {"Airtime purchases"}
              </h3>
              <p>
                {"Buy airtime for MTN, Airtel, Glo and 9mobile through secure wallet or payment channels."}
              </p>
            </div>
            <div className="card">
              <span className="icon gold">
                <i className="fa-solid fa-wifi" aria-hidden="true" />
              </span>
              <h3>
                {"Data subscriptions"}
              </h3>
              <p>
                {"Purchase data bundles across supported Nigerian mobile networks with delivery status tracking."}
              </p>
            </div>
            <div className="card">
              <span className="icon blue">
                <i className="fa-solid fa-bolt" aria-hidden="true" />
              </span>
              <h3>
                {"Electricity payments"}
              </h3>
              <p>
                {"Pay supported electricity distributors and receive token or confirmation details."}
              </p>
            </div>
            <div className="card">
              <span className="icon">
                <i className="fa-solid fa-tv" aria-hidden="true" />
              </span>
              <h3>
                {"Cable TV subscriptions"}
              </h3>
              <p>
                {"Renew cable TV packages and keep payment records for customer support review."}
              </p>
            </div>
            <div className="card">
              <span className="icon gold">
                <i className="fa-solid fa-wallet" aria-hidden="true" />
              </span>
              <h3>
                {"Wallet funding"}
              </h3>
              <p>
                {"Fund wallets using integrated payment providers before purchasing available services."}
              </p>
            </div>
            <div className="card">
              <span className="icon blue">
                <i className="fa-solid fa-chart-line" aria-hidden="true" />
              </span>
              <h3>
                {"Transaction monitoring"}
              </h3>
              <p>
                {"Monitor pending, successful and failed transactions with clear reference records."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">
              {"Secure payment processing"}
            </span>
            <h2>
              {"Built for verification and issue resolution."}
            </h2>
            <p>
              {"Wealth Tech keeps transaction references, delivery status and customer details necessary to investigate failed or delayed VTU purchases. Failed transactions may qualify for reversal after provider confirmation."}
            </p>
          </div>
          <div className="card">
            <h3>
              {"What customers can expect"}
            </h3>
            <ul className="check-list">
              <li>
                {"Clear transaction status for purchases."}
              </li>
              <li>
                {"Support review for failed or delayed delivery."}
              </li>
              <li>
                {"Wallet debits tied to available products and services."}
              </li>
              <li>
                {"Secure payment processing through verified channels."}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>
            {"Need VTU services for your customers?"}
          </h2>
          <p>
            {"We can help you launch reliable top-up and bill payment workflows."}
          </p>
          <Link className="btn btn-primary" to="/contact">
            {"Discuss VTU Setup"}
          </Link>
        </div>
      </section>
    </>
  );
}
