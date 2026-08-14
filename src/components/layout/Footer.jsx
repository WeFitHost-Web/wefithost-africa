import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/long_logo.png";
import { useCurrency, currencies } from "../../contexts/CurrencyContext";
import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import '../../styles/Footer.css'

const Footer = () => {
  const { currency, setCurrency } = useCurrency();
  const [activeColumns, setActiveColumns] = useState({});

  const handleCurrencyChange = (e) => {
    const selected = Object.values(currencies).find(
      (c) => c.label === e.target.value,
    );
    if (selected) setCurrency(selected);
  };

  const toggleColumn = (columnId) => {
    if (window.innerWidth > 767) return;
    setActiveColumns((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setActiveColumns({
          hosting: true,
          domains: true,
          security: true,
          resources: true,
          support: true,
          company: true,
        });
      } else {
        setActiveColumns({
          hosting: false,
          domains: false,
          security: false,
          resources: false,
          support: false,
          company: false,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const messageDiv = document.getElementById("formMessage");
    if (!email || !email.includes("@")) {
      showMessage("Please enter a valid email address", "error", messageDiv);
      return;
    }
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';

    const formData = new FormData();
    formData.append("email", email);
    fetch("process-newsletter.php", { method: "POST", body: formData })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          showMessage("Thank you for subscribing! A confirmation email has been sent.", "success", messageDiv);
          e.target.reset();
        } else {
          showMessage(data.message || "Subscription failed. Please try again.", "error", messageDiv);
        }
      })
      .catch((err) => {
        showMessage("An error occurred. Please try again later.", "error", messageDiv);
        console.error(err);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Subscribe";
      });
  };

  const showMessage = (message, type, element) => {
    element.textContent = message;
    element.style.display = "block";
    element.style.color = type === "success" ? "#4ade80" : "#f87171";
    setTimeout(() => {
      element.style.display = "none";
    }, 5000);
  };

  // Social links now using react-icons components instead of Font Awesome classes
  const socialLinks = [
    { name: "LinkedIn", Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/wefithostofficial/" },
    { name: "Facebook", Icon: FaFacebookF, href: "https://www.facebook.com/share/19JUwmnhS8/" },
    { name: "X (Twitter)", Icon: FaXTwitter, href: "https://x.com/Wefithost_Uk" },
    { name: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/wefithost_official?igsh=b2dpanNoaHRudnpv" },
  ];

  const UK_BASE = "https://www.wefithost.com";

  return (
    <>
      {/* Trust Strip */}
      <div className="trust-strip">
        <div className="container mx-auto px-4">
          <div className="trust-strip-inner">
            <div className="trust-item"><i className="fas fa-server"></i><span>Global Infrastructure</span></div>
            <div className="trust-item"><i className="fas fa-bolt"></i><span>NVMe SSD Storage</span></div>
            <div className="trust-item"><i className="fas fa-shield-alt"></i><span>Free SSL Available</span></div>
            <div className="trust-item"><i className="fas fa-truck-moving"></i><span>Migration Support Available</span></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mainfooterstart mb-0">
        <div className="container mx-auto px-4">
          <div className="footer-grid">

            <div className="footer-column newsletter-section">
              <Link to="/" aria-label="WeFitHost Home">
                <img src={logo} alt="WeFitHost Africa Logo" className="footer-logo" loading="lazy" />
              </Link>
              <p className="company-tagline"><i className="fas fa-rocket"></i>Powering African businesses with reliable hosting.</p>
              <p className="company-desc">Fast, secure and reliable web hosting for African businesses, agencies, developers and growing websites. WeFitHost Africa provides hosting, domains, cloud infrastructure and business email solutions backed by expert support.</p>

              <div className="payment-methods" aria-label="Accepted payment methods">
                <span className="payment-icon"><i className="fab fa-cc-visa"></i> Visa</span>
                <span className="payment-icon"><i className="fab fa-cc-mastercard"></i> Mastercard</span>
                <span className="payment-icon"><i className="fab fa-paypal"></i> PayPal</span>
                <span className="payment-icon"><i className="fab fa-apple"></i> Apple Pay</span>
                <span className="payment-icon"><i className="fab fa-google"></i> Google Pay</span>
              </div>

              <div className="footer-currency">
                <label className="footer-currency-label" htmlFor="footerCurrency">
                  <span><i className="fas fa-coins me-2"></i>Currency</span>
                </label>
                <select
                  id="footerCurrency"
                  value={currency.label}
                  onChange={handleCurrencyChange}
                  className="footer-currency-select"
                >
                  {Object.values(currencies).map((c) => (
                    <option key={c.code} value={c.label}>{c.label}</option>
                  ))}
                </select>
              </div>

              <h5 style={{ marginTop: "50px" }} className="footer-heading" role="button" aria-expanded="true" tabIndex="0">
                <span><i className="fas fa-bell me-2"></i>Stay Updated</span>
                <i className="fas fa-chevron-down accordion-icon" aria-hidden="true"></i>
              </h5>
              <p className="newsletter-desc">
                Receive product updates, hosting tips, maintenance notifications and exclusive offers from WeFitHost Africa.
              </p>
              <form id="newsletterForm" className="mb-3" onSubmit={handleNewsletterSubmit} noValidate>
                <label htmlFor="newsletterEmail" className="sr-only">Email address for newsletter</label>
                <div className="newsletter-group">
                  <input type="email" id="newsletterEmail" name="email" className="newsletter-input" placeholder="Your email address" aria-label="Email for newsletter" required />
                  <button className="newsletter-btn" type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
                </div>
                <div id="formMessage" role="status" aria-live="polite"></div>
              </form>
              <p className="newsletter-privacy">By subscribing you agree to receive marketing emails. You may unsubscribe at any time.</p>

              <div className="social-icons" aria-label="WeFitHost social media">
                {socialLinks.map(({ name, Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className={`footer-column ${activeColumns.hosting ? "active" : ""}`}>
              <h5
                className="footer-heading"
                role="button"
                aria-expanded={activeColumns.hosting}
                tabIndex="0"
                onClick={() => toggleColumn("hosting")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleColumn("hosting");
                  }
                }}
              >
                <span><i className="fas fa-server me-2"></i>Hosting</span>
                <i className="fas fa-chevron-down accordion-icon" aria-hidden="true"></i>
              </h5>
              <ul className="footer-links">
                <li>
                  <Link to="/hosting/shared" className="footer-link">
                    <i className="fas fa-share-alt"></i>Shared Hosting
                  </Link>
                </li>
                <li>
                  <Link to="/hosting/wordpress" className="footer-link">
                    <i className="fab fa-wordpress"></i>WordPress Hosting
                  </Link>
                </li>
                <li>
                  <Link to="/hosting/cloud" className="footer-link">
                    <i className="fas fa-cloud"></i>Cloud Hosting
                  </Link>
                </li>
                <li>
                  <Link to="/hosting/vps" className="footer-link">
                    <i className="fas fa-cube"></i>VPS Hosting
                  </Link>
                </li>
                <li>
                  <a href={`${UK_BASE}/managed-hosting.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-cloud-upload-alt"></i>Managed Hosting
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/reseller-hosting.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-store"></i>Reseller Hosting
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className={`footer-column ${activeColumns.domains ? "active" : ""}`}>
              <h5
                className="footer-heading"
                role="button"
                aria-expanded={activeColumns.domains}
                tabIndex="0"
                onClick={() => toggleColumn("domains")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleColumn("domains");
                  }
                }}
              >
                <span><i className="fas fa-globe me-2"></i>Domains</span>
                <i className="fas fa-chevron-down accordion-icon" aria-hidden="true"></i>
              </h5>
              <ul className="footer-links">
                <li>
                  <Link to="/domains" className="footer-link">
                    <i className="fas fa-search"></i>Search Domains
                  </Link>
                </li>
                <li>
                  <a href={`${UK_BASE}/domain-transfer.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-exchange-alt"></i>Transfer Domains
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/domain-pricing.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-tags"></i>Pricing
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/whois.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-search"></i>WHOIS Lookup
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className={`footer-column ${activeColumns.security ? "active" : ""}`}>
              <h5
                className="footer-heading"
                role="button"
                aria-expanded={activeColumns.security}
                tabIndex="0"
                onClick={() => toggleColumn("security")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleColumn("security");
                  }
                }}
              >
                <span><i className="fas fa-shield-alt me-2"></i>Security</span>
                <i className="fas fa-chevron-down accordion-icon" aria-hidden="true"></i>
              </h5>
              <ul className="footer-links">
                <li>
                  <Link to="/hosting/ssl" className="footer-link">
                    <i className="fas fa-lock"></i>SSL Certificates
                  </Link>
                </li>
                <li>
                  <a href={`${UK_BASE}/website-security.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-shield-alt"></i>Website Security
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/email-protection.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope-open-text"></i>Email Protection
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/website-backup.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-cloud-upload-alt"></i>Website Backups
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/email-migration.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-mail-bulk"></i>Email Migration
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className={`footer-column ${activeColumns.resources ? "active" : ""}`}>
              <h5
                className="footer-heading"
                role="button"
                aria-expanded={activeColumns.resources}
                tabIndex="0"
                onClick={() => toggleColumn("resources")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleColumn("resources");
                  }
                }}
              >
                <span><i className="fas fa-book me-2"></i>Resources</span>
                <i className="fas fa-chevron-down accordion-icon" aria-hidden="true"></i>
              </h5>
              <ul className="footer-links">
                <li>
                  <a href={`${UK_BASE}/knowledge-base.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-book"></i>Knowledge Base
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href="https://blog.wefithost.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-newspaper"></i>Blog
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/sales.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-chart-line"></i>Sales Resources
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/api-access.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-code"></i>API Docs
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className={`footer-column ${activeColumns.support ? "active" : ""}`}>
              <h5
                className="footer-heading"
                role="button"
                aria-expanded={activeColumns.support}
                tabIndex="0"
                onClick={() => toggleColumn("support")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleColumn("support");
                  }
                }}
              >
                <span><i className="fas fa-headset me-2"></i>Support</span>
                <i className="fas fa-chevron-down accordion-icon" aria-hidden="true"></i>
              </h5>
              <ul className="footer-links">
                <li>
                  <a href="https://my.wefithost.com/manage" className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-user"></i>Client Area
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className={`footer-column ${activeColumns.company ? "active" : ""}`}>
              <h5
                className="footer-heading"
                role="button"
                aria-expanded={activeColumns.company}
                tabIndex="0"
                onClick={() => toggleColumn("company")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleColumn("company");
                  }
                }}
              >
                <span><i className="fas fa-building me-2"></i>Company</span>
                <i className="fas fa-chevron-down accordion-icon" aria-hidden="true"></i>
              </h5>
              <ul className="footer-links">
                <li>
                  <Link to="/about" className="footer-link">
                    <i className="fas fa-info-circle"></i>About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    <i className="fas fa-address-card"></i>Contact
                  </Link>
                </li>
                <li>
                  <a href={`${UK_BASE}/reviews.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-star"></i>Reviews
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/partner-program.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-handshake"></i>Partners
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/affiliate.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-user-friends"></i>Affiliates
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href={`${UK_BASE}/careers.html`} className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-briefcase"></i>Careers
                    <i className="fas fa-external-link-alt external-indicator"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <hr className="footer-divider" />

          <div className="legal-footer">
            <div>
              <span className="copyright-text"><i className="far fa-copyright"></i> 2026 WeFitHost Africa. All rights reserved.</span>
              <div className="company-info"></div>
            </div>
            <ul className="footer-legal-links">
              <li>
                <a href={`${UK_BASE}/privacy-policy.html`} className="legal-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-user-shield"></i>Privacy Policy
                </a>
              </li>
              <li>
                <a href={`${UK_BASE}/terms.html`} className="legal-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-file-contract"></i>Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href={`${UK_BASE}/acceptable-policy.html`} className="legal-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-check-circle"></i>Acceptable Use Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;