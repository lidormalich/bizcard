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
import EditProfile from './components/Profile/EditProfile';
import Test from './components/Test';



let themes = {
  light: {
    color: '#121212',
    background: "white",
  },
  dark: {
    color: "white",
    background: "black",
  }
}


export let isLoginGlobal = React.createContext<boolean>(false);
export let userNameGlobal = React.createContext<string>("");
export let siteTheme = React.createContext(themes.light);



function App() {
  let [isLogin, setIsLogIn] = useState<boolean>(false);
  let [username, setUserName] = useState<string>("");
  let [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      let id = JSON.parse(sessionStorage.getItem("userData")!).userID;
      getUserInfo(id).then((res) => {
        setIsLogIn(true);
        setUserName(res.data.name);
      });
    } catch (error) {
      setIsLogIn(false);
      // console.log(error);
    }
  }, []);
  return (

    <div className="App">

      <ToastContainer />

      <Router>
        <isLoginGlobal.Provider value={isLogin}>
          <userNameGlobal.Provider value={username}>
            <siteTheme.Provider value={darkMode ? themes.dark : themes.light}>
              <NavBarCMP setIsLogIn={setIsLogIn} username={username} />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile/edit' element={<EditProfile />} />
                <Route path='/register' element={<Register setIsLogIn={setIsLogIn} setUserName={setUserName} />} />
                <Route path='/signin' element={<Login setIsLogIn={setIsLogIn} setUserName={setUserName} />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/Newcard' element={<NewCardCMP />} />
                <Route path='/Newcardcmp' element={<CreateCard />} />
                <Route path='/Cards' element={<ShowAllCards />} />
                <Route path='/MyCards' element={<UserMyCards />} />
                <Route path='/MyCards/:id' element={<UpdateCard />} />
                <Route path='/test' element={<Test />} />
                <Route path='*' element={<Pnf />} />
              </Routes>
            </siteTheme.Provider>
          </userNameGlobal.Provider>
        </isLoginGlobal.Provider>
      </Router>
      <footer>
        <Footer />
      </footer>

    </div>

  );
}

export default App;
