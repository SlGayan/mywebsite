import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <title>home page</title>
          <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Description of your page" />
        <meta property="og:image" content="URL to your image" />
        <meta property="og:url" content="https://main.d34lm2jphtlvw6.amplifyapp.com/" />
        <meta property="og:type" content="website" />
        </Helmet>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          ashoka gayan
        </a>
      </header>
    </div>
  );
}
export default App;