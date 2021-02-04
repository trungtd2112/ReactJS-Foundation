import './../CSS/App.css';
import Nav from './Nav'
import Home from './Home';
import Footer from './Footer';
import News from './News';
import Details from './Details';
import Contact from './Contact';
import Navigate from '../router/Navigate';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Navigate></Navigate>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
