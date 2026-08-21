import React from 'react';
import { Helmet } from 'react-helmet-async';
import DomainsHero from '../components/domains/DomainsHero';
import DomainsTrustBadges from '../components/domains/DomainsTrustBadges';
import DomainsPricing from '../components/domains/DomainsPricing';
import DomainsFeatures from '../components/domains/DomainsFeatures';
import DomainsUseCases from '../components/domains/DomainsUseCases';
import DomainsTestimonials from '../components/domains/DomainsTestimonials';
import DomainsFAQ from '../components/domains/DomainsFAQ';
import DomainsCTA from '../components/domains/DomainsCTA';

const Domains = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Domain Registration Africa | Buy Domains in Nigeria, Kenya, Ghana | Wefithost Africa</title>
        <meta name="description" content="Register your domain name in Africa with Wefithost Africa. Affordable .com.ng, .co.ke, .com.gh domains and more. Free WHOIS privacy and local support." />
        <link rel="canonical" href="https://africa.wefithost.com/domains" />
      </Helmet>
      <DomainsHero />
      <DomainsTrustBadges />
      <DomainsPricing />
      <DomainsFeatures />
      <DomainsUseCases />
      <DomainsTestimonials />
      <DomainsFAQ />
      <DomainsCTA />
    </div>
  );
};

export default Domains;