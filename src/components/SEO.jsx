import React from 'react';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Wefithost Africa',
  url: 'https://africa.wefithost.com',
  logo: 'https://africa.wefithost.com/logo.png',
  description: 'Reliable web hosting, domain registration and digital solutions for African businesses.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Johannesburg',
    addressCountry: 'ZA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@wefithost.com',
  },
  sameAs: [],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Wefithost Africa',
  url: 'https://africa.wefithost.com',
  description: 'Fast, secure and affordable web hosting and domain registration tailored for businesses across Africa.',
  publisher: {
    '@type': 'Organization',
    name: 'Wefithost Africa',
  },
};

export const seoData = {
  organizationSchema,
  websiteSchema,
};

export default seoData;