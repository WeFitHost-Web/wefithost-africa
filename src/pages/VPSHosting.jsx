import React from 'react';
import { Helmet } from 'react-helmet-async';
import VPSHero from '../components/vps-hosting/Vpshero';
import VPSTrustStats from '../components/vps-hosting/Vpstruststats';
import VPSPricing from '../components/vps-hosting/Vpspricing';
import VPSFeatures from '../components/vps-hosting/Vpsfeatures';
import VPSWhoFor from '../components/vps-hosting/Vpswhofor';
import VPSTestimonials from '../components/vps-hosting/Vpstestimonials';
import VPSFAQ from '../components/vps-hosting/Vpsfaq';
import VPSCTA from '../components/vps-hosting/Vpscta';

const VPSHosting = () => {
  return (
    <div className="bg-[#0b1120] min-h-screen">
      <Helmet>
        <title>VPS Hosting Africa | High-Performance Virtual Servers | Wefithost Africa</title>
        <meta name="description" content="Wefithost Africa VPS hosting: high-performance virtual private servers with full root access, SSD storage and low latency across Africa." />
        <link rel="canonical" href="https://africa.wefithost.com/hosting/vps" />
      </Helmet>
      <VPSHero />
      <VPSTrustStats />
      <VPSPricing />
      <VPSFeatures />
      <VPSWhoFor />
      <VPSTestimonials />
      <VPSFAQ />
      <VPSCTA />
    </div>
  );
};

export default VPSHosting;