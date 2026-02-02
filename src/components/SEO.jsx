import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image }) => {
    const location = useLocation();
    const siteName = 'Vamsi Infra Projects';
    const defaultDescription = 'Leading provider of road safety and road marking solutions in India. Specialized in thermoplastic road marking, traffic sign boards, crash barriers, and over 50 road safety products.';
    const defaultKeywords = 'road safety, road marking, thermoplastic marking, traffic signs, crash barriers, road studs, Vamsi Infra Projects, VIP, Andhra Pradesh, India';
    const siteUrl = 'https://vamsiinfraprojects.com'; // Replace with actual domain if different
    const defaultImage = '/images/hero/home.jpg'; // Ensure this exists or use a logo

    // Construct full title
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Road Safety & Road Marking Solutions`;

    // Construct full URL
    const canonicalUrl = `${siteUrl}${location.pathname}`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={`${siteUrl}${image || defaultImage}`} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={`${siteUrl}${image || defaultImage}`} />
        </Helmet>
    );
};

export default SEO;
