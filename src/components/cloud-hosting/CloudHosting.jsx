import React from 'react';
import CloudHero from '../components/cloud-hosting/CloudHero';
import CloudTrustStats from '../components/cloud-hosting/CloudTrustStats';
import CloudPricing from '../components/cloud-hosting/CloudPricing';
import CloudFeatures from '../components/cloud-hosting/CloudFeatures';
import CloudUseCases from '../components/cloud-hosting/CloudUseCases';
import CloudTestimonials from '../components/cloud-hosting/CloudTestimonials';
import CloudFAQ from '../components/cloud-hosting/CloudFAQ';
import CloudCTA from '../components/cloud-hosting/CloudCTA';

const CloudHosting = () => {
  return (
    <div className="bg-[#0b1120] min-h-screen">
      <CloudHero />
      <CloudTrustStats />
      <CloudPricing />
      <CloudFeatures />
      <CloudUseCases />
      <CloudTestimonials />
      <CloudFAQ />
      <CloudCTA />
    </div>
  );
};

export default CloudHosting;