import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesTestimonials from '../components/services/ServicesTestimonials';
import ServicesFAQ from '../components/services/ServicesFAQ';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesTestimonials />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
};

export default Services;