import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeDomainSearch from '../components/home/HomeDomainSearch';
import HomeStats from '../components/home/HomeStats';
import WPPricing from '../components/wordpress-hosting/WPPricing';
import HomeTestimonials from '../components/home/HomeTestimonials';
import HomeFAQ from '../components/home/HomeFAQ';
import HomeCTA from '../components/home/HomeCTA';

const Home = () => {
  return (
    <div className="font-sans selection:bg-indigo-500 selection:text-white">
      <HomeHero />
      <HomeDomainSearch />
      <HomeStats />
      <WPPricing />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeCTA />
    </div>
  );
};

export default Home;