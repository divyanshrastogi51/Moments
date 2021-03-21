import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import testform from './testform';
const App = () => {
  return (
    <>
      <Router>
        <Route path="/posts" exact component={testform} />
      </Router>
    </>

  );
};

export default App;