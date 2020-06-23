import React from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import Home from './Features/Home/index'
import Moviedetails from './Features/Moviedetails/index'
function App() {
  return (
    <HashRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
		<Route exact path="/movie/:id" component={Moviedetails}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
