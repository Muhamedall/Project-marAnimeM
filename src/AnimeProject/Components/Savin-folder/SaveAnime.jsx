import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import {SaveContext} from '../Savin-folder/SaveContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import Foter from '../Foter';
const SaveAnime=()=>{
  
    const { savestItems, removeFromSaved , addToSave  } = useContext(SaveContext);
    return(
        <>
        <div className='static h-100 w-100'>
      {!savestItems.length > 0 ? (
        <>
        <h2 className='text-center font-serif text-2xl '>
          Your Saved list is empty <br />
          <span className='font-serif text-sm text-gray-400'>
            Add animes saved, so they'll be ready for checkout later.
          </span>
        </h2>
       <Link to="/"> <button style={{marginLeft:'45%' , marginTop:'20%'}} className=' shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded' > <FontAwesomeIcon icon={faBackward} /> Back Acueille</button></Link>
        </>
      ) : (
        <h2 className='text-center font-serif text-2xl '>The saved animes </h2>
        

      )}
      <div className='flex flex-col gap-1 static'>
        
        {savestItems.map((item,idx)=><div key={idx}>
          
           <div className='flex flex-wrap gap-0'>
            
            <div className='rounded-md w-25 bg-gray-100'>
            <FontAwesomeIcon style={{marginLeft:'96%'}} type='submit' onClick={()=>removeFromSaved(item.id) }icon={faDeleteLeft} />
        <p className='font-serif mb-2 text-center'>{item.attributes.Title}</p>
                <img className=' anime-container transition duration-700 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 mb-5 ml-24'
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt={item.attributes.Title}
                  style={{ maxWidth: '40%'}}
                  
                />
                
            </div>
              <div  style={{width:'25%' ,marginTop:'5%',marginLeft:'19%', position:'absolute' }}className=''>
                <p style={{}} className='text-center text-amber-50 text-sm font-mono rounded-t-lg   border-1 border-rose-600 transition ease-in-out delay-150 bg-slate-950 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300'>{item.attributes.description}</p>
 
               
  
                </div>
                </div>

        </div>)}

      </div>
      </div>
 
        <footer style={{marginTop:'20%'}}>
          <Foter/>
        </footer>
        </>
    )


}
export default SaveAnime;