import './App.css';
import Home from './components/Home';
import LoginPopup from './components/LoginPopup';
import SignUp from './components/Signup';
import { BrowserRouter, Routes, Link, Route}from 'react-router-dom'
import Spaces from './components/Spaces';
import { useContext ,createContext,useState} from 'react';
import {context} from './UseContext.js';
import SpaceInfo from './components/SpaceInfo';
import ViewSpace from './components/ViewSpace';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import { io } from 'socket.io-client';
import Quiz from './components/Quiz';
import TakeQuiz from './components/TakeQuiz';

const socket = io.connect("http://localhost:5000");

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
          <Route path = '/viewspace' element = {<ViewSpace/>} />
          <Route path = '/TakeQuiz' element = {<TakeQuiz/>}/>
          <Route path = '/chat' element = {<><Navbar/><Chat socket = {socket}/></>}/>
          <Route path = '/quiz' element = {<Quiz/>} />
       </Routes>
       </context.Provider>
     {/* </main> */}
    </BrowserRouter>
    
    </>
  );
}

export default App ;

