//Navabar.jsx
import { Link, Outlet } from "react-router-dom";
import React, { useContext } from 'react';
import { CarteContext } from "../Shoping/Card-shop/Carte-shop-context";

import { useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


import logo from './Picturs/06208cd1-478d-4b23-9165-4edc3a15b3e4-removebg-preview.png';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



export default function Navbar({ onSearchChange }) {
  const { cartTotalQuantity } = useContext(CarteContext);

 
  const searchRef = useRef('');

  
  const handelChange = () => {
    const term = searchRef.current.value;
    onSearchChange(term);
  };
  
  return (
    <>
 
      <nav className="NavbarHome ">
        <ul >

         
       
          <div className="Logo-Titre">
          <span><img src={logo} alt="logo" className="Logo-img" width="50px"/></span>
          <h1><span>mar</span>Anime</h1>
          </div>
          

          
          <li>
            <Link to="/" className="linkTo ">Home</Link>
          </li>
          <li>
          <Link to="Manga" className="linkTo">Manga</Link>

            
          </li>
          <li>
          <Link to="Shop" className="linkTo">Shop</Link>
          </li>
          <li>
          <Link to="SaveAnime" ><FontAwesomeIcon className='text-slate-50 h-5 hover:text-yellow-300 h-5 mt-1  hover:text-yellow-300 '  type='submit'
           icon={faBookmark}/></Link>
           
          </li>
          <label className="relative block">
            
         
            <div className="zone-recherch">
              
            
            <input
            className="h-8 placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
              border-slate-300 rounded-md py-2 pt-1   pr-3 shadow-sm 
              focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anime.."
            type="text"
            onChange={handelChange}
            ref={searchRef}
            name="search"
            autoComplete="off"
          />
           
           
            
           
        </div>

        
       
          </label>
          <li>
          <Link to="Carte-shop" className="linkTo">
              <FontAwesomeIcon className="text-slate-50 w-10" icon={faShoppingCart} />
              <span>{cartTotalQuantity}</span>
            </Link>
          </li>
          <li>
            <Link to="Sing-up" className="linkTo " >Sign up</Link>

          </li>
          <li>
            <Link to="Login" className="linkTo">Login</Link>
          </li>
      



         
          
         
        </ul>
      </nav>

  
      <Outlet />
    </>
  );
}
