import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Web Hosting Africa | Domain Registration & Digital Solutions | Wefithost Africa</title>
        <meta name="description" content="Wefithost Africa offers reliable web hosting, domain registration, WordPress hosting, VPS and cloud hosting across Africa. 24/7 support, 99.9% uptime and local payment methods." />
        <link rel="canonical" href="https://africa.wefithost.com/" />
      </Helmet>
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
