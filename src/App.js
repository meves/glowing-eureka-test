import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Header from './header';
import About from './about';
import Projects from './projects';
import Feedback from './feedback';
import Footer from './footer';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
