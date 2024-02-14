import { useContext } from "react";
import {DataApi } from '../ContextApi/Data-context-Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import Foter from "../Foter";

const Manga =()=>{
    const Manga=useContext(DataApi);
    const { Mangas } = Manga;

    const listMangaData = Mangas.listManga || [];
    //console.log("This is data for manga:"+ JSON.stringify(Manga.Mangas))
    return(
        <>

      
        {listMangaData.map((item ,key)=>
        <>
        <div key={key} className="mt-5 flex flex-col  gap-2">
            
            <section className="ml-30 flex flex-row gap-8">
                <div style={{width:'30%'}}>
                <div><h1 className="font-serif text-amber-900 text-center mb-3 text-slate-950">{item.title}</h1></div>
                <img className="shadow-2xl rounded transition duration-700 ease-in-out hover:transform hover:-translate-y-1 hover:scale-105" style={{width:'65%', marginLeft:'20%' } } src={item.images.jpg.large_image_url} alt={item.title}></img>
                <div style={{marginLeft:'60px' ,marginTop:'8px'}} className=" ">
                <header  >
                <span  style={{padding:'6px' }} > <FontAwesomeIcon icon={faHashtag} /> {item.rank}</span>
            <span  style={{padding:'6px' }} ><FontAwesomeIcon icon={faUser} /> {item.members}</span>
            <span style={{padding:'6px' }} ><FontAwesomeIcon icon={faHeart} /> {item.favorites} </span>
            
                       
                        
                          
                        

                
                </header>

            
          
            </div>
                </div>
                <div style={{width:'80%'}}>
                <p className="font-serif" style={{width:'90%' ,marginTop:'30px'}}>{item.synopsis}</p><br></br>
                <ul>
                    <span className="font-bold">Tags </span><br></br>
                     
                            {item.genres.map((genre, index) => (
                                <div key={index} style={{display:'inline-flex', padding:'3px'}}>
                                <span className=" py-2  text-xs rounded border-orange-950 bg-slate-950 text-slate-50 " > {genre.name}</span>
                                </div>
                            ))}
                        </ul>
                </div>
                
            </section>
            
                       

            <div>
            
            </div>
          
           
        </div>
        
        </>  ) }
        
        <footer>
            <Foter/>
        </footer>
        </>
    )

}
export default Manga;