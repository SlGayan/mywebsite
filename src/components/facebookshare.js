import React from 'react';
import { Helmet } from 'react-helmet';

const FacebookShare = ({ title, image, description, url }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      
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