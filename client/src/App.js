import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/saved">
            <SavedPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
