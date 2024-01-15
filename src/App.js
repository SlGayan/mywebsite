import React from 'react';
import FacebookShare from './/components/facebookshare';

const App = () => {
  const title = 'My Page Title';
  const image = 'https://main.d34lm2jphtlvw6.amplifyapp.com/logo192.png';
  const description = 'This is my page description.';
  const url = 'https://main.d34lm2jphtlvw6.amplifyapp.com/';

  return (
    <div>
      <FacebookShare title={title} image={image} description={description} url={url} />
    </div>
  );
};

export default App;