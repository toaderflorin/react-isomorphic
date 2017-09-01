const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const { renderToString } = require('react-dom/server');
const { match, RoutingContext } = require('react-router');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const projectBasePath = require('path').resolve(__dirname, '..');

let tasks = [];

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => console.log('Started successfully, open localhost:3000.'));

let renderRoute = (response, renderProps) => {
};

// app.delete('/tasks/:task', (req, res) => {
//   const taskText = decodeURIComponent(req.params.task);
//   const taskIndex = tasks.indexOf(taskText);
//   tasks.splice(taskIndex, 1);
//   res.send('');
// });

// app.get('/tasks', (req, res) => {
//   res.send(JSON.stringify(tasks));
// });

// app.post('/tasks', (req, res) => {  
//   const taskText = req.body.task;
//   tasks.push(taskText);
//   res.send('');
// });

// app.get('/', (req, res) => {
//   let contents = fs.readFileSync('content/index.html', 'utf8');
//   res.send(contents);
// });

let getPropsFromRoute = ({ routes }, componentProps) => {
  let props = {};
  let lastRoute = routes[routes.length - 1];
  routes.reduceRight((prevRoute, currRoute) => {
    componentProps.forEach(componentProp => {
      if (!props[componentProp] && currRoute.component[componentProp]) {
        props[componentProp] = currRoute.component[componentProp];
      }
    });
  }, lastRoute);
  return props;
};

let renderRoute = (response, renderProps) => {
  let routeProps = getPropsFromRoute(renderProps, ['requestInitialData']);

  
  if (routeProps.requestInitialData) {
    routeProps.requestInitialData().then((data) => {
      let handleCreateElement = (Component, props) => (
        <Component initialData={data} {...props} />
      );
      response.render('index', {
        reactInitialData: JSON.stringify(data),
        content: renderToString(
          <RoutingContext createElement={handleCreateElement} {...renderProps} />
        )
      });
    });
  } else {
    response.render('index', {
      reactInitialData: null,
      content: renderToString(<RoutingContext {...renderProps} />)
    });
  }
};

app.get('*', (request, response) => {
  match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      renderRoute(response, renderProps);
    } else {
      response.status(404).send('Not found');
    }
  });
});