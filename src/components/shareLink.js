import React from 'react';
import { Helmet } from 'react-helmet';
import { FacebookProvider, ShareButton, ShareDialog } from 'react-facebook';



function FacebookShareButton() {
    
  
    return (
      <div>
        <Helmet>
          <title>Your Page Title</title>
          <meta property="og:title" content="Your Open Graph Title" />
          <meta property="og:description" content="Your Open Graph Description" />
          <meta property="og:image" content="../../logo192.png" />
         
        </Helmet>
  
        <FacebookProvider appId="723297579521532">
          <ShareButton href="../../logo192.png" quote="Your quote" hashtag="#YourHashtag" >
            Share on Facebook
          </ShareButton>
        </FacebookProvider>
  
        {/* Rest of your component */}
        <h1>Hello, World!</h1>
      </div>
    );
  }
  
  export default FacebookShareButton;
  