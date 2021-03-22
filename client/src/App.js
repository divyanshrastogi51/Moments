import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Testform from './components/Testform';
import Homepage from './components/Homepage';
const App = () => {
  return (
    <>
      <h1>Hiii</h1>
      <Router>
        <Switch>
          <Route path="/posts" exact component={Testform} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    </>

  );
};

export default App;