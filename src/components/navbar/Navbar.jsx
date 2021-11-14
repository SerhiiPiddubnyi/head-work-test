import React from "react";
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () =>{
    return(
       <div className={style.nav}>
           <div className= {style.item}>
               <NavLink to="/random">Random</NavLink>
           </div>
           <div className= {style.item}>
               <NavLink to="/favourite">Favourite</NavLink>
           </div>


       </div>
    );
}

export  default Navbar;