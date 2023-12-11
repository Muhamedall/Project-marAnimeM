

import React from "react";

import ListAnime from './ListAnime';
import Attack from './Attackontitan-removebg-preview.png'




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import { faPlay } from '@fortawesome/free-solid-svg-icons';




export default function Homme({dataAnime }){


    return(
        <>
        
    
      <header className="Firsthead" >
      <div className="Newanime">
        <h1 className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left ">Attack on titan</h1>
        <p>Enter a world where humanity's last stand 
                is against colossal Titans.<br></br>
                 Attack on Titan follows Eren and friends in
                  a relentless battle,<br></br> packed with jaw-dropping action and <br></br>shocking revelations, 
                creating an addictive, must-watch anime experience.</p>
             <div className="Button_Header">
           
             
                  <button className="bg-sky-800 hover:bg-sky-600 text-white font-bold py-2 px-9 border-b-4 border-sky-950 hover:border-blue-500 rounded">
                  <FontAwesomeIcon icon={faPlay}/> </button>
                  <button className="bg-sky-800 hover:bg-sky-600 text-white font-bold py-2 px-4 border-b-4 border-sky-950 hover:border-blue-500 rounded"><FontAwesomeIcon icon={faBookmark}/></button>
            </div>

        </div>
        
        <div className="TitleAnime ">
          
        <img src={Attack} alt ="Attack" media="(max-width: 1920px)"></img>
       
        

       
     
        
        
            

        </div>
     
       
        
        


        </header>
        <section className="Section_Anime_Day">
            <p className="Title_Anime">Fall anime is here!</p> 
            <div className="Fall_Anime">
              <ListAnime dataAnime={dataAnime} />
               
              <div>
             
                
              </div>

            </div>


        </section>

         
        
        </>
        


    )



}