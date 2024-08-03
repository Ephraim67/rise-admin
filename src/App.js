import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import AdminHome from './Screens/AdminHome'
import Recharge from './Screens/Recharge';
import Withdraw from './Screens/Withdraw';
import Profit from './Screens/Profit';
import Transaction from './Screens/Transaction';
import ProductVip1 from './Screens/ProductVip1';
import ProductVip2 from './Screens/ProductVip2';
import ProductVip3 from './Screens/ProductVip3';
import ProductVip4 from './Screens/ProductVip4';
import RecordVip1 from './Screens/RecordVip1';
import RecordVip2 from './Screens/RecordVip2';
import RecordVip3 from './Screens/RecordVip3';
import RecordVip4 from './Screens/RecordVip4';
import Notification from './Screens/Notification';
import UpdateUser from './Screens/UpdateUser';
import UserController from './Screens/UserController';
import SignIn from './Screens/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<SignIn/>}/>
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/recharge' element={<Recharge/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/profit' element={<Profit/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/productvip1' element={<ProductVip1/>}/>
        <Route path='/productvip2' element={<ProductVip2/>}/>
        <Route path='/productvip3' element={<ProductVip3/>}/>
        <Route path='/productvip4' element={<ProductVip4/>}/>
        <Route path='/recordvip1' element={<RecordVip1/>}/>
        <Route path='/recordvip2' element={<RecordVip2/>}/>
        <Route path='/recordvip3' element={<RecordVip3/>}/>
        <Route path='/recordvip4' element={<RecordVip4/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/updateuser' element={<UpdateUser/>}/>
        <Route path='/controller' element={<UserController/>}/>

      </Routes>
      

    </div>
  );
}

export default App;
