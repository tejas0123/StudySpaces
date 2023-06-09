import './App.css';
import Home from './components/Home';
import LoginPopup from './components/LoginPopup';
import SignUp from './components/Signup';
import { BrowserRouter, Routes, Link, Route}from 'react-router-dom'
import Spaces from './components/Spaces';
import { useContext ,createContext,useState} from 'react';
import context from './UseContext';

function App() {
 const UseContext = createContext(context);
 const [isLoggedIn,setLogin] = useState(false); 
  return (
    <>
   
    <BrowserRouter>
     <main>
     {/* <UseContext.Provider value={[isLoggedIn,setLogin]}> */}
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/signin' element = {<><LoginPopup/></>}/>
          <Route path = '/createaccount' element = {<><SignUp/></>}/>
          <Route path = '/mySpaces' element = {<Spaces/>} />
       </Routes>
       {/* </UseContext.Provider> */}
     </main>
    </BrowserRouter>
    
    </>
  );
}

export default App;
