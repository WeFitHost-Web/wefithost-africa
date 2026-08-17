import React from 'react';
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