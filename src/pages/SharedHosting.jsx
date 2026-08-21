import React from 'react';
import { useSEO } from '../hooks/useSEO';
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
  useSEO({
    title: 'Shared Hosting Africa | Affordable Web Hosting Plans | Wefithost Africa',
    description: 'Wefithost Africa shared hosting plans: fast, secure and affordable hosting for African businesses. Free SSL, cPanel and 24/7 support.',
    canonical: 'https://africa.wefithost.com/hosting/shared'
  });

  return (
    <div className="bg-[#0b1120] min-h-screen">
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