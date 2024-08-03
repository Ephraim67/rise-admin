import React,{useState} from 'react'
import {AiFillHome } from "react-icons/ai";
import {FaWallet } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import {BsCurrencyBitcoin } from "react-icons/bs";
import {CgMenuGridO } from "react-icons/cg";
// import {FaCubes } from "react-icons/fa";
import {FaUsers } from "react-icons/fa";
import {IoIosFootball } from "react-icons/io";
import {BiSolidDownArrow} from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from '../Images/Rise6.8e20baee (1).svg'

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);


  const [openList, setOpenList] = useState(false);

  const [isOpenList, setIsOpenList] = useState(false);

  const [openRec, setOpenRec] = useState(false);

  const [isOpenRec, setIsOpenRec] = useState(false);


  const [open1, setOpen1] = useState(false);
  

  return (
    <div>
      
    
      
    <FaBars className='media-bar'  onClick={() =>{setOpen1(!open1)}} style={{cursor:'pointer'}}/>
    

    <div className='side' style={{width:isOpen ? "70px" : "250px"}}>

    <div className='bar' >
      
      <div className='logo-div' style={{display:isOpen ? "none" : "block"}}>
          <img src={logo}/>
      </div>
      
      {/* <FaBars className='icon' onClick={toggle} style={{cursor:'pointer'}}/> */}
    
    </div>
      

      
    <NavLink to='/admin' className='link name' activeclassName = 'active'>
    
      <div >
      
        <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

      </div>
    
    </NavLink>


    <div className='name' style={{display:isOpen ? "none" : "flex"}}>
      <div onClick={() =>{setOpen(!open)}} style={{cursor:'pointer'}}>
        <h4>Payments</h4>
        <BiSolidDownArrow className='icon'/>
      </div>
        

        <Link to='/recharge'><h3 className={`accts ${open ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>Recharge</h3></Link>
        <Link to='/withdraw'><h3 className={`accts ${open ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>Withdraw</h3></Link>
        <Link to='/profit'><h3 className={`accts ${open ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>Profit</h3></Link>
        <Link to='/transaction'><h3 className={`accts ${open ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>Transaction</h3></Link>

    </div>

    <div className='name' style={{display:isOpenList ? "none" : "flex"}}>
      <div onClick={() =>{setOpenList(!openList)}} style={{cursor:'pointer'}}>
        <h4>Product Lister</h4>
        <BiSolidDownArrow className='icon'/>
      </div>
        

        <Link to='/productvip1'><h3 className={`accts ${openList ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>VIP 01</h3></Link>
        <Link to='/productvip2'><h3 className={`accts ${openList ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>VIP 02</h3></Link>
        <Link to='/productvip3'><h3 className={`accts ${openList ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>VIP 03</h3></Link>
        <Link to='/productvip4'><h3 className={`accts ${openList ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>VIP 04</h3></Link>

    </div>

    <div className='name' style={{display:isOpenRec ? "none" : "flex"}}>
      <div onClick={() =>{setOpenRec(!openRec)}} style={{cursor:'pointer'}}>
        <h4>Records</h4>
        <BiSolidDownArrow className='icon'/>
      </div>
        

        <Link to='/recordvip1'><h3 className={`accts ${openRec ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>VIP 01</h3></Link>
        <Link to='/recordvip2'><h3 className={`accts ${openRec ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>VIP 02</h3></Link>
        <Link to='/recordvip3'><h3 className={`accts ${openRec ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>VIP 03</h3></Link>
        <Link to='/recordvip4'><h3 className={`accts ${openRec ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>VIP 04</h3></Link>

    </div>


    <NavLink to='/notification' className='link name' activeclassName = 'active'>
    
      <div>
      
        <h4 style={{display:isOpen ? "none" : "block"}}>Notifications</h4>

      </div>
    
    </NavLink>


    <NavLink to='/updateuser' className='link name' activeclassName = 'active'>
    
      <div>
      
        <h4 style={{display:isOpen ? "none" : "block"}}>Update Users</h4>

      </div>
    
    </NavLink>


    <NavLink to='/controller' className='link name' activeclassName = 'active'>
    
      <div>
      
        <h4 style={{display:isOpen ? "none" : "block"}}>User Controller</h4>

      </div>
    
    </NavLink>


    
    
  </div>


    












    <div className={`side2 ${open1 ? ' active' : 'inactive'}`}>

    <div className='bar' >
      
      
    
    </div>

    
    

    <div className='name' style={{display:isOpen ? "none" : "flex"}}>
    
      <div onClick={() =>{setOpen(!open)}} style={{cursor:'pointer'}}>
        <h4>Sharon Uzu</h4>
        <BiSolidDownArrow className='icon'/>
      </div>
        

        <h3 className={`accts ${open ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>Account Setting</h3>

      </div>
      

      
    <NavLink to='/Dashboard' lassName='link' activeclassName = 'active'>
    
      <div >
      
        <AiFillHome className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

      </div>
    
    </NavLink>


    <NavLink to='/UserRequest' className='link' activeclassName = 'active'>
    
      <div>
      
        <FaUsers className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>User Requests</h4>

      </div>
    
    </NavLink>


    <NavLink to='/AssignOfficer' className='link' activeclassName = 'active'>
    
      <div>
      
        <BsBarChartFill className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Assign Officer</h4>

      </div>
    
    </NavLink>


    <NavLink to='/PaymentConfig' className='link' activeclassName = 'active'>
    
      <div>
      
        <FaToolbox className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Payment Config.</h4>

      </div>
    
    </NavLink>


    <NavLink to='/AccountSetting' className='link' activeclassName = 'active'>
    
      <div>
      
        <BsCurrencyBitcoin className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Account Setting</h4>

      </div>
    
    </NavLink>

    <NavLink to='/Finance' className='link' activeclassName = 'active'>
    
      <div>
      
        <CgMenuGridO className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Finance</h4>

      </div>
    
    </NavLink>



    
    
    </div>


  </div>
  )
}

export default Sidebar