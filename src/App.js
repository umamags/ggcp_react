import Header from './Header';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Intro from './Intro';
import Org from './Org';
import JoinUs from './JoinUs';
import Awards from './Awards';
import Report from './Report';
import Newsletters from './Newsletters';
import Projects from './Projects';
import ContactUs from './ContactUs';
import Test1 from './Test1';
import Test3 from './Test3';
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
            <Route path="/intro">
              <Intro />
            </Route>
            <Route path="/org">
              <Org />
            </Route>
            <Route path="/joinus">
              <JoinUs />
            </Route>
            <Route path="/awards">
              <Awards />
            </Route>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/newsletters">
              <Newsletters />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
            <Route path="/test1">
              <Test1 />
            </Route>
            <Route path="/test3">
              <Test3 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
);
}

export default App;
