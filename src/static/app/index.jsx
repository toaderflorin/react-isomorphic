const ReactDOM  = require('react-dom');
const App = require('./app');

document.addEventListener("DOMContentLoaded", function(event) { 
  ReactDOM.render(<App></App>, document.getElementById('root'));
});