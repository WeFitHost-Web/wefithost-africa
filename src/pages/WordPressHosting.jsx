import React from 'react';
import WPHero from '../components/wordpress-hosting/WPHero';
import WPStats from '../components/wordpress-hosting/WPStats';
import WPWhySection from '../components/wordpress-hosting/WPWhySection';
import WPFeaturesSlider from '../components/wordpress-hosting/WPFeaturesSlider';
import WPShowcase from '../components/wordpress-hosting/WPShowcase';
import WPPerformance from '../components/wordpress-hosting/WPPerformance';
import WPTools from '../components/wordpress-hosting/WPTools';
import WPPricing from '../components/wordpress-hosting/WPPricing';
import WPPlatformFeatures from '../components/wordpress-hosting/WPPlatformFeatures';
import WPTestimonials from '../components/wordpress-hosting/WPTestimonials';
import WPPlugins from '../components/wordpress-hosting/WPPlugins';
import WPFAQ from '../components/wordpress-hosting/WPFAQ';
import WPCTA from '../components/wordpress-hosting/WPCTA';

const WordPressHosting = () => {
  return (
    <div className="overflow-x-hidden">
      {/* DARK */}
      <WPHero />
      {/* LIGHT */}
      <WPStats />
      {/* DARK */}
      <WPWhySection />
      {/* LIGHT */}
      <WPFeaturesSlider />
      {/* DARK */}
      <WPShowcase />
      {/* LIGHT */}
      <WPPerformance />
      {/* DARK */}
      <WPTools />
      {/* LIGHT */}
      <WPPricing />
      {/* DARK */}
      <WPPlatformFeatures />
      {/* LIGHT */}
      <WPTestimonials />
      {/* DARK */}
      <WPPlugins />
      {/* LIGHT */}
      <WPFAQ />
      {/* DARK */}
      <WPCTA />
    </div>
  );
};

export default WordPressHosting;