import { Link } from 'react-router';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-label">
                <span className="hero-label-dot" />
                {"\n            Trusted Nigerian Technology Company\n          "}
              </div>
              <h1>
                {"Powering "}
                <span className="highlight">
                  {"Digital Finance"}
                </span>
                {" Across Nigeria"}
              </h1>
              <p className="hero-desc">
                {"\n            Wealth Tech delivers enterprise-grade payment processing, VTU services, wallet systems, and custom software solutions that enable seamless, secure digital transactions for businesses and individuals.\n          "}
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  {"Start Today →"}
                </Link>
                <Link to="/services" className="btn btn-secondary btn-lg">
                  {"Explore Services"}
                </Link>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="hero-stat-num">
                    <span data-counter="true" data-counter-target="50" data-counter-suffix="K+">
                      {"50K+"}
                    </span>
                  </div>
                  <div className="hero-stat-label">
                    {"Active Users"}
                  </div>
                </div>
                <div>
                  <div className="hero-stat-num">
                    {"₦"}
                    <span data-counter="true" data-counter-target="2.5" data-counter-suffix="B+">
                      {"2.5B+"}
                    </span>
                  </div>
                  <div className="hero-stat-label">
                    {"Transactions Processed"}
                  </div>
                </div>
                <div>
                  <div className="hero-stat-num">
                    <span data-counter="true" data-counter-target="99.9" data-counter-suffix="%">
                      {"99.9%"}
                    </span>
                  </div>
                  <div className="hero-stat-label">
                    {"Uptime Reliability"}
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card-main" style={{ position: "relative" }}>
                <div className="hero-float-badge hero-float-1">
                  <div className="float-badge-label">
                    {"Today's Transactions"}
                  </div>
                  <div className="float-badge-value green">
                    {"+2,847"}
                  </div>
                </div>
                <div className="payment-card">
                  <div className="payment-card-label">
                    {"Wallet Balance"}
                  </div>
                  <div className="payment-card-amount">
                    {"₦"}
                    <span>
                      {"45,"}
                    </span>
                    {"800.00"}
                  </div>
                  <div className="payment-card-sub">
                    {"Last updated: Just now"}
                  </div>
                </div>
                <div className="hero-tx-list">
                  <div className="hero-tx-item">
                    <div className="hero-tx-icon" style={{ background: "rgba(0,168,107,0.15)" }}>
                      <i className="fa-solid fa-mobile-screen-button" aria-hidden="true" />
                    </div>
                    <div className="hero-tx-info">
                      <div className="hero-tx-name">
                        {"MTN Airtime"}
                      </div>
                      <div className="hero-tx-time">
                        {"2 mins ago"}
                      </div>
                    </div>
                    <div className="hero-tx-amount debit">
                      {"-₦500"}
                    </div>
                  </div>
                  <div className="hero-tx-item">
                    <div className="hero-tx-icon" style={{ background: "rgba(244,180,0,0.15)" }}>
                      <i className="fa-solid fa-bolt" aria-hidden="true" />
                    </div>
                    <div className="hero-tx-info">
                      <div className="hero-tx-name">
                        {"EKEDC Electricity"}
                      </div>
                      <div className="hero-tx-time">
                        {"15 mins ago"}
                      </div>
                    </div>
                    <div className="hero-tx-amount debit">
                      {"-₦5,000"}
                    </div>
                  </div>
                  <div className="hero-tx-item">
                    <div className="hero-tx-icon" style={{ background: "rgba(79,70,229,0.15)" }}>
                      <i className="fa-solid fa-wallet" aria-hidden="true" />
                    </div>
                    <div className="hero-tx-info">
                      <div className="hero-tx-name">
                        {"Wallet Funding"}
                      </div>
                      <div className="hero-tx-time">
                        {"1 hr ago"}
                      </div>
                    </div>
                    <div className="hero-tx-amount credit">
                      {"+₦20,000"}
                    </div>
                  </div>
                  <div className="hero-tx-item">
                    <div className="hero-tx-icon" style={{ background: "rgba(6,182,212,0.15)" }}>
                      <i className="fa-solid fa-wifi" aria-hidden="true" />
                    </div>
                    <div className="hero-tx-info">
                      <div className="hero-tx-name">
                        {"Airtel Data 2GB"}
                      </div>
                      <div className="hero-tx-time">
                        {"3 hrs ago"}
                      </div>
                    </div>
                    <div className="hero-tx-amount debit">
                      {"-₦1,200"}
                    </div>
                  </div>
                </div>
                <div className="hero-float-badge hero-float-2">
                  <div className="float-badge-label">
                    {"Security Status"}
                  </div>
                  <div className="float-badge-value">
                    <i className="fa-solid fa-lock" aria-hidden="true" />
                    {" Encrypted"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-strip bg-white">
        <div className="container">
          <p className="partners-label">
            {"Trusted by businesses across Nigeria"}
          </p>
          <div className="partners-logos">
            <span className="partner-logo">
              <i className="fa-solid fa-building-columns" aria-hidden="true" />
              {" Paystack"}
            </span>
            <span className="partner-logo">
              <i className="fa-solid fa-tower-cell" aria-hidden="true" />
              {" MTN Nigeria"}
            </span>
            <span className="partner-logo">
              <i className="fa-solid fa-signal" aria-hidden="true" />
              {" Airtel"}
            </span>
            <span className="partner-logo">
              <i className="fa-solid fa-mobile-screen" aria-hidden="true" />
              {" Glo"}
            </span>
            <span className="partner-logo">
              <i className="fa-solid fa-bolt" aria-hidden="true" />
              {" EKEDC"}
            </span>
            <span className="partner-logo">
              <i className="fa-solid fa-tv" aria-hidden="true" />
              {" DSTV"}
            </span>
            <span className="partner-logo">
              <i className="fa-solid fa-plug" aria-hidden="true" />
              {" Startimes"}
            </span>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "64px" }}>
            <div className="animate-fade-up">
              <div className="section-label">
                {"Who We Are"}
              </div>
              <h2 className="section-heading">
                {"Building the Digital Financial Infrastructure of Nigeria"}
              </h2>
              <p style={{ marginBottom: "24px" }}>
                {"\n            Wealth Tech is a Nigerian technology company committed to democratising access to digital financial services. We provide reliable, secure, and affordable technology solutions that power payments, VTU top-ups, and business operations for thousands of users.\n          "}
              </p>
              <p style={{ marginBottom: "32px" }}>
                {"\n            From individual wallet top-ups to enterprise payment integrations, our platform is built for scale, speed, and absolute security. We partner with licensed payment providers and adhere to all applicable Nigerian financial regulations.\n          "}
              </p>
              <ul className="check-list">
                <li>
                  {"Licensed technology solutions powered by verified payment infrastructure"}
                </li>
                <li>
                  {"Real-time transaction processing with instant confirmations"}
                </li>
                <li>
                  {"Dedicated customer support Monday-Saturday, 8AM-8PM"}
                </li>
                <li>
                  {"Compliant with CBN guidelines and Nigerian data protection regulations"}
                </li>
              </ul>
              <Link to="/about" className="btn btn-outline-green mt-32">
                {"Learn Our Story"}
              </Link>
            </div>
            <div className="animate-fade-up animate-delay-2">
              <div style={{ background: "linear-gradient(135deg,#f0fdf8,#ecfdf5)", borderRadius: "var(--radius-xl)", padding: "40px", border: "1px solid rgba(0,168,107,0.15)" }}>
                <div className="grid-2 md-2" style={{ gap: "20px" }}>
                  <div style={{ background: "white", borderRadius: "var(--radius)", padding: "24px", boxShadow: "var(--shadow-sm)", textAlign: "center" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "8px" }} />
                    <div style={{ fontWeight: "700", color: "var(--primary)", fontSize: "0.9375rem" }}>
                      {"SSL Secured"}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                      {"256-bit encryption"}
                    </div>
                  </div>
                  <div style={{ background: "white", borderRadius: "var(--radius)", padding: "24px", boxShadow: "var(--shadow-sm)", textAlign: "center" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "8px" }} />
                    <div style={{ fontWeight: "700", color: "var(--primary)", fontSize: "0.9375rem" }}>
                      {"Instant Delivery"}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                      {"Under 3 seconds"}
                    </div>
                  </div>
                  <div style={{ background: "white", borderRadius: "var(--radius)", padding: "24px", boxShadow: "var(--shadow-sm)", textAlign: "center" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "8px" }} />
                    <div style={{ fontWeight: "700", color: "var(--primary)", fontSize: "0.9375rem" }}>
                      {"Fraud Protected"}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                      {"24/7 monitoring"}
                    </div>
                  </div>
                  <div style={{ background: "white", borderRadius: "var(--radius)", padding: "24px", boxShadow: "var(--shadow-sm)", textAlign: "center" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "8px" }} />
                    <div style={{ fontWeight: "700", color: "var(--primary)", fontSize: "0.9375rem" }}>
                      {"Live Support"}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                      {"MonSat support"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container">
          <div className="section-heading-center animate-fade-up">
            <div className="section-label">
              {"What We Do"}
            </div>
            <h2>
              {"Comprehensive Digital Solutions"}
            </h2>
            <p className="section-subtext mt-16">
              {"From consumer VTU services to enterprise payment integrations and custom software development  we build products that work."}
            </p>
          </div>
          <div className="grid-3 mt-48">
            <div className="service-card animate-fade-up animate-delay-1">
              <div className="card-icon green">
                <i className="fa-solid fa-credit-card" aria-hidden="true" />
              </div>
              <h3>
                {"Payment Processing"}
              </h3>
              <p>
                {"Secure online payment integration with support for cards, bank transfers, USSD, and mobile money. Real-time confirmation and automated reconciliation."}
              </p>
              <Link to="/services#payment" className="btn btn-outline-green btn-sm mt-24">
                {"Learn More"}
              </Link>
            </div>
            <div className="service-card animate-fade-up animate-delay-2">
              <div className="card-icon blue">
                <i className="fa-solid fa-mobile-screen-button" aria-hidden="true" />
              </div>
              <h3>
                {"VTU Services"}
              </h3>
              <p>
                {"Purchase airtime and data across all Nigerian networks. Pay electricity bills, cable TV subscriptions, and other utilities in seconds."}
              </p>
              <Link to="/vtu" className="btn btn-outline-green btn-sm mt-24">
                {"Learn More"}
              </Link>
            </div>
            <div className="service-card animate-fade-up animate-delay-3">
              <div className="card-icon gold">
                <i className="fa-solid fa-wallet" aria-hidden="true" />
              </div>
              <h3>
                {"Wallet Systems"}
              </h3>
              <p>
                {"Digital wallet infrastructure with instant funding via Paystack, bank transfer, or USSD. Manage balances, set spend limits, and transact securely."}
              </p>
              <Link to="/services#wallet" className="btn btn-outline-green btn-sm mt-24">
                {"Learn More"}
              </Link>
            </div>
            <div className="service-card animate-fade-up animate-delay-1">
              <div className="card-icon purple">
                <i className="fa-solid fa-cart-shopping" aria-hidden="true" />
              </div>
              <h3>
                {"E-commerce Development"}
              </h3>
              <p>
                {"Custom online stores with integrated payment gateways, product management, order tracking, and delivery logistics for Nigerian businesses."}
              </p>
              <Link to="/services#ecommerce" className="btn btn-outline-green btn-sm mt-24">
                {"Learn More"}
              </Link>
            </div>
            <div className="service-card animate-fade-up animate-delay-2">
              <div className="card-icon cyan">
                <i className="fa-solid fa-gears" aria-hidden="true" />
              </div>
              <h3>
                {"Business Automation"}
              </h3>
              <p>
                {"Automate repetitive workflows, inventory management, invoicing, customer management, and reporting with our custom enterprise software solutions."}
              </p>
              <Link to="/services#automation" className="btn btn-outline-green btn-sm mt-24">
                {"Learn More"}
              </Link>
            </div>
            <div className="service-card animate-fade-up animate-delay-3">
              <div className="card-icon red">
                <i className="fa-solid fa-code" aria-hidden="true" />
              </div>
              <h3>
                {"Custom Software Development"}
              </h3>
              <p>
                {"Tailored web and mobile application development using modern technologies. From concept to deployment and ongoing maintenance."}
              </p>
              <Link to="/services#custom" className="btn btn-outline-green btn-sm mt-24">
                {"Learn More"}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-gradient">
        <div className="container">
          <div className="section-heading-center animate-fade-up" style={{ marginBottom: "56px" }}>
            <div className="section-label" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)" }}>
              {"By The Numbers"}
            </div>
            <h2 style={{ color: "white" }}>
              {"Performance That Speaks for Itself"}
            </h2>
            <p className="section-subtext mt-16" style={{ color: "rgba(255,255,255,0.65)" }}>
              {"Real metrics from our live platform, updated daily."}
            </p>
          </div>
          <div className="grid-4">
            <div className="stat-card animate-fade-up animate-delay-1">
              <div className="stat-number">
                <span data-counter="true" data-counter-target="50" data-counter-suffix="K+" className="accent">
                  {"0"}
                </span>
              </div>
              <div className="stat-label">
                {"Active Users"}
              </div>
            </div>
            <div className="stat-card animate-fade-up animate-delay-2">
              <div className="stat-number">
                <span data-counter="true" data-counter-target="2.5" data-counter-suffix="B+" className="green">
                  {"0"}
                </span>
              </div>
              <div className="stat-label">
                {"Transactions Processed"}
              </div>
            </div>
            <div className="stat-card animate-fade-up animate-delay-3">
              <div className="stat-number">
                <span data-counter="true" data-counter-target="99.9" data-counter-suffix="%" className="accent">
                  {"0"}
                </span>
              </div>
              <div className="stat-label">
                {"Platform Uptime"}
              </div>
            </div>
            <div className="stat-card animate-fade-up animate-delay-4">
              <div className="stat-number">
                <span data-counter="true" data-counter-target="120" data-counter-suffix="+" className="green">
                  {"0"}
                </span>
              </div>
              <div className="stat-label">
                {"Business Clients"}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "64px" }}>
            <div className="animate-fade-up">
              <div className="section-label">
                {"Why Wealth Tech"}
              </div>
              <h2 className="section-heading">
                {"Built for Trust. Designed for Scale."}
              </h2>
              <p style={{ marginBottom: "36px" }}>
                {"We combine deep technical expertise with an uncompromising approach to security and regulatory compliance  giving you a payments partner you can rely on."}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-lock" aria-hidden="true" />
                  </div>
                  <div className="feature-content">
                    <h4>
                      {"Bank-Grade Security"}
                    </h4>
                    <p>
                      {"Every transaction is protected with 256-bit SSL encryption, two-factor authentication, and real-time fraud detection algorithms."}
                    </p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-bolt" aria-hidden="true" />
                  </div>
                  <div className="feature-content">
                    <h4>
                      {"Instant Processing"}
                    </h4>
                    <p>
                      {"Our infrastructure is optimised for speed. Airtime, data, and bill payments are processed in under 3 seconds on average."}
                    </p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-scale-balanced" aria-hidden="true" />
                  </div>
                  <div className="feature-content">
                    <h4>
                      {"Regulatory Compliance"}
                    </h4>
                    <p>
                      {"We operate in full compliance with CBN directives, NDPR data protection regulations, and all applicable Nigerian financial laws."}
                    </p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-headset" aria-hidden="true" />
                  </div>
                  <div className="feature-content">
                    <h4>
                      {"Dedicated Support"}
                    </h4>
                    <p>
                      {"Our customer success team is available Monday to Saturday, 8AM-8PM to resolve queries, disputes, and technical issues promptly."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-up animate-delay-2">
              <div style={{ position: "relative", padding: "8px" }}>
                <div style={{ background: "var(--light-gray)", borderRadius: "var(--radius-xl)", padding: "36px", border: "1px solid var(--border)" }}>
                  <h3 style={{ color: "var(--primary)", marginBottom: "24px", fontSize: "1.125rem" }}>
                    {" Platform Highlights"}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ background: "white", borderRadius: "var(--radius)", padding: "16px 20px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        {"Transaction Success Rate"}
                      </span>
                      <span style={{ fontWeight: "700", color: "var(--secondary)" }}>
                        {"99.2%"}
                      </span>
                    </div>
                    <div style={{ background: "white", borderRadius: "var(--radius)", padding: "16px 20px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        {"Avg. Processing Time"}
                      </span>
                      <span style={{ fontWeight: "700", color: "var(--secondary)" }}>
                        {"< 3 seconds"}
                      </span>
                    </div>
                    <div style={{ background: "white", borderRadius: "var(--radius)", padding: "16px 20px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        {"Networks Supported"}
                      </span>
                      <span style={{ fontWeight: "700", color: "var(--secondary)" }}>
                        {"MTN, Airtel, Glo, 9mobile"}
                      </span>
                    </div>
                    <div style={{ background: "white", borderRadius: "var(--radius)", padding: "16px 20px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        {"Utility Partners"}
                      </span>
                      <span style={{ fontWeight: "700", color: "var(--secondary)" }}>
                        {"EKEDC, IKEJA, PHCN, AEDC"}
                      </span>
                    </div>
                    <div style={{ background: "white", borderRadius: "var(--radius)", padding: "16px 20px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        {"Payment Provider"}
                      </span>
                      <span style={{ fontWeight: "700", color: "var(--secondary)" }}>
                        {"Paystack Integrated"}
                      </span>
                    </div>
                    <div style={{ background: "white", borderRadius: "var(--radius)", padding: "16px 20px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        {"Data Encryption"}
                      </span>
                      <span style={{ fontWeight: "700", color: "var(--secondary)" }}>
                        {"256-bit TLS"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container">
          <div className="section-heading-center animate-fade-up">
            <div className="section-label">
              {"Testimonials"}
            </div>
            <h2>
              {"What Our Customers Say"}
            </h2>
            <p className="section-subtext mt-16">
              {"Thousands of individuals and businesses trust Wealth Tech for their daily payment needs."}
            </p>
          </div>
          <div className="grid-3 mt-48">
            <div className="testimonial-card animate-fade-up animate-delay-1">
              <div className="stars" />
              <div className="testimonial-quote">
                {"“"}
              </div>
              <p className="testimonial-text">
                {"Wealth Tech's VTU platform has transformed how I manage utility payments for my business. Airtime, data, and electricity  all in one place, instantly processed. Absolutely reliable."}
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: "linear-gradient(135deg,#00A86B,#0B1F4D)" }}>
                  {"AO"}
                </div>
                <div>
                  <div className="testimonial-name">
                    {"Adewale Okonkwo"}
                  </div>
                  <div className="testimonial-role">
                    {"SME Owner, Lagos"}
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card animate-fade-up animate-delay-2">
              <div className="stars" />
              <div className="testimonial-quote">
                {"“"}
              </div>
              <p className="testimonial-text">
                {"The custom e-commerce platform Wealth Tech built for us has increased our online sales by 40% in just three months. Professional, secure, and beautifully designed. Highly recommend."}
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: "linear-gradient(135deg,#F4B400,#0B1F4D)" }}>
                  {"CH"}
                </div>
                <div>
                  <div className="testimonial-name">
                    {"Chinyere Hadassah"}
                  </div>
                  <div className="testimonial-role">
                    {"Fashion Retailer, Abuja"}
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card animate-fade-up animate-delay-3">
              <div className="stars" />
              <div className="testimonial-quote">
                {"“"}
              </div>
              <p className="testimonial-text">
                {"Integrating Wealth Tech's payment processing API into our platform was seamless. Their developer support is exceptional, and the transaction reliability is the best I've used in Nigeria."}
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: "linear-gradient(135deg,#4a90e2,#00A86B)" }}>
                  {"EI"}
                </div>
                <div>
                  <div className="testimonial-name">
                    {"Emeka Ihejirika"}
                  </div>
                  <div className="testimonial-role">
                    {"CTO, TechStart Nigeria"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm bg-white">
        <div className="container">
          <div className="compliance-notice animate-fade-up">
            <h3>
              {"Regulatory & Compliance Notice"}
            </h3>
            <p>
              {"\n          Wealth Tech provides technology solutions that facilitate digital payments and virtual top-up services. We do not operate as a bank, investment company, savings platform, or money transfer operator. Funds deposited into user wallets are used solely for purchasing products and services available on our platform. Our payment infrastructure is powered by licensed payment service providers operating under the supervision of the Central Bank of Nigeria (CBN). All user data is handled in accordance with the Nigeria Data Protection Regulation (NDPR).\n        "}
            </p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-fade-up">
            <div className="section-label gold">
              {"Get Started Today"}
            </div>
            <h2>
              {"Ready to Transform Your Digital Payments?"}
            </h2>
            <p>
              {"Join thousands of businesses and individuals already using Wealth Tech to process payments, purchase airtime, and manage digital transactions securely."}
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                {"Contact Us"}
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                {"View All Services"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
