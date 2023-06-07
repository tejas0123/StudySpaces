import './App.css';
import Home from './components/Home';
import LoginPopup from './components/LoginPopup';
import SignUp from './components/Signup';
import { BrowserRouter, Routes, Link, Route}from 'react-router-dom'
import { useNavigate } from 'react-router';
import Navbar from './components/Navbar';
import Spaces from './components/Spaces';


function App() {
  return (
    <>
    <BrowserRouter>
     <main>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/signin' element = {<><LoginPopup/></>}/>
          <Route path = '/createaccount' element = {<><SignUp/></>}/>
          <Route path = '/mySpaces' element = {<Spaces/>} />
      </Routes>
     </main>
    </BrowserRouter>
    </>
  );
}

export default App;
