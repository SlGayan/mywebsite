// App.js
import React from 'react';
import ShareImage from './components/facebookshare';
import logo from './logo.svg';

const App = () => {
  const title = 'Example Share Image';
  const description = 'This is an example of sharing an image from a React app to Facebook.';
  const url = 'https://your-react-app-url.com';
  const image = 'https://your-react-app-url.com/your-image-url.jpg';

  return (
    <div className="App">
      <ShareImage url={url} title={title} description={description} image={image} />
    <div>
    <img src={logo} className="App-logo" alt="logo" />
     
    </div>
    </div>
  );
};

export default App;