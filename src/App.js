import React from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import Home from './Features/Home'
import MovieDetails from './Features/MovieDetails'
function App() {
  return (
    <HashRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
		<Route exact path="/movie/:id" component={MovieDetails}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
