import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import socialBanner from '../images/social-banner.jpg';

const baseUrl = process.env.GATSBY_PUBLIC_HOST;

function SEO(props) {
    const { pageTitle, pageDescription, pageRelativeUrl } = props;

    const data = useStaticQuery(graphql`
        query SEOQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                    keywords
                }
            }
        }
    `);
    const { title, description, author, keywords } = data.site.siteMetadata;

    const headTitle = pageTitle ? `${pageTitle} | ${title}` : title;
    const headDescription = pageDescription ?? description;
    const headUrl = baseUrl + (pageRelativeUrl ? pageRelativeUrl : '');
    const headImageUrl = baseUrl + socialBanner;

    return (
        <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>{headTitle}</title>
            <meta name="description" content={headDescription} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:title" content={headTitle} />
            <meta property="og:description" content={headDescription} />
            <meta property="og:url" content={headUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={headImageUrl} />
            <meta name="twitter:title" content={headTitle} />
            <meta name="twitter:description" content={headDescription} />
            <meta name="twitter:url" content={headUrl} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={headImageUrl} />
        </Helmet>
    );
}

SEO.propTypes = {
    pageTitle: PropTypes.string,
    pageDescription: PropTypes.string,
    pageRelativeUrl: PropTypes.string
};

export default SEO
