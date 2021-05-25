import 'bootstrap/dist/css/bootstrap.css';
import logo from './components/images/logo.jpg';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Guide from './components/Guide';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <body>
      <Banner />
      <Categories />
      <Guide />
      <About />
      </body>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
