import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Basics from './components/Basics';
import Networking from './components/Networking';
import Vmware from './components/Vmware';
import Windows from './components/Windows';
import Linux from './components/Linux';
import Troubleshooting from './components/Troubleshooting';


ReactDOM.render(
  <BrowserRouter>
  <App />
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="Basics" element={<Basics />}></Route>
      <Route path="Networking" element={<Networking />}></Route>
      <Route path="Vmware" element={<Vmware />}></Route>
      <Route path="Windows" element={<Windows />}></Route>
      <Route path="Linux" element={<Linux />}></Route>
      <Route path="Troubleshooting" element={<Troubleshooting />}></Route>
    </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);

