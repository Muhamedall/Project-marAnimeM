

import React from "react";

import ListAnime from './Anime/ListAnime';
import { Link } from "react-router-dom";
import { useContext } from "react";
import Attack from './Picturs/ErynYager.png';
import claoud from './Picturs/—Pngtree—floating realistic clouds_8623463.png';
import Foter from './Foter';

import { DataApi  } from './ContextApi/Data-context-Api';
import {SaveContext} from './Savin-folder/SaveContext';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import { faPlay } from '@fortawesome/free-solid-svg-icons';




export default function Homme({searchTerm}){
  const { addToSave  } = useContext(SaveContext);
 
  const contextData = useContext(DataApi);
  
  const {dataAnimeTwo}=contextData;

  const listAnimeTwo=dataAnimeTwo.listAnimeTwo||[];

  const filterAnime = listAnimeTwo.filter(item => item.id === 10);

  console.log("this is anime list :"+filterAnime)
  if (filterAnime.length === 0) {
    console.log("No anime found with id 10");
  } else {
    console.log("Title of the found anime:", filterAnime[0].Title);
  }
  
    return(
        <>
       
    
      <header className="Firsthead" >
      <div className="Newanime">
        <h1 className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-neutral-50
  first-letter:mr-3 first-letter:float-left "><span style={{color:"#fafafa",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Attack on titan</span></h1>
        <p>Enter a world where humanity's last stand 
                is against colossal Titans.<br></br>
                 Attack on Titan follows Eren and friends in
                  a relentless battle,<br></br> packed with jaw-dropping action and <br></br>shocking revelations, 
                creating an addictive, must-watch anime experience.</p>
             <div className="Button_Header">
           
             
             {filterAnime.length > 0 && (
              <Link to={`/Watche/${filterAnime[0].attributes.Title}`}>
                <button className="bg-sky-800 hover:bg-sky-600 text-white font-bold py-2 px-9 border-b-4 border-sky-950 hover:border-blue-500 rounded">
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </Link>
            )}
                  <button onClick={() => addToSave(filterAnime[0])} className="bg-sky-800 hover:bg-sky-600 text-white font-bold py-2 px-4 border-b-4 border-sky-950 hover:border-blue-500 rounded" ><FontAwesomeIcon icon={faBookmark} /></button>
            </div>

        </div>
        
        <div className="TitleAnime ">
          
        <img src={claoud} alt="claoud" style={{maxWidth:"10em",backgroundSize:"cover"}}></img>
        <img src={Attack} alt ="Attack" media="(max-width: 1920px)"></img>
       
        

       
     
        
        
            

        </div>
     
       
        
        


        </header>
        <section className="Section_Anime_Day ">
          
            <p className="Title_Anime">Most Popular Anime</p> 
            <div className="Fall_Anime">
           
              <ListAnime searchTerm={searchTerm}  />
              <div>
            

                
              </div>
            
            </div>

        </section>
        
       

         
        <footer >

          <Foter/>
        </footer>
        
        </>
        


    )



}