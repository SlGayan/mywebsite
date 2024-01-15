import React from 'react';
import FacebookShare from './/components/facebookshare';

const App = () => {
  const title = 'My Page Title';
  const image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.architecturaldigest.com%2Fgallery%2Fcars-future-bentley-bugatti-lamborghini&psig=AOvVaw1qtIeKcOyRaUofh_4Q2owH&ust=1705383860466000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDwxpLY3oMDFQAAAAAdAAAAABAG';
  const description = 'This is my page description.';
  const url = 'https://main.d34lm2jphtlvw6.amplifyapp.com/';

  return (
    <div>
      <FacebookShare title={title} image={image} description={description} url={url} />
    </div>
  );
};

export default App;