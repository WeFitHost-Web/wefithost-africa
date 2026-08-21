import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedHero from '../components/shared-hosting/SharedHero';
import WhatIsSection from '../components/shared-hosting/WhatIsSection';
import FeaturesSlider from '../components/shared-hosting/FeaturesSlider';
import ComparisonSection from '../components/shared-hosting/ComparisonSection';
import PricingSection from '../components/shared-hosting/PricingSection';
import WhoForSection from '../components/shared-hosting/WhoForSection';
import TestimonialsSection from '../components/shared-hosting/TestimonialsSection';
import FAQSection from '../components/shared-hosting/FAQSection';
import CTASection from '../components/shared-hosting/CTASection';

const SharedHosting = () => {
  return (
    <div className="bg-[#0b1120] min-h-screen">
      <Helmet>
        <title>Shared Hosting Africa | Affordable Web Hosting Plans | Wefithost Africa</title>
        <meta name="description" content="Wefithost Africa shared hosting plans: fast, secure and affordable hosting for African businesses. Free SSL, cPanel and 24/7 support." />
        <link rel="canonical" href="https://africa.wefithost.com/hosting/shared" />
      </Helmet>
      <SharedHero />
     <PricingSection />
      <FeaturesSlider />
      <ComparisonSection />
      
      <WhoForSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default SharedHosting;