import React from 'react';


const FacebookShare = ({ title, image, description, url }) => {
  return (
    <>
     
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