
import React from 'react';
import { Helmet } from 'react-helmet';

const MyPage = () => {
  // Your component logic here

  return (
    <div>
      <Helmet>
        <meta property="og:url" content="https://main.d34lm2jphtlvw6.amplifyapp.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dynamic Title" />
        <meta property="og:description" content="Dynamic Description" />
        <meta property="og:image" content="https://main.d34lm2jphtlvw6.amplifyapp.com/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" />
      </Helmet>

      {/* Your component content here */}
    </div>
  );
};

export default MyPage;
