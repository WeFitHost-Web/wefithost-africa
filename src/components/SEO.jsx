import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords = 'web hosting Africa, domain registration, shared hosting, WordPress hosting, VPS hosting, cloud hosting, Wefithost',
  canonical = 'https://africa.wefithost.com',
  ogImage = 'https://africa.wefithost.com/og-image.jpg',
  noindex = false,
  structuredData = null,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:site_name" content="Wefithost Africa" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

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

export default SEO;