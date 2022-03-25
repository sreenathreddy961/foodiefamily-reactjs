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
          {/* <Redirect from = "/menu" to = "/"></Redirect>
          <Redirect from = "/Aboutus" to = "/"></Redirect>
          <Redirect from = "/Contactus" to = "/"></Redirect> */}

          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Contactus' element={<Contactus/>} />
          {/* <Route>
            <h1>404 - Not found</h1>
          </Route> */}
        </Routes>
      </Router>
      <Footerbar />
    </div>
  );
}

