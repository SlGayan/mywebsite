// ShareImage.js
import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const ShareImage = ({ url, title, description, image }) => {
  useEffect(() => {
    window. Facebook && window. Facebook.debug && window. Facebook.debug.info();
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:url" content={url} />
        <meta name="twitter:url" content={url} />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </>
  );
};

export default ShareImage;