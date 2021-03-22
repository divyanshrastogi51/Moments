import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Testform from './Testform';
const App = () => {
  return (
    <>
      <Router>
        <Route path="/posts" exact component={Testform} />
      </Router>
    </>

  );
};

export default App;