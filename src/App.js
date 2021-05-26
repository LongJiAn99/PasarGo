import 'bootstrap/dist/css/bootstrap.css';
import Banner from './pages/Banner';
import About from './pages/About';
import Categories from './pages/Categories';
import Guide from './pages/Guide';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Login from './pages/Login';


import './App.css';

function App() {
    return (
      <>
      <Header />
      <Banner />
      <Categories />
      <Guide/>
      <About/>
      <Footer />
      <Login />
      </>
  );
}

export default App;
