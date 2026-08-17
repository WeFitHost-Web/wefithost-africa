import React from "react";
import VPSHero from "../components/vps-hosting/VPSHero";
import VPSTrustStats from "../components/vps-hosting/VPSTrustStats";
import VPSPricing from "../components/vps-hosting/VPSPricing";
import VPSFeatures from "../components/vps-hosting/VPSFeatures";
import VPSWhoFor from "../components/vps-hosting/VPSWhoFor";
import VPSTestimonials from "../components/vps-hosting/VPSTestimonials";
import VPSFAQ from "../components/vps-hosting/VPSFAQ";
import VPSCTA from "../components/vps-hosting/VPSCTA";

const VPSHosting = () => {
  return (
    <div className="text-slate-100 min-h-screen flex flex-col overflow-x-hidden font-sans">
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