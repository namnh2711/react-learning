import App from '../client/components/App';

const React = require('react');

const ReactDOMServer = require('react-dom/server');

export default () => ReactDOMServer.renderToString(<App />);
