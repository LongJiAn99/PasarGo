import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from './pages/Login'
import { AuthProvider } from "./contexts/AuthContext";
import Products from './pages/Listings/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pages/register" component={Register} />
            <Route exact path="/pages/login" component={Login} />
            <Route exact path="/pages/Products/Products" component={Products} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
