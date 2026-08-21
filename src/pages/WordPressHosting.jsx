import React from "react";
import { Helmet } from "react-helmet-async";
import WPHero from "../components/wordpress-hosting/WPHero";
import WPStats from "../components/wordpress-hosting/WPStats";
import WPWhySection from "../components/wordpress-hosting/WPWhySection";
import WPFeaturesSlider from "../components/wordpress-hosting/WPFeaturesSlider";
import WPShowcase from "../components/wordpress-hosting/WPShowcase";
import WPPerformance from "../components/wordpress-hosting/WPPerformance";
import WPTools from "../components/wordpress-hosting/WPTools";
import WPPricing from "../components/wordpress-hosting/WPPricing";
import WPPlatformFeatures from "../components/wordpress-hosting/WPPlatformFeatures";
import WPTestimonials from "../components/wordpress-hosting/WPTestimonials";
import WPPlugins from "../components/wordpress-hosting/WPPlugins";
import WPFAQ from "../components/wordpress-hosting/WPFAQ";
import WPCTA from "../components/wordpress-hosting/WPCTA";

const WordPressHosting = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>WordPress Hosting Africa | Managed WordPress Hosting | Wefithost Africa</title>
        <meta name="description" content="Wefithost Africa managed WordPress hosting: optimized speed, automatic updates, free SSL, and expert support for your WordPress websites in Africa." />
        <link rel="canonical" href="https://africa.wefithost.com/hosting/wordpress" />
      </Helmet>
      <WPHero />

      {/* <WPStats /> */}

      <WPPricing />

      <WPFeaturesSlider />

      <WPShowcase />

      <WPPerformance />

      <WPTestimonials />

      <WPPlugins />

      <WPFAQ />

      <WPCTA />
    </div>
  );
};

export default WordPressHosting;
