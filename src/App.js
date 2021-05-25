import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Guide from './components/Guide';
import About from './components/About';
import Footer from './components/Footer';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg = 'dark'>
        <Navbar.Brand>
          Logo
        </Navbar.Brand>
      </Navbar>
      <Header />
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
