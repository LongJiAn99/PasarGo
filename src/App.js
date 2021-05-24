import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Guide from './components/Guide';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <Guide />
      <About />
      <Footer />
    </div>
  );
}

export default App;
