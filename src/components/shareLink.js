import React from 'react';
import { Helmet } from 'react-helmet';
import { FacebookProvider, ShareButton, ShareDialog } from 'react-facebook';



function FacebookShareButton() {
    const handleShare = () => {
      // Customize the content to be shared
      const shareContent = {
        method: 'feed',
        link: 'URL_TO_YOUR_PAGE',
        caption: 'Your caption',
        picture: '../../logo192.png',
        description: 'Your description',
      };
  
      // Open the Facebook Share Dialog
      ShareDialog(shareContent);
    };
  
    return (
      <div>
        <Helmet>
          <title>Your Page Title</title>
          <meta property="og:title" content="Your Open Graph Title" />
          <meta property="og:description" content="Your Open Graph Description" />
          <meta property="og:image" content="../../logo192.png" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="400" />
        </Helmet>
  
        <FacebookProvider appId="723297579521532">
          <ShareButton href="URL_TO_YOUR_PAGE" quote="Your quote" hashtag="#YourHashtag" onClick={handleShare}>
            Share on Facebook
          </ShareButton>
        </FacebookProvider>
  
        {/* Rest of your component */}
        <h1>Hello, World!</h1>
      </div>
    );
  }
  
  export default FacebookShareButton;
  