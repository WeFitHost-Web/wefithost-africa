import React from 'react';
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
      <SharedHero />
      <WhatIsSection />
      <FeaturesSlider />
      <ComparisonSection />
      <PricingSection />
      <WhoForSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default SharedHosting;