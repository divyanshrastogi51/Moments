import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Testform from './components/Testform';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Navbar/>
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