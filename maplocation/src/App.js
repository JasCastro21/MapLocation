import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import MapPage from './pages/MapPage';

// Chave da API do Google Maps
export const googleMapsApiKey = "AIzaSyCSCDtLCywopsJaNY1u1Pjr7tXqWdtfxrg";

function App() {
  return (
    <Router>
      <Switch>
        {/* Rota para a página inicial */}
        <Route path="/" component={Home} exact />

        {/* Rota para a página de login */}
        <Route path="/signin" component={SigninPage} exact />

        {/* Rota para a página de cadastro */}
        <Route path="/signup" component={SignupPage} exact />

        {/* Rota para a página do mapa */}
        <Route path="/map" component={MapPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
