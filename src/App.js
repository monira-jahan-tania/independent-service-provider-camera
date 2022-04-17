import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Login from './components/Login/Login';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
