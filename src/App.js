import React from 'react';
import FacebookShare from './/components/facebookshare';

const App = () => {
  const title = 'Sample web site';
  const image = 'https://main.d34lm2jphtlvw6.amplifyapp.com/logo512.png';
  const description = 'This is my page description.';
  const url = 'https://main.d34lm2jphtlvw6.amplifyapp.com/';

  return (
    <div className=''>
     <div className='App'>
     <img src='../logo512.png' className='photo'  alt="A beautiful image"  />
     </div>
     <div>
      <FacebookShare title={title} image={image} description={description} url={url} />
    </div>
    </div>
  );
};

export default App;