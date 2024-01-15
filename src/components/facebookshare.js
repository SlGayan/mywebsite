import React from 'react';
import { Helmet } from 'react-helmet';

const FacebookShare = ({ title,  description, url }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={'https://main.d34lm2jphtlvw6.amplifyapp.com/logo192.png'} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Helmet>
      <div>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Facebook
        </a>
      </div>
    </>
  );
};

export default FacebookShare;