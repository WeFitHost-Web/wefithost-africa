import React from 'react';
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