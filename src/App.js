import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Basics from './components/Basics';
import Networking from './components/Networking';
import Vmware from './components/Vmware';
import Windows from './components/Windows';
import Linux from './components/Linux';
import Troubleshooting from './components/Troubleshooting';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



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
            <Route path="Vmware" element={<Vmware />}></Route>
            <Route path="Windows" element={<Windows />}></Route>
            <Route path="Linux" element={<Linux />}></Route>
            <Route path="Troubleshooting" element={<Troubleshooting />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
