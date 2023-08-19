import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './styles/Main.css';
import './styles/NavBar.css';

function App() {
  const blueColor = {
    color: 'blue',
  };

  return (
    <div className="App">
      <div className="container">
        <nav className="nav-bar">
          <span className="logo">Math Magicians</span>
          <ul className="nav-menu">
            <li><Link to="/" style={blueColor}>Home</Link></li>
            <li><Link to="/calculator" style={blueColor}>Calculator</Link></li>
            <li><Link to="/quote" style={blueColor}>Quote</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
