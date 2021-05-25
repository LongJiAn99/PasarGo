import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './pages';
import About from './pages/About';
import Categories from './pages/Categories';
import Guide from './pages/Guide';
import SignUp from './pages/signup';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Banner} />
        <Route path='/categories' component={Categories} />
        <Route path='/about' component={About} />
        <Route path='/guide' component={Guide} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
      <Footer />
    </div>
  );
}

export default App;
