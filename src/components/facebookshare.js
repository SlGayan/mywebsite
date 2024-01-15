import React from 'react';
import { Helmet } from 'react-helmet';

const FacebookShare = ({ title, image, description, url }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image:secure" content={image}/>
      </Helmet>
      <div>
        <a
           href={`https://www.facebook.com/sharer/sharer.php?u=${url}&image=${image}`}
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