import './App.css';
import Home from './components/Home';
import LoginPopup from './components/LoginPopup';
import SignUp from './components/Signup';
import { BrowserRouter, Routes, Link, Route}from 'react-router-dom'
import Spaces from './components/Spaces';
import { useContext ,createContext,useState} from 'react';
import {context} from './UseContext.js';
import SpaceInfo from './components/SpaceInfo';

function App() {
 
 const [isLoggedIn,setLogin] = useState(false);
 console.log(isLoggedIn); 

  return (
    <>
   
    <BrowserRouter>
     {/* <main> */}
     <context.Provider value={[isLoggedIn,setLogin]}>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/signin' element = {<><LoginPopup/></>}/>
          <Route path = '/createaccount' element = {<><SignUp/></>}/>
          <Route path = '/mySpaces' element = {<Spaces/>} />
          <Route path = '/spaceinfo' element = {<SpaceInfo/>} />
       </Routes>
       </context.Provider>
     {/* </main> */}
    </BrowserRouter>
    
    </>
  );
}

export default App;
