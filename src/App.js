import './App.css';
import Headerbar from './components/Headerbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footerbar from './components/Footerbar';
import Menu from './pages/Menu';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Headerbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Contactus' element={<Contactus/>} />
        </Routes>
      </Router>
      <Footerbar />
    </div>
  );
}

