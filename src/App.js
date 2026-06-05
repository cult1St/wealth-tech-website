import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router';
import './App.css';
import {
  About,
  Contact,
  Faq,
  Home,
  PrivacyPolicy,
  RefundPolicy,
  Security,
  Services,
  Terms,
  Vtu,
} from './pages';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'VTU Platform', path: '/vtu' },
  { label: 'Security', path: '/security' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms', path: '/terms' },
  { label: 'Refund Policy', path: '/refund-policy' },
];

const siteUrl = 'https://wealthtech.ng';

const routeMeta = {
  '/': {
    title: "Wealth Tech - Nigeria's Leading Fintech and Payment Solutions Company",
    description:
      'Wealth Tech provides secure digital payments, VTU services, wallet systems, e-commerce development, and custom software solutions for businesses across Nigeria.',
    keywords:
      'Wealth Tech, fintech Nigeria, digital payments Nigeria, VTU services, wallet funding, payment gateway, airtime purchase, data subscription',
  },
  '/about': {
    title: 'About Wealth Tech - Digital Finance and Software Company in Nigeria',
    description:
      'Learn about Wealth Tech, a Nigerian technology company building secure payment, VTU, wallet, e-commerce, and business automation solutions.',
    keywords: 'about Wealth Tech, Nigerian fintech company, payment technology Nigeria, software company Lagos',
  },
  '/services': {
    title: 'Wealth Tech Services - Fintech, VTU, Payments and Custom Software',
    description:
      'Explore Wealth Tech services including payment processing, VTU platforms, wallet systems, e-commerce development, automation, and custom software.',
    keywords: 'fintech services Nigeria, payment processing, VTU platform, e-commerce development, business automation',
  },
  '/vtu': {
    title: 'VTU Services Nigeria - Airtime, Data, Electricity and Cable Payments',
    description:
      'Use Wealth Tech for reliable VTU services including airtime purchase, data subscriptions, electricity payments, cable TV renewals, and wallet funding.',
    keywords: 'VTU services Nigeria, buy airtime, data subscription, electricity payment, cable TV payment, wallet funding',
  },
  '/security': {
    title: 'Wealth Tech Security - Secure Digital Transactions and Data Protection',
    description:
      'Review Wealth Tech security practices for encrypted payment workflows, data protection, transaction monitoring, and fraud prevention.',
    keywords: 'payment security Nigeria, fintech security, data protection, secure wallet, transaction monitoring',
  },
  '/faq': {
    title: 'Wealth Tech FAQ - Wallet Funding, Refunds and Transaction Support',
    description:
      'Find answers about Wealth Tech wallet funding, failed transactions, refund reviews, VTU purchases, account security, and payment verification.',
    keywords: 'Wealth Tech FAQ, wallet funding help, failed transaction refund, VTU support, payment verification',
  },
  '/contact': {
    title: 'Contact Wealth Tech - Payment, VTU and Software Support',
    description:
      'Contact Wealth Tech for fintech platforms, VTU services, payment integration, custom software, e-commerce development, and transaction support.',
    keywords: 'contact Wealth Tech, fintech support Nigeria, VTU support, payment integration Lagos, software development contact',
  },
  '/privacy-policy': {
    title: 'Wealth Tech Privacy Policy',
    description:
      'Read the Wealth Tech Privacy Policy covering data collection, usage, cookies, security, third-party services, and user rights.',
    keywords: 'Wealth Tech privacy policy, data protection Nigeria, fintech privacy, NDPR',
  },
  '/terms': {
    title: 'Wealth Tech Terms and Conditions',
    description:
      'Review Wealth Tech terms for service usage, user responsibilities, account management, transaction processing, and dispute resolution.',
    keywords: 'Wealth Tech terms, fintech terms Nigeria, VTU terms, payment service terms',
  },
  '/refund-policy': {
    title: 'Wealth Tech Refund Policy',
    description:
      'Read the Wealth Tech refund policy for wallet funding, VTU purchases, failed transactions, utility payments, and refund review timelines.',
    keywords: 'Wealth Tech refund policy, failed transaction refund, VTU refund, wallet reversal, payment dispute',
  },
};

