import './App.css';
import Carform from './components/Car Form/Carform';
import Signup from './components/Signup/Signup';
import Login from './components/Login/LoginForm';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login/>} />
        <Route path="/carform" element={<Carform />} />
      </Routes>
    </>
  )
}


export default App;