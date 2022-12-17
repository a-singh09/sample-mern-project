import './App.css';
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>  
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path='*' element={<Errorpage />} />
    </Routes>

    </>
    
  );
}

export default App;
