import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Basics from './components/Basics';
import Networking from './components/Networking';

function App() {
  return (
    <Router>
      <div className="App">

      <Navigation />

      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="Basics" element={<Basics />}></Route>
          <Route path="Networking" element={<Networking />}></Route>
        </Routes>

      </div>
      </div>
    </Router>
  );
}

export default App;