function setMeta(selector, attribute, value) {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    if (selector.includes('name="')) {
      element.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
    }
    if (selector.includes('property="')) {
      element.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
    }
    if (selector.startsWith('link')) {
      element.setAttribute('rel', selector.match(/rel="([^"]+)"/)[1]);
    }
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function Preloader() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setIsHidden(true), 900);
    const removeTimer = window.setTimeout(() => setIsMounted(false), 1400);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`preloader ${isHidden ? 'hidden' : ''}`}>
      <div className="preloader-logo">
        Wealth<span style={{ color: 'var(--accent)' }}>Tech</span>
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  );
}

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    updateScroll();
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const navClass = [
    'navbar',
    isHome ? 'transparent' : 'light',
    isHome && isScrolled ? 'scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;

  return (
    <nav className={navClass}>
      <div className="container">
        <div className="nav-inner">
          <Link className="logo" to="/">
            <span className={isHome ? 'logo-icon' : 'logo-mark'}>WT</span>
            <span className="logo-text">
              Wealth<span className="logo-dot">Tech</span>
            </span>
          </Link>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink className={linkClass} to={item.path}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link className="btn btn-primary btn-sm" to="/contact">
              Get Started
            </Link>
            <button
              className={`hamburger ${isMenuOpen ? 'open' : ''}`}
              type="button"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink className={linkClass} to={item.path}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link className="btn btn-primary" to="/contact">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link className="logo" to="/">
                <span className="logo-mark">WT</span>
                <span className="logo-text">
                  Wealth<span className="logo-dot">Tech</span>
                </span>
              </Link>
              <p>
                Nigeria&apos;s trusted technology company for digital payments, VTU services,
                wallet systems, and custom software development.
              </p>
              <div className="footer-social">
                <button className="social-link" type="button" aria-label="X / Twitter">
                  <i className="fa-brands fa-x-twitter" aria-hidden="true" />
                </button>
                <button className="social-link" type="button" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                </button>
                <button className="social-link" type="button" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" aria-hidden="true" />
                </button>
                <button className="social-link" type="button" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <div className="footer-links">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <div className="footer-links">
                {legalLinks.map((item) => (
                  <Link key={item.path} to={item.path}>
                    {item.label}
                  </Link>
                ))}
                <Link to="/security">Security Policy</Link>
              </div>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                </span>
                <a href="mailto:momoduwealth2@gmail.com">momoduwealth2@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                </span>
                <a href="tel:+2349078177518">+234 907 817 7518</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                </span>
                <span>Ikotun, Lagos, Nigeria</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <i className="fa-solid fa-clock" aria-hidden="true" />
                </span>
                <span>Mon-Sat: 8:00AM - 8:00PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copy">&copy; {new Date().getFullYear()} Wealth Tech. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              {legalLinks.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function usePageEnhancements() {
  const location = useLocation();

  useEffect(() => {
    const meta = routeMeta[location.pathname] || routeMeta['/'];
    const canonical = `${siteUrl}${location.pathname === '/' ? '/' : location.pathname}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[name="keywords"]', 'content', meta.keywords);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
    setMeta('link[rel="canonical"]', 'href', canonical);
  }, [location.pathname]);

  useEffect(() => {
    const scrollTimer = window.setTimeout(() => {
      if (location.hash) {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0);

    return () => window.clearTimeout(scrollTimer);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.animate-fade-up');
    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('in-view');
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.12 }
          )
        : null;

    revealItems.forEach((item) => {
      if (observer) observer.observe(item);
      else item.classList.add('in-view');
    });

    const revealFallback = window.setTimeout(() => {
      revealItems.forEach((item) => item.classList.add('in-view'));
    }, 250);

    const timers = [...document.querySelectorAll('[data-counter="true"]')].map((counter) => {
      const target = Number(counter.dataset.counterTarget);
      const suffix = counter.dataset.counterSuffix || '';
      let current = 0;
      const step = target / 80;

      return window.setInterval(() => {
        current += step;
        if (current >= target) current = target;
        counter.textContent = `${Number.isInteger(target) ? Math.round(current) : current.toFixed(1)}${suffix}`;
      }, 24);
    });

    return () => {
      if (observer) observer.disconnect();
      window.clearTimeout(revealFallback);
      timers.forEach((timer) => window.clearInterval(timer));
    };
  }, [location.pathname]);
}

function Layout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  usePageEnhancements();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick(event) {
    const tabButton = event.target.closest('[data-tab]');
    if (tabButton) {
      const tab = tabButton.dataset.tab;
      document.querySelectorAll('[data-tab]').forEach((button) => button.classList.remove('active'));
      document.querySelectorAll('[data-panel]').forEach((panel) => panel.classList.remove('active'));
      tabButton.classList.add('active');
      document.querySelector(`[data-panel="${tab}"]`)?.classList.add('active');
    }
  }

  async function handleSubmit(event) {
    if (event.target.id !== 'contactForm') return;

    event.preventDefault();
    const form = event.target;
    const message = form.querySelector('.form-message');
    const submit = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    submit.disabled = true;
    submit.textContent = 'Sending...';

    if (message) {
      message.textContent = '';
      message.className = 'form-message';
    }

    try {
      const response = await fetch('https://momoduwealth.free.nf/portfolio-script/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.error || 'Unable to submit your message. Please try again.');
      }

      form.reset();
      if (message) {
        message.textContent = result.message || 'Contact submitted successfully.';
        message.className = 'form-message success';
      }
    } catch (error) {
      if (message) {
        message.textContent = error.message || 'Unable to submit your message. Please try again.';
        message.className = 'form-message error';
      }
    } finally {
      submit.disabled = false;
      submit.textContent = 'Send Message';
    }
  }

  return (
    <>
      <Preloader />
      <Header />
      <main onClick={handleClick} onSubmit={handleSubmit}>
        <Outlet />
      </main>
      <Footer />
      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fa-solid fa-arrow-up" aria-hidden="true" />
      </button>
    </>
  );
}

function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>Page not found</h1>
        <p className="lead">The page you are looking for is not available.</p>
        <Link className="btn btn-primary mt-24" to="/">
          Back Home
        </Link>
      </div>
    </section>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="vtu" element={<Vtu />} />
        <Route path="security" element={<Security />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
