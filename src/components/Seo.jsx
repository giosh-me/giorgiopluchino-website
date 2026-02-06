import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, type = 'website', path = '' }) => {
    const siteUrl = 'https://giorgiopluchino.it'; // Replace with actual domain
    const fullUrl = path ? `${siteUrl}${path}` : siteUrl;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{title} | Giorgio Pluchino</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content="Giorgio Pluchino" />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} /> {/* Need to ensure this exists or use a default */}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@giorgiopluchino" /> {/* Update if known */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default Seo;
