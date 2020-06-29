import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </React.Fragment>

  );
}

export default App;