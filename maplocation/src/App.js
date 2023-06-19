import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import MapPage from './pages/MapPage';
export const googleMapsApiKey = "AIzaSyCSCDtLCywopsJaNY1u1Pjr7tXqWdtfxrg";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/map" component={MapPage} exact />
        
      </Switch>
    </Router>
  );
}

export default App;