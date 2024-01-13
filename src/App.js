// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import About from './components/about';

const App = () => {
  return (
    <Router>
      <div>
        <Helmet>
          <meta property="og:url" content="https://your-website-url.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Your Website Title" />
          <meta property="og:description" content="Description of your website" />
          <meta property="og:image" content="https://your-website-url.com/path-to-your-image.jpg" />
        </Helmet>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
