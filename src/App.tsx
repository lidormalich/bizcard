import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarCMP from './components/NavBarCMP';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Profile from './components/Profile/Profile';
import NewCardCMP from './components/NewCard/NewCardCMP';
import CreateCard from './components/NewCard/CreateCard';
import ShowAllCards from './components/ShowAllCards';


function App() {
  return (
    <div className="App">

      <ToastContainer />

      <Router>
        <NavBarCMP />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Newcard' element={<NewCardCMP />} />
          <Route path='/Newcardcmp' element={<CreateCard />} />
          <Route path='/Cards' element={<ShowAllCards />} />

          {/* <Route path='/login' element={<Login setIsLogIn={setIsLogIn} />} />
            <Route path='/home' element={<Home setIsLogIn={setIsLogIn} />} />
            <Route path='/cart' element={<Cart setIsLogIn={setIsLogIn} />} />
            <Route path='/Products' element={<Products setIsLogIn={setIsLogIn} />} />
            <Route path='/profile' element={<Profile setIsLogIn={setIsLogIn} />} /> */}
        </Routes>
      </Router>
      {/* <footer>
      </footer> */}
      {/* <Footer /> */}

    </div>

  );
}

export default App;
