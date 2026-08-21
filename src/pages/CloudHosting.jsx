import React from 'react';
import { Helmet } from 'react-helmet-async';
import CloudHero from '../components/cloud-hosting/CloudHero';
import CloudTrustStats from '../components/cloud-hosting/CloudTrustStats';
import CloudFeatures from '../components/cloud-hosting/CloudFeatures';
import CloudConfigurator from '../components/cloud-hosting/CloudConfigurator';
import CloudPricing from '../components/cloud-hosting/CloudPricing';
import CloudUseCases from '../components/cloud-hosting/CloudUseCases';
import CloudTestimonials from '../components/cloud-hosting/CloudTestimonials';
import CloudFAQ from '../components/cloud-hosting/CloudFAQ';
import CloudCTA from '../components/cloud-hosting/CloudCTA';

const CloudHosting = () => {
  return (
    <div className="bg-[#0b1120] min-h-screen text-white">
      <Helmet>
        <title>Cloud Hosting Africa | Scalable Cloud Servers | Wefithost Africa</title>
        <meta name="description" content="Wefithost Africa cloud hosting: scalable, flexible cloud servers with pay-as-you-go pricing and enterprise-grade reliability for African businesses." />
        <link rel="canonical" href="https://africa.wefithost.com/hosting/cloud" />
      </Helmet>
      <CloudHero />
      {/* <CloudTrustStats /> */}
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