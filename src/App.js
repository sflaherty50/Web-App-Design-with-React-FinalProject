import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import 'react-bootstrap';
import {GlobalProvider} from './context/GlobalState'
import Menu from './components/Menu';
import { Contact } from './components/Contact';
import { About } from './components/About';
import './App.css';


function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Menu></Menu>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/contact" component={Contact} />
          <Route path="/About" component={About} />
          <Home />
          <AddUser />
          <EditUser />
        </Switch>
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;


































































