import { useState } from 'react';
import { Link } from 'react-router';

const faqs = [
  {
    question: 'How do I fund my wallet?',
    answer:
      'You can fund your wallet through supported payment channels such as card, bank transfer or other payment methods made available on the platform.',
  },
  {
    question: 'What happens if wallet funding is successful but balance is not updated?',
    answer:
      'Contact support with your payment reference. We will verify the payment status with the provider and update or reverse the transaction as appropriate.',
  },
  {
    question: 'Are successful digital purchases refundable?',
    answer:
      'Successful delivered digital purchases are generally non-refundable because airtime, data, utility tokens and subscriptions are consumed or issued instantly.',
  },
  {
    question: 'Can failed transactions be reversed?',
    answer:
      'Yes. Failed transactions may qualify for wallet reversal or refund after provider confirmation and internal review.',
  },
  {
    question: 'How long does refund review take?',
    answer:
      'Most reviews are completed within 24 to 72 business hours, although provider-side investigations may take longer.',
  },
  {
    question: 'How do I report a failed airtime or data purchase?',
    answer:
      'Send the transaction reference, phone number, amount and date to our support team for verification.',
  },
  {
    question: 'How is payment verification handled?',
    answer: 'Payments are verified using transaction references, provider status checks and platform records.',
  },
  {
    question: 'Do transaction limits apply?',
    answer:
      'Yes. Limits may apply based on service type, provider rules, risk controls or account verification status.',
  },
  {
    question: 'How do I keep my account secure?',
    answer:
      'Use a strong password, keep your login details private, avoid public devices and report suspicious activity immediately.',
  },
  {
    question: 'Does Wealth Tech operate as a bank?',
    answer:
      'No. Wealth Tech is a technology company and does not operate as a bank, investment company, savings platform or money transfer operator.',
  },
  {
    question: 'What are wallet funds used for?',
    answer: 'Wallet funds are used solely for purchasing products and services available on the platform.',
  },
  {
    question: 'Can I cancel a transaction after submission?',
    answer:
      'Transactions submitted for instant digital delivery usually cannot be cancelled once processing has started.',
  },
  {
    question: 'Do you support businesses?',
    answer:
      'Yes. We support SMEs and enterprises with payment integration, automation, e-commerce and custom software development.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'Email support@wealthtech.ng or use the contact form. Support hours are Monday to Saturday, 8:00AM to 8:00PM.',
  },
  {
    question: 'Do you protect user data?',
    answer:
      'Yes. We apply privacy controls, access restrictions and security practices described in our Privacy Policy and Security page.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            {' / '}
            <span>FAQ</span>
          </div>
          <h1>Frequently asked questions.</h1>
          <p className="lead">
            Answers about wallets, refunds, failed transactions, account security and payment verification.
          </p>
        </div>
      </header>
      <section className="section bg-light">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      <i className="fa-solid fa-plus" aria-hidden="true" />
                    </span>
                  </button>
                  <div className="faq-answer" id={answerId}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>Still need help?</h2>
          <p>Our support team can review your account or transaction issue.</p>
          <Link className="btn btn-primary" to="/contact">
            Contact Support
          </Link>
        </div>
      </section>
    </>
  );
}
