import Header from './Header';
import Navbar from './Navbar';
import Mission from './Mission';
import Health from './Health';
import Education from './Education';
import SeniorLiving from './SeniorLiving';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mission">
              <Mission />
            </Route>
            <Route path="/health">
              <Health />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/seniorliving">
              <SeniorLiving />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
);
}

export default App;
