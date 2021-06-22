import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from './pages/Login'
import { AuthProvider } from "./contexts/AuthContext";
import Listings from "./pages/Listings"
import ForgotPassword from './pages/ForgotPassword'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import UpdateProfile from './pages/UpdateProfile'
import NewListing from './pages/NewListing'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pages/register" component={Register} />
            <Route exact path="/pages/login" component={Login} />
            <Route exact path="/pages/listings" component={Listings} />
            <Route exact path="/pages/forgotpassword" component={ForgotPassword} />
            <PrivateRoute exact path="/pages/profile-page" component={ProfilePage}  />
            <PrivateRoute exact path="/pages/update-profile" component={UpdateProfile} />
            <PrivateRoute exact path="/pages/new-listing" component={NewListing} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
