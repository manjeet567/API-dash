import { BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import './App.css';
import Activemembers from './pages/Members/Activemembers';
import Admindashboard from './pages/Admindashboard';
import B2bservices from './pages/B2bservices';
import Emplist from './pages/Emplist';
import Empreg from './pages/Empreg';
import Forgotpassform from './pages/Forgotpassform';
import Login from './pages/Login';
import Membersreg from './pages/Members/Membersreg';
import Passchangeform from './pages/Passchangeform';
import Passreset from './pages/Passreset';
import Pendingmembers from './pages/Members/Pendingmembers';
import Profile from './pages/Profile';
import Profileupdate from './pages/Profileupdate';
import Memberregupdate from './pages/Members/Memberregupdate';
import Rejectmember from './pages/Members/Rejectmember';
import Searchservice from './pages/Searchservice';
import Servicelist from './pages/Servicelist';
import Usermailverfy from './pages/Usermailverfy';
import { useState,useEffect } from "react";
import { Contextapi } from "./Contextapi";
import Privateroutes from "./Privateroutes";
import Wallet from "./pages/Wallet";

function App() {
  const[user,setuser]=useState(JSON.parse(window.localStorage.getItem('user')))
  useEffect(()=>{
    window.localStorage.setItem('user',JSON.stringify(user))
  },[user])
  return (
   <Router>
    <Contextapi.Provider value={{user,setuser}}>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route element={<Privateroutes/>}>
      <Route path="/dashboard" element={<Admindashboard/>}></Route>
      <Route path="/forgotpass" element={<Forgotpassform/>}></Route>
      <Route path="/profileshow" element={<Profile/>}></Route>
      <Route path="/changepassword" element={<Passchangeform/>}></Route>
      <Route path="/memberregistraion" element={<Membersreg/>}></Route>
      <Route path="/memberupdate/:id" element={<Memberregupdate/>}></Route>
      <Route path="/activemember" element={<Activemembers/>}></Route>
      <Route path="/rejectmembers" element={<Rejectmember/>}></Route>
      <Route path="/members/:status" element={<Pendingmembers/>}></Route>
      <Route path="/employeereg" element={<Empreg/>}></Route>
      <Route path="/employeelist" element={<Emplist/>}></Route>
      <Route path="/empmenu" element={<Pendingmembers/>}></Route>
      <Route path="/servicelist" element={<Servicelist/>}></Route>
      <Route path="/b2bservices" element={<B2bservices/>}></Route>
      <Route path="/profileupdate/:id" element={<Profileupdate/>}></Route>
      <Route path="/wallet" element={<Wallet/>}></Route>
      </Route>
    </Routes>
    </Contextapi.Provider>
   </Router>
  );
}

export default App;
