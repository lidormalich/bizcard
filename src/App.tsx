import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarCMP from './components/NavBarCMP';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Profile from './components/Profile/Profile';
import NewCardCMP from './components/NewCard/NewCardCMP';
import CreateCard from './components/NewCard/CreateCard';
import ShowAllCards from './components/ShowAllCards/ShowAllCards';
import { getUserInfo } from './services/usersservices';
import UserMyCards from './components/UserMyCards/UserMyCards';
import Footer from './components/Footer';
import UpdateCard from './components/UpdateCard';
import Pnf from './components/Extra/PageNotFound/Pnf';



// let isLogin: boolean = false;


export let isLoginGlobal = React.createContext<boolean>(false);


function App() {
  let [isLogin, setIsLogIn] = useState<boolean>(false);

  useEffect(() => {
    try {
      let id = JSON.parse(sessionStorage.getItem("userData")!).userID;
      getUserInfo(id).then((res) => { setIsLogIn(res.data) });
      setIsLogIn(true);

    } catch (error) {
      setIsLogIn(false);
    }
    // (!JSON.parse(sessionStorage.getItem("userData")!).userID) {
    //   setIsLogIn(false);
    // } else {

    // }
  }, []);
  return (
    <div className="App">
      <ToastContainer />

      <Router>
        <isLoginGlobal.Provider value={isLogin}>
          <NavBarCMP setIsLogIn={setIsLogIn} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register setIsLogIn={setIsLogIn} />} />
            <Route path='/signin' element={<Login setIsLogIn={setIsLogIn} />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/Newcard' element={<NewCardCMP />} />
            <Route path='/Newcardcmp' element={<CreateCard />} />
            <Route path='/Cards' element={<ShowAllCards />} />
            <Route path='/MyCards' element={<UserMyCards />} />
            <Route path='/MyCards/:id' element={<UpdateCard />} />
            <Route path='*' element={<Pnf />} />
          </Routes>
        </isLoginGlobal.Provider>
      </Router>
      {/* <footer>
        <Footer />
      </footer> */}

    </div>

  );
}

export default App;
