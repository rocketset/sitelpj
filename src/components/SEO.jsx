import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogTitle, ogDescription, ogUrl, twitterCard, twitterUrl, twitterTitle, twitterDescription }) => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Standard SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />

        {/* Twitter */}
        <meta property="twitter:card" content={twitterCard} />
        <meta property="twitter:url" content={twitterUrl} />
        <meta property="twitter:title" content={twitterTitle} />
        <meta property="twitter:description" content={twitterDescription} />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;